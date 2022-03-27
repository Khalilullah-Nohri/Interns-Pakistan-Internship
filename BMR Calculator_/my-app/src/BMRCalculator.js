import React, { Component } from 'react'
import './BMRCalculator.css'
class BMRCalculator extends Component {

    constructor() {
        super();
        this.state = {
            gender: '', weight: '', age: '', heightFeet: '', heightInches: '', activity: '', bmr: '', error: ''
        }
    }

    handleAgeChange = (event) => {
        this.setState({ age: event.target.value })
    }
    handleWeightChange = (event) => {
        this.setState({ weight: event.target.value })
    }
    handleHeightFeetChange = (event) => {
        this.setState({ heightFeet: event.target.value })
    }
    handleHeightInchesChange = (event) => {
        this.setState({ heightInches: event.target.value })
    }
    handleGenderChange = (event) => {
        this.setState({ gender: event.target.value });
    }
    handleActivityChange = (event) => {
        this.setState({ activity: event.target.value });
    }
    BMRCalculation() {
        // console.log(this.state.weight)

        let age = this.state.age;
        let gender = this.state.gender;
        let heightFeet = this.state.heightFeet;
        let heightInches = this.state.heightInches;
        let weight = this.state.weight;
        if (age == "" || gender == "" || heightFeet == "" || heightInches == "" || weight == "") {
            this.setState({ error: 'All field are required!' });
            return;
        }
        this.setState({ error: '' });

        /*
        BMR calculation (Metric): 
        Man BMR = 66.5 + ( 13.75 × weight in kg ) + ( 5.003 × height in cm ) – ( 6.755 × age in years )
        Woman BMR = BMR = 655 + ( 9.563 × weight in kg ) + ( 1.850 × height in cm ) – ( 4.676 × age in years )
        */

        let bmrcalc = ''
        let heightInCM = (heightFeet * 30.48) + (heightInches * 2.54)   // formula to convert height(feet'inches) into height(cm)
        let weightInKG = weight * 0.45
        if (gender == 2)
            bmrcalc = 66.5 + (13.75 * weightInKG) + (5.003 * heightInCM) - (6.755 * age)
        else
            bmrcalc = 655 + (9.563 * weightInKG) + (1.850 * heightInCM) - (4.676 * age)

        this.setState({ bmr: bmrcalc })

    }
    caloriesCalculation() {
        let calories = this.state.activity * this.state.bmr
        console.log(calories);
        this.setState({
            finalCalories: calories
        })
    }
    render() {
        let error, result, workout, calories;
        if (this.state.error) {
            error = <div className='error'>{this.state.error}</div>
        }

        if (this.state.bmr) {
            result = <div className='result'>{this.state.bmr}</div>
            calories = <div className='result'>{this.state.finalCalories}</div>

            workout = <div className="workout" >
                <div className="inputwrap">
                    <label className="label">Workout in a Week</label>
                    <select className="activity" value={this.state.activity} onChange={this.handleActivityChange} name="activity">
                        <option value="">Select your Activity</option>
                        <option value="1.2">Sedentary (Very little or no exercise, and desk job)</option>
                        <option value="1.375">Lightly Active (Light exercise 1 to 3 days per week)</option>
                        <option value="1.55">Moderately Active (Moderate exercise 3 to 5 days per week)</option>
                        <option value="1.725">Very Active (Heavy exercise 6 to 7 days per week)</option>
                        <option value="1.9">Extremely Active (Very intense exercise, and physical job, exercise multiple times per day)</option>
                    </select>
                </div>
                <button type="button" onClick={() => this.caloriesCalculation()}>Calculate Calories</button>
                {calories}
            </div>

        }


        return (
            <div id="bmrcalc">
                <div className="form">
                    <h2>BMR &amp; Daily Calorie Calculator</h2>
                    {error}
                    <div className="inputwrap">
                        <label className="label">Gender</label>
                        <label><input type="radio" checked={this.state.gender == "1"} onChange={this.handleGenderChange} className="genderF" name="gender" value="1" />Female</label>
                        <label><input type="radio" checked={this.state.gender == "2"} onChange={this.handleGenderChange} className="genderM" name="gender" value="2" />Male</label>
                    </div>
                    <div className="inputwrap">
                        <label className="label">Weight in Pounds</label>
                        <input type="number" name="weight" value={this.state.weight} onChange={this.handleWeightChange} className="weight" min="0" max="999" />
                    </div>
                    <div className="inputwrap">
                        <label className="label">Height in feet and inches</label>
                        <input type="number" name="heightFeet" value={this.state.heightFeet} onChange={this.handleHeightFeetChange} className="heightFeet" min="0" max="8" />
                        <input type="number" name="heightInches" value={this.state.heightInches} onChange={this.handleHeightInchesChange} className="heightInches" min="0" max="11" />
                    </div>
                    <div className="inputwrap">
                        <label className="label">Age in years</label>
                        <input type="number" value={this.state.age} onChange={this.handleAgeChange} className="age" name="age" min="0" max="120" />
                    </div>
                    <button type="button" onClick={() => this.BMRCalculation()}>Calculate BMR</button>
                    {result}
                    {workout}

                </div>
            </div>
        )
    }
}
export default BMRCalculator;