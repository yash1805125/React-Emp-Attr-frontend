import React, { Component } from "react";
import "./MU.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import { OutTable, ExcelRenderer } from "react-excel-renderer";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

class MultipleFile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: "",
      cols: "",
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
    const data = this.state.rows;
    console.log(data);
    this.setState({ res: "" });

    const formData = this.state.formData;

    for (let i = 1; i < data.length; i++) {
      var j = 1;
      for (var key in formData) {
        // console.log(key, formData[key]);
        formData[key] = data[i][j];
        j++;
      }
      // console.log(formData);

      fetch("http://127.0.0.1:5000/excelpred", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((response) => {
          // console.log(typeof response.result);
          this.setState((previousState) => ({
            res: [...previousState.res, response.result],
          }));
        });
    }
    this.load();
  };

  fileHandler = (event) => {
    let fileObj = event.target.files[0];
    console.log(event.target.files);
    console.log(fileObj);
    if (fileObj) {
      ExcelRenderer(fileObj, (err, resp) => {
        if (err) {
          console.log(err);
        } else {
          this.setState({
            cols: resp.cols,
            rows: resp.rows,
          });
          // console.log(typeof this.state.rows, this.state.rows);
        }
      });
    } else {
      this.setState({ rows: "", cols: "" });
    }
  };

  toExcel = () => {
    this.setState({ excelData: [] });
    const res = this.state.res;
    for (let i = 0; i < res.length; i++) {
      this.state.excelData.push({ id: this.state.rows[i + 1][0], ans: res[i] });
      // this.setState((prevState) => ({
      //   excelData: [...prevState.excelData, { id: i + 1, ans: res[i] }],
      // }));
      // this.state.excelData.push(ob);
      // // this.setState({
      // //   excelData: [...this.state.excelData, ob],
      // // });
      // console.log(typeof this.state.excelData, this.state.excelData);

      // this.setState({ excelData: this.state.excelData.concat(ob) });
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

                {/* <Button onClick={this.functionThatResetsTheFileInput}>
                  RESET
                </Button> */}
              </div>

              <div>
                {/* {this.state.rows && (
                    <OutTable
                      data={this.state.rows}
                      columns={this.state.cols}
                      tableClassName="ExcelTable2007"
                      tableHeaderRowlass="heading"
                    />
                  )} */}
              </div>
            </header>
          </div>

          <div>
            {/* {this.state.res !== "" ? (
              this.state.excelData.length === this.state.rows.length ? (
                <h4>Prediction Complete</h4>
              ) : (
                <h4>Predicting...</h4>
              )
            ) : (
              <h4>Press Predict Button</h4>
            )} */}
            {this.state.load === true ? (
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

            {/* <h4>
              <ol>
                {res.map((value) => (
                  <li>{value}</li>
                ))}
              </ol>
            </h4> */}
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
