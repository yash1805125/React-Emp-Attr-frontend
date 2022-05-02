import React, { Component } from "react";
import "./App.css";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SingleFile from "./SingleFile";
import MultipleFile from "./MultipleFile";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = JSON.parse(window.localStorage.getItem("state")) || {
      flag: 0,
    };
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
      <Router>
        <Container>
          <Form>
            <div>
              <h1 className="title">Employee Attrition Detection</h1>
            </div>
            {flag === 0 ? (
              <div>
                <h1 className="b">Choose the type of Prediction Method</h1>
                <button className="single">
                  <Link to="/1st" onClick={this.changeRoute1}>
                    <b>Single User</b>
                  </Link>
                </button>
                {/* <Link className="single" to="/1st" onClick={this.changeRoute1}>
                  SingleUser
                </Link> */}
                <button className="multiple">
                  <Link to="/2nd" onClick={this.changeRoute2}>
                    <b>Multiple User</b>
                  </Link>
                </button>
                {/* <Link to="/2nd" onClick={this.changeRoute2}>
                  MultipleUser
                </Link> */}
              </div>
            ) : (
              <div>
                <button className="home">
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
                {/* <Route
                path="/"
                element={<App />}
                
              /> */}
                <Route path="/1st" element={<SingleFile />} />

                <Route path="/2nd" element={<MultipleFile />} />
              </Routes>
            </div>
          </Form>
        </Container>
      </Router>
    );
  }
}

export default App;
