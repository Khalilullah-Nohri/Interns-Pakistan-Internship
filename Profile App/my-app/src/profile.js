import React from "react";
import './profile.css'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    Switch
} from "react-router-dom";          // for this install react-router-dom , by npm uninstall react-router-dom ,but if u install this module , u will get error on using Switch , so for this go back on previous version by, npm install react-router-dom@5.2.0

export default function Profile() {
    return (

        <Router>
            <div id="container">

                <header>
                    <div className="quoteoftheday">Profile</div>
                    <div className="name">Nohri</div>
                </header>

                <article>
                    <div className="quote">
                        <h1>After Every Hardship, there is ease.</h1>
                    </div>

                    <div className="quoteby">
                        <h4>Khalilullah Nohri</h4>
                    </div>
                </article>

                <footer>
                    <div className="skills">
                        <h6>Menu</h6>
                        <ul>
                            <li><Link to="/">Introduction </Link></li>
                            <li><Link to="education">Education </Link></li>
                            <li><Link to="professional">Professional Experience</Link></li>
                            <li><Link to="contact">Contact</Link></li>
                        </ul>
                    </div>

                    <Switch>
                        <Route exact path="/">
                            <div className="content">               {/* other way is to , create separate Component and create rfc(react functional component) in that file and just call here*/}
                                <p>
                                    A highly motivated, hard worker, team player, and problem solver, who can manage
                                    all assigned client/company tasks related to product performance by implementing
                                    optimizing SQL queries and different programming logics, ultimaetly which reduce the
                                    operation time. I have recently done my B.E Computer System and cleared all the major
                                    subjects with flying colors. BESIDES this, I am fond of numerous programming
                                    languages and Data-Base management, along with effectively co-ordinating a project
                                    from scratch to finish by using good communication and interpersonal skills.
                                    <br />
                                    Primarily, my milestone is, to start a career as a Computer Engineer, ultimately to
                                    become a fully-qualified and experienced Developer.</p>
                            </div>
                        </Route>
                        <Route exact path="/education">
                            <div className="content">
                                <table border="2px">

                                    <tr>
                                        <th>Education</th>
                                        <th>Instititue</th>
                                        <th>Start</th>
                                        <th>End</th>
                                        <th>Percentage/CGPA</th>
                                    </tr>
                                    <tr>
                                        <td>BE(ComputerSystem)</td>
                                        <td> Mehran UET Jamshoro </td>
                                        <td>Oct 23, 2017</td>
                                        <td>Dec 15 ,2021</td>
                                        <td>3.55 CGPA</td>

                                    </tr>
                                    <tr>
                                        <td>Intermediate</td>
                                        <td>Boys Degree College
                                            Mithi Tharparkar</td>
                                        <td>Aug, 2015</td>
                                        <td>May,2017 </td>
                                        <td>81%</td>

                                    </tr>
                                    <tr>
                                        <td>Matriculation</td>
                                        <td>Army Public School
                                            Mithi Tharparkar</td>
                                        <td>April, 2013 </td>
                                        <td>May ,2015</td>
                                        <td>80%</td>

                                    </tr>

                                </table>
                            </div>
                        </Route>
                        <Route exact path="/professional">
                            <div className="content">
                                <table border="2px">

                                    <tr>
                                        <th>Course/Certificate</th>
                                        <th>Organization</th>
                                        <th>Duration</th>
                                    </tr>
                                    <tr>
                                        <td>Web-Development</td>
                                        <td> Internship and Training
                                            Hyderabad
                                        </td>
                                        <td>One week</td>

                                    </tr>
                                    <tr>
                                        <td>Programming Essentials in
                                            Python</td>
                                        <td>SAYLANI WELFARE
                                            INTERNATIONAL TRUST Karachi
                                        </td>
                                        <td>Four Months</td>

                                    </tr>
                                    <tr>
                                        <td>Introduction to
                                            Cybersecurity
                                        </td>
                                        <td>CICSO Acadmey</td>
                                        <td>Two weeks</td>

                                    </tr>
                                    <tr>
                                        <td>Web Developer</td>
                                        <td>Interns PK</td>
                                        <td>One and Half Month</td>

                                    </tr>
                                </table>
                            </div>
                        </Route>
                        <Route exact path="/contact">
                            <div className="content">
                                <ul>
                                    <li> <p><a href="https://www.linkedin.com/in/khalilullah-nohri-73b712179/" target="_blank">LINKEDIN</a></p> </li>
                                    <li> <p><a href="mailto:nohrikhalilullah@gmail.com" target="_blank">GMAIL</a></p> </li>
                                    <li> <p><a href="https://github.com/Khalilullah-Nohri" target="_blank">GITHUB</a></p> </li>
                                </ul>

                            </div>
                        </Route>
                    </Switch>
                </footer>
            </div>
        </Router>

    );
}
// function Home() {
//     return <h2>Home</h2>;
// }

// function About() {
//     return <h2>About</h2>;
// }

// function Users() {
//     return <h2>Users</h2>;
// }