import React, { Component } from "react";
import "./MU.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import { ExcelRenderer } from "react-excel-renderer";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

class MultipleFile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: "",
      cols: "",
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
      },
      res: "",
      excelData: [],
      theInputKey: "",
      load: false,
    };
  }
  load = () => {
    if (this.state.res.length === this.state.rows.length - 1) {
      this.setState({ load: true });
    }
  };
  handleExcel = (event) => {
    event.preventDefault();
    const data = this.state.rows;
    // console.log(data);
    this.setState({ res: "" });
    const formData = this.state.formData;
    
    if(data === "") return alert("Please Upload File")
    
    // for (let i = 1; i < data.length; i++) {
    //   // var j = 1;
    //   for (let j=1;j<data[i].length;j++) {
    //     // console.log(key, formData[key]);
    //     const k = data[0][j]
    //     if(k !== 'EmployeeNumber'){
    //       formData[k] = data[i][data[0].indexOf(k)];
    //     }
    //   }

    for(let i=1;i<data.length;i++){
      
      for(let j=0;j<data[i].length;j++){
        const k = data[0][j]
          if(k !== 'EmployeeNumber'){
            formData[k] = data[i][data[0].indexOf(k)];
          }
      }
      console.log(formData)
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
            console.log(response.result);
            this.setState((previousState) => ({
              res: [...previousState.res, response.result],
            }));
          }).catch(err => console.log(err));
    }
    
    this.setState({load:true})
    // this.load();
  };

  fileHandler = (event) => {
    let fileObj = event.target.files[0];
    // console.log(event.target.files);

    if (fileObj) {
      ExcelRenderer(fileObj, (err, resp) => {
        if (err) {
          console.log(err);
        } else {
          this.setState({
            cols: resp.cols,
            rows: resp.rows,
          });
          console.log(this.state.rows[0]);
        }
      });
    } else {
      this.setState({ rows: "", cols: "" });
    }
  };

  toExcel = () => {
    this.setState({ excelData: [] });
    const res = this.state.res;

    if(res === "") return alert('Please predict attrtition first')
    
    const index = this.state.rows[0].indexOf('EmployeeNumber')
    for (let i = 0; i < res.length; i++) {
      this.state.excelData.push({ id: this.state.rows[i+1][index], ans: res[i] });
      
    }
    if (this.state.excelData.length !== 0) {
      console.log(
        typeof this.state.excelData[0].ans,
        this.state.excelData[0].ans
      );
      

      // Export to Excel
      const fileType =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
      const fileExtension = ".xlsx";

      const ws = XLSX.utils.json_to_sheet(this.state.excelData);
      const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
      const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
      const data = new Blob([excelBuffer], { type: fileType });
      FileSaver.saveAs(data, "Employees" + fileExtension);
    }
  };

  functionThatResetsTheFileInput() {
    let randomString = Math.random().toString(36);

    this.setState({
      theInputKey: randomString,
      res: "",
      rows: "",
    });
    // console.log(this.state.theInputKey);
  }

  render() {
    // const res = [...this.state.res];

    return (
      <Container>
        {/* <Form> */}
        <div className="content">
          <div className="a">
            <header className="a-b">
              {this.state.rows !== "" ? (
                <h4>File uploaded</h4>
              ) : (
                <h4>Please upload excel file</h4>
              )}

              <div>
                <input
                  type="file"
                  onChange={this.fileHandler.bind(this)}
                  style={{ padding: "10px" }}
                  accept=".xlsx, .xls, .csv"
                  key={this.state.theInputKey || ""}
                />

              </div>
            </header>
          </div>


          <div>

            {(this.state.load && (this.state.rows.length-1)===this.state.res.length) === true ? (
              <h4>Prediction Complete</h4>
            ) : (
              <h4>Press Predict Button</h4>
            )}
            <Button block variant="success" onClick={this.handleExcel}>
              Predict
            </Button>
              
            <button
              className="mul"
              // variant="success"
              onClick={this.functionThatResetsTheFileInput}
            >
              <b>Reset</b>
            </button>

          </div>
          <div>
            <Button onClick={this.toExcel}>Download Excel</Button>
          </div>
        </div>
        {/* </Form> */}
      </Container>
    );
  }
}

export default MultipleFile;
