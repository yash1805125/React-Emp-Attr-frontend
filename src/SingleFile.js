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
        Age:"", 
        BusinessTravel:"",
        MonthlyIncome:"", 
        MonthlyRate:"", 
        Department:"",
        DistanceFromHome:"",
        Education:"", 
        EducationField:"", 
        EnvironmentSatisfaction:"", 
        Gender:"", 
        HourlyRate:"", 
        DailyRate:"", 
        JobInvolvement:"",
        JobLevel:"",	
        JobRole:"", 
        JobSatisfaction:"", 
        MaritalStatus:"", 
        NumCompaniesWorked:"",
        OverTime:"", 
        StandardHours:"", 
        PercentSalaryHike:"", 
        PerformanceRating:"", 
        RelationshipSatisfaction:"", 
        StockOptionLevel:"",	
        TotalWorkingYears:"", 
        TrainingTimesLastYear:"", 
        WorkLifeBalance:"", 
        YearsAtCompany:"", 
        YearsInCurrentRole:"", 
        YearsSinceLastPromotion:"", 
        YearsWithCurrManager:"",

        // age: 0,
        // business_travel: 0,
        // monthly_income: 0,
        // department: 0,
        // distance_home: 0,
        // education: 0,
        // education_field: 0,
        // environment_satisfaction: 0,
        // gender: 0,
        // job_involvement: 0,
        // job_level: 0,
        // job_role: 0,
        // job_satisfaction: 0,
        // marital_status: 0,
        // num_comp_worked: 0,
        // overtime: 0,
        // percent_salary_hike: 0,
        // performance_rating: 0,
        // relationship_satisfaction: 0,
        // stock_option_level: 0,
        // total_working_years: 0,
        // training_times_last_y: 0,
        // work_life_balance: 0,
        // years_at_company: 0,
        // years_in_current_role: 0,
        // years_since_last_promotion: 0,
        // years_with_curr_manager: 0,
      },
      result: "",
    };
  }

  handleChange = (event) => {
    const value = Number(event.target.value);
    const name = event.target.name;
    var formData = this.state.formData;
    formData[name] = value;
    console.log(typeof value, formData);
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
    console.log(formData)
    this.setState({ isLoading: true });
    fetch("http://mindhunter.pythonanywhere.com/predict", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        this.setState({
          result: response.result,
          isLoading: false,
        });
      }).catch(err => console.log(err));
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
            placeholder="Enter Emp name"
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
                placeholder="Enter Emp Age"
                name="Age"
                value={formData.Age}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>business_travel</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter business_travel"
                name="BusinessTravel"
                value={formData.BusinessTravel}
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
                name="MonthlyIncome"
                value={formData.MonthlyIncome}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>department</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter department"
                name="Department"
                value={formData.Department}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>MonthlyRate</Form.Label>
              <Form.Control
                type="text"
                placeholder="monthly_rate"
                name="MonthlyRate"
                value={formData.MonthlyRate}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>DailyRate</Form.Label>
              <Form.Control
                type="text"
                placeholder="DailyRate"
                name="DailyRate"
                value={formData.DailyRate}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>

          
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>HourlyRate</Form.Label>
              <Form.Control
                type="text"
                placeholder="HourlyRate"
                name="HourlyRate"
                value={formData.HourlyRate}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>StandardHours</Form.Label>
              <Form.Control
                type="text"
                placeholder="StandardHours"
                name="StandardHours"
                value={formData.StandardHours}
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
                name="DistanceFromHome"
                value={formData.DistanceFromHome}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>education</Form.Label>
              <Form.Control
                type="text"
                name="Education"
                placeholder="education"
                value={formData.Education}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>education_field</Form.Label>
              <Form.Control
                type="text"
                name="EducationField"
                placeholder="education_field"
                value={formData.EducationField}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>environment_satisfaction</Form.Label>
              <Form.Control
                type="text"
                placeholder="environment_satisfaction"
                name="EnvironmentSatisfaction"
                value={formData.EnvironmentSatisfaction}
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
                name="Gender"
                value={formData.Gender}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>job_involvement</Form.Label>
              <Form.Control
                type="text"
                placeholder="job_involvement"
                name="JobInvolvement"
                value={formData.JobInvolvement}
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
                name="JobLevel"
                value={formData.JobLevel}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>job_role</Form.Label>
              <Form.Control
                type="text"
                placeholder="job_role"
                name="JobRole"
                value={formData.JobRole}
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
                name="JobSatisfaction"
                value={formData.JobSatisfaction}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>marital_status</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter marital status"
                name="MaritalStatus"
                value={formData.MaritalStatus}
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
                name="NumCompaniesWorked"
                value={formData.NumCompaniesWorked}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>overtime</Form.Label>
              <Form.Control
                type="text"
                placeholder="overtime"
                name="OverTime"
                value={formData.OverTime}
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
                name="PercentSalaryHike"
                value={formData.PercentSalaryHike}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>performance_rating</Form.Label>
              <Form.Control
                type="text"
                placeholder="performance_rating"
                name="PerformanceRating"
                value={formData.PerformanceRating}
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
                name="RelationshipSatisfaction"
                value={formData.RelationshipSatisfaction}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>stock_option_level</Form.Label>
              <Form.Control
                type="text"
                placeholder="stock_option_level"
                name="StockOptionLevel"
                value={formData.StockOptionLevel}
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
                name="TotalWorkingYears"
                value={formData.TotalWorkingYears}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>training_times_last_y</Form.Label>
              <Form.Control
                type="text"
                placeholder="training_times_last_year"
                name="TrainingTimesLastYear"
                value={formData.TrainingTimesLastYear}
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
                name="WorkLifeBalance"
                value={formData.WorkLifeBalance}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>years_at_company</Form.Label>
              <Form.Control
                type="text"
                placeholder="years_at_company"
                name="YearsAtCompany"
                value={formData.YearsAtCompany}
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
                name="YearsInCurrentRole"
                value={formData.YearsInCurrentRole}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>years_since_last_promotion</Form.Label>
              <Form.Control
                type="text"
                placeholder="years_since_last_promotion"
                name="YearsSinceLastPromotion"
                value={formData.YearsSinceLastPromotion}
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
                name="YearsWithCurrManager"
                value={formData.YearsWithCurrManager}
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
