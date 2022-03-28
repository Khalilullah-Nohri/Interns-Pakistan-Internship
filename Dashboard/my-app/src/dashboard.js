import React, { Component } from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

import './dashboard.css'
import WidgetText from './widgetText'
import WidgetBar from './widgetBar3D'
import WidgetPareto3D from './widgetPareto3D'


//excel import
const config = {
    apiKey: 'AIzaSyDMu-Vw30ykPPmFT3cXeunzKEi4EahzglI',
    spreadsheetId: '1vcDPrMexD8bxNwwzK9IxF8wch6Hfezq2eooJACDiqgg'
}
const url = `https://sheets.googleapis.com/v4/spreadsheets/${config.spreadsheetId}
/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=${config.apiKey}`;



export default class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
            items: [],
            dropdownOptions: [],
            trendStore: [],
            selectedValue: null,
            socialSourceViews: null,
            directSourceViews: null,
            referralSource: null,
            pageViews: null,
            sessions:null,
            users: null,
            newUsers: null,
            usersArr: [],
        };
    }

    getData = argument => {

        const arr = this.state.items;
        const arrLen = arr.length;
        let socialSourceViews, directSourceViews, referralSource, pageViews, users, newUsers,sessions = 0;

        let selectedValue = null
        let usersArr = []
        let trendStore = [];

        for (let i = 0; i < arrLen; i++) {
            if (argument === arr[i]["month"]) {

                socialSourceViews = arr[i].social_source;
                directSourceViews = arr[i].direct_source;
                referralSource = arr[i].referral_source;
                pageViews = arr[i].page_views;
                newUsers = arr[i].new_users;
                users = arr[i].users;
                sessions=arr[i].sessions


                trendStore.push({
                    label: "Social Source",
                    value: arr[i].social_source,
                }, {
                    label: "Referral Source",
                    //alpha: 5,
                    value: arr[i].referral_source,
                }, {
                    label: "Direct Source",
                    //alpha: 5,
                    value: arr[i].direct_source,
                }
                )
                usersArr.push({
                    label: "Users",
                    value: arr[i].users,
                }, {
                    label: "New Users",
                    //alpha: 5,
                    value: arr[i].new_users,
                }
                );
            }
        }
        selectedValue = argument;

        this.setState({
            socialSourceViews: socialSourceViews,
            directSourceViews: directSourceViews,
            referralSource: referralSource,
            pageViews: pageViews,
            users: users,
            newUsers: newUsers,
            trendStore: trendStore,
            usersArr: usersArr,
            sessions:sessions
        });
    };

    updateDashboard = event => {
        this.getData(event.value);
        this.setState({ selectedValue: event.value },
            // to check , working or not
            () => {
                console.log(this.state.users)
            }

        );
    };

    componentDidMount() {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                let batchRowValues = data.valueRanges[0].values;

                const rows = [];

                for (let i = 1; i < batchRowValues.length; i++) {
                    let rowObject = {};
                    for (let j = 0; j < batchRowValues[i].length; j++) {
                        rowObject[batchRowValues[0][j]] = batchRowValues[i][j];
                    }
                    rows.push(rowObject);
                }

                // dropdown options
                let dropdownOptions = [];

                for (let i = 0; i < rows.length; i++) {
                    dropdownOptions.push(rows[i].month);
                }

                dropdownOptions = Array.from(new Set(dropdownOptions)).reverse();
                this.setState(
                    {
                        items: rows,
                        dropdownOptions: dropdownOptions,
                        selectedValue: "Jan 2018"
                    },
                    () => this.getData("Jan 2018")
                );

            });
    }


    // Preparing the chart data
    render() {

        return (
            <div>
                {/* <WidgetText title={"Title"}  value={7959} description={"Made for eachother"}/>
        <WidgetText title={"Title2"} value={7959} description={"Made for eachother"}/>
        <WidgetText title={"Title3"} value={7959} description={"Made for eachother"}/>
        <WidgetText title={"Title4"} value={7959} description={"Made for eachother"}/>
        <WidgetText title={"Title5"} value={7959} description={"Made for eachother"}/>
        <WidgetText title={"Title6"} value={7959} description={"Made for eachother"}/> */}

                <Container fluid>
                    <Row className='TopHeader'>
                        <Col>Dashboard</Col>
                        <Col>
                            <Dropdown options={this.state.dropdownOptions} onChange={this.updateDashboard} value={this.state.selectedValue} placeholder="Select an Option" />
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row className='mainDashboard'>
                        <Col>
                            <WidgetText title={"Social Source"} value={this.state.socialSourceViews} description={"Sources Values"} />
                        </Col >
                        <Col>
                            <WidgetText title={"Direct Source"} value={this.state.directSourceViews} description={"Sources Values"}/>
                        </Col >
                        <Col>
                            <WidgetText title={"Referral Source"} value={this.state.referralSource}  description={"Sources Values"}/>
                        </Col >
                    </Row>
                </Container>
                <Container>
                    <Row>

                        <Col>
                            <WidgetBar title={"Widget Bar"} data={this.state.trendStore} />
                        </Col>
                        <Col>
                            <WidgetPareto3D title={"Widget Patero"} data={this.state.usersArr} />
                        </Col>

                    </Row>
                </Container>
                <Container>
                    <Row >
                        <Col>
                            <WidgetText title={"Sessions"} value={this.state.sessions}  description={"Good To Go"}/>
                        </Col >
                        <Col>
                            <WidgetText title={"Page Views"} value={this.state.pageViews} description={"Good To GO"}  />
                        </Col >
                        {/* <Col>
                            <WidgetText title={"Referral Source"} value={this.state.referralSource}  />
                        </Col > */}
                    </Row>
                </Container>

            </div>
        )
    }
}
