import React, { Component } from "react";
import "./Home.css";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SingleFile from "./SingleFile";
import MultipleFile from "./MultipleFile";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = JSON.parse(window.localStorage.getItem("state")) || {
      flag: 0,
    };

    // Binding the event handler to the class instance
    this.handlePopstate = this.handlePopstate.bind(this);
  }

  // Adding the event listener when the component mounts
  componentDidMount() {
    window.addEventListener("popstate", this.handlePopstate);
  }

  // To Remove the event listener when the component unmounts
  componentWillUnmount() {
    window.removeEventListener("popstate", this.handlePopstate);
  }

  // Defining the event handler to be executed when the popstate event occurs
  handlePopstate(event) {
    // console.log(event);
    if (this.state.flag === 1 || this.state.flag === 2)
      this.setState({ flag: 0 });
    else this.setState({ flag: 1 });
  }

  setState(state) {
    window.localStorage.setItem("state", JSON.stringify(state));
    super.setState(state);
  }

  changeRoute1 = () => {
    this.setState({ flag: 1 });
  };

  changeRoute2 = () => {
    this.setState({ flag: 2 });
  };

  render() {
    const flag = this.state.flag;
    console.log(flag);
    return (
      <div className="Home">
        <Router>
          <Container>
            <Form>
              <div>
                <h1 className="title">Employee Attrition Detection</h1>
              </div>
              {flag === 0 ? (
                <div>
                  <h1 className="b">Choose the type of Prediction Method</h1>
                  <br></br>
                  <div className="small-div-fix">
                    <button type="button" className="single">
                      <Link to="/1st" onClick={this.changeRoute1}>
                        <b>Single User</b>
                      </Link>
                    </button>

                    <button type="button" className="multiple">
                      <Link to="/2nd" onClick={this.changeRoute2}>
                        <b>Multiple User</b>
                      </Link>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="home-fix">
                  <button type="button" className="home">
                    <Link
                      to="/"
                      onClick={() => {
                        this.setState({ flag: 0 });
                      }}
                    >
                      <b>HOME</b>
                    </Link>
                  </button>
                </div>
              )}

              <div>
                <Routes>
                  <Route path="/1st" element={<SingleFile />} />

                  <Route path="/2nd" element={<MultipleFile />} />
                </Routes>
              </div>
            </Form>
          </Container>
        </Router>
      </div>
    );
  }
}

export default Home;
