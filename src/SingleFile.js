import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import "./SU.css";

class SingleFile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      name: "",
      formData: {
        age: 0,
        business_travel: 0,
        monthly_income: 0,
        department: 0,
        distance_home: 0,
        education: 0,
        education_field: 0,
        environment_satisfaction: 0,
        gender: 0,
        job_involvement: 0,
        job_level: 0,
        job_role: 0,
        job_satisfaction: 0,
        marital_status: 0,
        num_comp_worked: 0,
        overtime: 0,
        percent_salary_hike: 0,
        performance_rating: 0,
        relationship_satisfaction: 0,
        stock_option_level: 0,
        total_working_years: 0,
        training_times_last_y: 0,
        work_life_balance: 0,
        years_at_company: 0,
        years_in_current_role: 0,
        years_since_last_promotion: 0,
        years_with_curr_manager: 0,
      },
      result: "",
    };
  }

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    var formData = this.state.formData;
    formData[name] = value;
    console.log(value, name, typeof formData, formData);
    this.setState({
      formData,
    });
  };

  handleChange2 = (e) => {
    const value = e.target.value;
    this.setState({
      name: value,
    });
  };

  handlePredictClick = (event) => {
    const formData = this.state.formData;
    this.setState({ isLoading: true });
    fetch("https://heroku-flask-emp-attr.herokuapp.com/prediction", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          result: response.result,
          isLoading: false,
        });
      });
  };

  handleCancelClick = (event) => {
    this.setState({ result: "" });
  };

  render() {
    const isLoading = this.state.isLoading;
    const name = this.state.name;
    const formData = this.state.formData;
    const result = this.state.result;

    return (
      <Container>
        <div className="p1">
          <input
            className="t1"
            placeholder="Enter your name"
            type="text"
            value={name}
            onChange={this.handleChange2}
          />
        </div>
        <div className="content">
          {/* <Form> */}
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>age</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Age"
                name="age"
                value={formData.age}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>business_travel</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter business_travel"
                name="business_travel"
                value={formData.business_travel}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>monthly_income</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter monthly_income"
                name="monthly_income"
                value={formData.monthly_income}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>department</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter department"
                name="department"
                value={formData.department}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>distance_home</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter distance_home"
                name="distance_home"
                value={formData.distance_home}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>education</Form.Label>
              <Form.Control
                type="text"
                name="education"
                placeholder="education"
                value={formData.education}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>education_field</Form.Label>
              <Form.Control
                type="text"
                name="education_field"
                placeholder="education_field"
                value={formData.education_field}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>environment_satisfaction</Form.Label>
              <Form.Control
                type="text"
                placeholder="environment_satisfaction"
                name="environment_satisfaction"
                value={formData.environment_satisfaction}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>gender</Form.Label>
              <Form.Control
                type="text"
                placeholder="gender"
                name="gender"
                value={formData.gender}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>job_involvement</Form.Label>
              <Form.Control
                type="text"
                placeholder="job_involvement"
                name="job_involvement"
                value={formData.job_involvement}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>job_level</Form.Label>
              <Form.Control
                type="text"
                placeholder="job_level"
                name="job_level"
                value={formData.job_level}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>job_role</Form.Label>
              <Form.Control
                type="text"
                placeholder="job_role"
                name="job_role"
                value={formData.job_role}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>job_satisfaction</Form.Label>
              <Form.Control
                type="text"
                placeholder="job_satisfaction"
                name="job_satisfaction"
                value={formData.job_satisfaction}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>marital_status</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter marital status"
                name="marital_status"
                value={formData.marital_status}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>num_comp_worked</Form.Label>
              <Form.Control
                type="text"
                placeholder="companies_worked"
                name="num_comp_worked"
                value={formData.num_comp_worked}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>overtime</Form.Label>
              <Form.Control
                type="text"
                placeholder="overtime"
                name="overtime"
                value={formData.overtime}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>percent_salary_hike</Form.Label>
              <Form.Control
                type="text"
                placeholder="salary_hike"
                name="percent_salary_hike"
                value={formData.percent_salary_hike}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>performance_rating</Form.Label>
              <Form.Control
                type="text"
                placeholder="performance_rating"
                name="performance_rating"
                value={formData.performance_rating}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>relationship_satisfaction</Form.Label>
              <Form.Control
                type="text"
                placeholder="relationship_satisfaction"
                name="relationship_satisfaction"
                value={formData.relationship_satisfaction}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>stock_option_level</Form.Label>
              <Form.Control
                type="text"
                placeholder="stock_option_level"
                name="stock_option_level"
                value={formData.stock_option_level}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>total_working_years</Form.Label>
              <Form.Control
                type="text"
                placeholder="total_working_years"
                name="total_working_years"
                value={formData.total_working_years}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>training_times_last_y</Form.Label>
              <Form.Control
                type="text"
                placeholder="training_times_last_year"
                name="training_times_last_y"
                value={formData.training_times_last_y}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>work_life_balance</Form.Label>
              <Form.Control
                type="text"
                placeholder="work_life_balance"
                name="work_life_balance"
                value={formData.work_life_balance}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>years_at_company</Form.Label>
              <Form.Control
                type="text"
                placeholder="years_at_company"
                name="years_at_company"
                value={formData.years_at_company}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>years_in_current_role</Form.Label>
              <Form.Control
                type="text"
                placeholder="years_in_current_role"
                name="years_in_current_role"
                value={formData.years_in_current_role}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>years_since_last_promotion</Form.Label>
              <Form.Control
                type="text"
                placeholder="years_since_last_promotion"
                name="years_since_last_promotion"
                value={formData.years_since_last_promotion}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>years_with_curr_manager</Form.Label>
              <Form.Control
                type="text"
                placeholder="years_with_curr_manager"
                name="years_with_curr_manager"
                value={formData.years_with_curr_manager}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Row>
            <Col>
              <Button
                block
                variant="success"
                disabled={isLoading}
                onClick={!isLoading ? this.handlePredictClick : null}
              >
                {isLoading ? "Making prediction" : "Predict"}
              </Button>
            </Col>
            <Col>
              <Button
                block
                variant="danger"
                disabled={isLoading}
                onClick={this.handleCancelClick}
              >
                Reset prediction
              </Button>
            </Col>
          </Row>
          {/* </Form> */}
          {result === "" ? null : (
            <Row>
              <Col className="result-container">
                {result === "Attrition No" ? (
                  <h5 id="result1">{name + ` : ` + result}</h5>
                ) : (
                  <h5 id="result2">{name + ` : ` + result}</h5>
                )}
              </Col>
            </Row>
          )}
        </div>
      </Container>
    );
  }
}

export default SingleFile;
