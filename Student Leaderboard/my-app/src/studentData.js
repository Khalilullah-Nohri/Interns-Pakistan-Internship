import React, { Component } from 'react';
import './studentData.css'
import './App.css'
class Student extends Component {

    constructor() {
        super();
        this.state = {
            score: 0
        }
    }

    componentDidMount() {           // lifecycle

        this.setState({
            score: this.props.score
        },
            () => {
                
                if (this.state.score >= 350) {
                    this.setState({
                        success: true,
                    })

                }
                else if (this.state.score >= 350 && (this.state.score >= 340 || this.state.score < 349)) {
                    this.setState({
                        normal: true,
                    })

                }
                else {
                    this.setState({
                        success: false,
                        normal: false
                    })
                }
            }

           )  ;

    }

    incrementScore() {
        this.setState({
            score: this.state.score + 1
        },
            () => {
                if (this.state.score >= 350) {
                    this.setState({
                        success: true,
                        normal: false
                    })
                }
                else if (this.state.score >= 340 && this.state.score < 350) {
                    this.setState({
                        normal: true,
                        success: false
                    })

                }
                else {
                    this.setState({
                        normal: false,
                        success: false
                    })
                }

            }
        )
    }
    decrementScore() {
        this.setState({
            score: this.state.score - 1
        },
            () => {
                if (this.state.score >= 350) {
                    this.setState({
                        success: true,
                        normal: false
                    })
                }
                else if (this.state.score >= 340 && this.state.score < 350) {
                    this.setState({
                        normal: true,
                        success: false
                    })

                }
                else {
                    this.setState({
                        normal: false,
                        success: false
                    })
                }

            }


        )
    }
    render() {
        const isSuccess = this.state.success;
        const isNormal = this.state.normal                  // score between 340 and 349 , it doesn't show something
        let text;
        if (isNormal)
            text = <span>Keep Going</span>
        else if (isSuccess)
            text = <span>SUCCESS</span>
        else
            text = <span >FAIL</span>
        return (
            <div className='student'>
                <div className='left'>

                    <h2 className='studentName'>
                        {this.props.name}
                        <button className='addScorebtn' onClick={() => this.incrementScore()}>+</button>
                        <button className='addScorebtn' onClick={() => this.decrementScore()}>-</button>
                    </h2>
                    <p className='universityName'>{this.props.university} {text}</p>

                </div>
                <div className='right'>

                    <div className='score'>{this.state.score}</div>

                </div>

            </div>
        );
    }


}




export default Student