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
        Age: "",
        BusinessTravel: "",
        MonthlyIncome: "",
        MonthlyRate: "",
        Department: "",
        DistanceFromHome: "",
        Education: "",
        EducationField: "",
        EnvironmentSatisfaction: "",
        Gender: "",
        HourlyRate: "",
        DailyRate: "",
        JobInvolvement: "",
        JobLevel: "",
        JobRole: "",
        JobSatisfaction: "",
        MaritalStatus: "",
        NumCompaniesWorked: "",
        OverTime: "",
        StandardHours: "",
        PercentSalaryHike: "",
        PerformanceRating: "",
        RelationshipSatisfaction: "",
        StockOptionLevel: "",
        TotalWorkingYears: "",
        TrainingTimesLastYear: "",
        WorkLifeBalance: "",
        YearsAtCompany: "",
        YearsInCurrentRole: "",
        YearsSinceLastPromotion: "",
        YearsWithCurrManager: "",
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
    // console.log(formData)
    let flag = 0;
    Object.values(formData).forEach((val) => {
      if (val.length === 0) flag = 1;
    });
    if (flag === 1) return alert("Please provide all data");

    this.setState({ isLoading: true });
    fetch("https://mindhunter.pythonanywhere.com/predict", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        this.setState({
          result: response.result,
          isLoading: false,
        });
      })
      .catch((err) => console.log(err));
  };

  handleOptions = (e) => {
    const value = Number(e.target.value[0]);
    if (isNaN(value)) {
      console.log(e.target.value[0]);
      return;
    }
    const name = e.target.name;
    var formData = this.state.formData;
    formData[name] = value;
    console.log(typeof value, formData);
    this.setState({
      formData,
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
            placeholder="Enter Emp Name"
            type="text"
            value={name}
            onChange={this.handleChange2}
          />
        </div>
        <div className="content">
          {/* <Form> */}
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Emp Age"
                name="Age"
                value={formData.Age}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Business_travel</Form.Label>
              {/* <Form.Control
                type="text"
                placeholder="Enter business_travel"
                name="BusinessTravel"
                value={formData.BusinessTravel}
                onChange={this.handleChange}
              /> */}
              <br></br>
              <select
                className="options"
                name="BusinessTravel"
                //  value={formData.BusinessTravel}
                onChange={this.handleOptions}
              >
                <option>Choose an option</option>
                <option>0 - Travel_Rarely </option>
                <option>1 - Travel_Frequently</option>
                <option>2 - Non-Travel</option>
              </select>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Monthly_Income</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter monthly_income"
                name="MonthlyIncome"
                value={formData.MonthlyIncome}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Department</Form.Label>
              {/* <Form.Control
                type="text"
                placeholder="enter department"
                name="Department"
                value={formData.Department}
                onChange={this.handleChange}
              /> */}
              <br></br>
              <select
                className="options"
                name="Department"
                //  value={formData.Department}
                onChange={this.handleOptions}
              >
                <option>Choose an option</option>
                <option>0 - Sales</option>
                <option>1 - Research & Development</option>
                <option>2 - Human Resources</option>
              </select>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>MonthlyRate</Form.Label>
              <Form.Control
                type="text"
                placeholder=" Enter monthly_rate(i.e CTC + perks)"
                name="MonthlyRate"
                value={formData.MonthlyRate}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>DailyRate</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter daily_income of Employee"
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
                placeholder="Enter hourly_income of Employee"
                name="HourlyRate"
                value={formData.HourlyRate}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>StandardHours</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter standard working hours"
                name="StandardHours"
                value={formData.StandardHours}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Distance_from_home</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Employee's distance_from_home"
                name="DistanceFromHome"
                value={formData.DistanceFromHome}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Education</Form.Label>
              {/* <Form.Control
                type="text"
                name="Education"
                placeholder="education"
                value={formData.Education}
                onChange={this.handleChange}
              /> */}
              <br></br>
              <select
                className="options"
                name="Education"
                onChange={this.handleOptions}
              >
                <option>Choose an option</option>
                <option>1 - Below College</option>
                <option>2 - College</option>
                <option>3 - Bachelor</option>
                <option>4 - Master</option>
                <option>5 - Doctor</option>
              </select>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Education_field</Form.Label>
              {/* <Form.Control
                type="text"
                name="EducationField"
                placeholder="education_field"
                value={formData.EducationField}
                onChange={this.handleChange}
              /> */}
              <br></br>
              <select
                className="options"
                name="EducationField"
                onChange={this.handleOptions}
              >
                <option>Choose an option</option>
                <option>0 - Life_Sciences </option>
                <option>1 - Medical</option>
                <option>2 - Marketing</option>
                <option>3 - Technical_Degree</option>
                <option>4 - Human Resources</option>
                <option>5 - Others</option>
              </select>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Environment_satisfaction</Form.Label>
              {/* <Form.Control
                type="text"
                placeholder="environment_satisfaction"
                name="EnvironmentSatisfaction"
                value={formData.EnvironmentSatisfaction}
                onChange={this.handleChange}
              /> */}
              <br></br>
              <select
                className="options"
                name="EnvironmentSatisfaction"
                onChange={this.handleOptions}
              >
                <option>Choose an option</option>
                <option>1 - Low</option>
                <option>2 - Medium</option>
                <option>3 - High</option>
                <option>4 - Very High</option>
              </select>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Gender</Form.Label>
              {/* <Form.Control
                type="text"
                placeholder="gender"
                name="Gender"
                value={formData.Gender}
                onChange={this.handleChange}
              /> */}
              <br></br>
              <select
                className="options"
                name="Gender"
                onChange={this.handleOptions}
              >
                <option>Choose an option</option>
                <option>0 - Male </option>
                <option>1 - Female</option>
              </select>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Job_involvement</Form.Label>
              {/* <Form.Control
                type="text"
                placeholder="job_involvement"
                name="JobInvolvement"
                value={formData.JobInvolvement}
                onChange={this.handleChange}
              /> */}
              <br></br>
              <select
                className="options"
                name="JobInvolvement"
                onChange={this.handleOptions}
              >
                <option>Choose an option</option>
                <option>1 - Low</option>
                <option>2 - Medium</option>
                <option>3 - High</option>
                <option>4 - Very High</option>
              </select>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Job_level</Form.Label>
              {/* <Form.Control
                type="text"
                placeholder="1 - 5"
                name="JobLevel"
                value={formData.JobLevel}
                onChange={this.handleChange}
              /> */}
              <br></br>
              <select
                className="options"
                name="JobLevel"
                onChange={this.handleOptions}
              >
                <option>Choose an option(Low to High JobLevel)</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Job_role</Form.Label>
              {/* <Form.Control
                type="text"
                placeholder="job_role"
                name="JobRole"
                value={formData.JobRole}
                onChange={this.handleChange}
              /> */}
              <br></br>
              <select
                className="options"
                name="JobRole"
                onChange={this.handleOptions}
              >
                <option>Choose an option</option>
                <option>0 - Sales Executive </option>
                <option>1 - Research Scientist</option>
                <option>2 - Laboratory Technician</option>
                <option>3 - Manufacturing Director</option>
                <option>4 - Healthcare Representative</option>
                <option>5 - Manager</option>
                <option>6 - Sales Representative</option>
                <option>7 - Research Director</option>
                <option>8 - Human Resources</option>
              </select>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Job_satisfaction</Form.Label>
              {/* <Form.Control
                type="text"
                placeholder="job_satisfaction"
                name="JobSatisfaction"
                value={formData.JobSatisfaction}
                onChange={this.handleChange}
              /> */}
              <br></br>
              <select
                className="options"
                name="JobSatisfaction"
                onChange={this.handleOptions}
              >
                <option>Choose an option</option>
                <option>1 - Low</option>
                <option>2 - Medium</option>
                <option>3 - High</option>
                <option>4 - Very High</option>
              </select>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Marital_status</Form.Label>
              {/* <Form.Control
                type="text"
                placeholder="Enter marital status"
                name="MaritalStatus"
                value={formData.MaritalStatus}
                onChange={this.handleChange}
              /> */}
              <br></br>
              <select
                className="options"
                name="MaritalStatus"
                onChange={this.handleOptions}
              >
                <option>Choose an option</option>
                <option>0 - Single</option>
                <option>1 - Married</option>
                <option>2 - Divorced</option>
              </select>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>No_of_companies_worked</Form.Label>
              <Form.Control
                type="text"
                placeholder="Total companies_worked"
                name="NumCompaniesWorked"
                value={formData.NumCompaniesWorked}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Overtime</Form.Label>
              {/* <Form.Control
                type="text"
                placeholder="overtime"
                name="OverTime"
                value={formData.OverTime}
                onChange={this.handleChange}
              /> */}
              <br></br>
              <select
                className="options"
                name="OverTime"
                onChange={this.handleOptions}
              >
                <option>Choose an option</option>
                <option>0 - No</option>
                <option>1 - Yes</option>
              </select>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Percent_salary_hike</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Emp salary_hike"
                name="PercentSalaryHike"
                value={formData.PercentSalaryHike}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Performance_rating</Form.Label>
              {/* <Form.Control
                type="text"
                placeholder="performance_rating"
                name="PerformanceRating"
                value={formData.PerformanceRating}
                onChange={this.handleChange}
              /> */}
              <br></br>
              <select
                className="options"
                name="PerformanceRating"
                onChange={this.handleOptions}
              >
                <option>Choose an option</option>
                <option>1 - Low</option>
                <option>2 - Good</option>
                <option>3 - Excellent</option>
                <option>4 - Outstanding</option>
              </select>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Relationship_satisfaction</Form.Label>
              {/* <Form.Control
                type="text"
                placeholder="relationship_satisfaction"
                name="RelationshipSatisfaction"
                value={formData.RelationshipSatisfaction}
                onChange={this.handleChange}
              /> */}
              <br></br>
              <select
                className="options"
                name="RelationshipSatisfaction"
                onChange={this.handleOptions}
              >
                <option>Choose an option</option>
                <option>1 - Low</option>
                <option>2 - Medium</option>
                <option>3 - High</option>
                <option>4 - Very High</option>
              </select>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Stock_option_level</Form.Label>
              {/* <Form.Control
                type="text"
                placeholder="stock_option_level"
                name="StockOptionLevel"
                value={formData.StockOptionLevel}
                onChange={this.handleChange}
              /> */}
              <br></br>
              <select
                className="options"
                name="StockOptionLevel"
                onChange={this.handleOptions}
              >
                <option>Choose an option(Low to High)</option>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Total_working_years</Form.Label>
              <Form.Control
                type="text"
                placeholder="Total_working_years"
                name="TotalWorkingYears"
                value={formData.TotalWorkingYears}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Training_times_last_year</Form.Label>
              <Form.Control
                type="text"
                placeholder="Total training_months_spent_last_year"
                name="TrainingTimesLastYear"
                value={formData.TrainingTimesLastYear}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Work_life_balance</Form.Label>
              {/* <Form.Control
                type="text"
                placeholder="work_life_balance"
                name="WorkLifeBalance"
                value={formData.WorkLifeBalance}
                onChange={this.handleChange}
              /> */}
              <br></br>
              <select
                className="options"
                name="WorkLifeBalance"
                onChange={this.handleOptions}
              >
                <option>Choose an option</option>
                <option>1 - Bad</option>
                <option>2 - Good</option>
                <option>3 - Better</option>
                <option>4 - Best</option>
              </select>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Years_at_company</Form.Label>
              <Form.Control
                type="text"
                placeholder="Years_at_company"
                name="YearsAtCompany"
                value={formData.YearsAtCompany}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Years_in_current_role</Form.Label>
              <Form.Control
                type="text"
                placeholder="Years_in_current_role"
                name="YearsInCurrentRole"
                value={formData.YearsInCurrentRole}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Years_since_last_promotion</Form.Label>
              <Form.Control
                type="text"
                placeholder="Years_since_last_promotion"
                name="YearsSinceLastPromotion"
                value={formData.YearsSinceLastPromotion}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Years_with_current_manager</Form.Label>
              <Form.Control
                type="text"
                placeholder="Years_with_current_manager"
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
