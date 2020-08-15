import React, { Component } from "react";
import { Fade } from "react-reveal";
import Axios from "axios";
import Swal from "sweetalert2";
import womansittinglaptop from "../assets/womansittinglaptop.svg";
import NavBar from "../components/navbar";

class AddArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coverimg: null,
      category: "Tamil",
      imgbase64: null,
      posttitle: null,
      body: null,
      bodytamil: null,
      desc: null,
      mustread: false,
      alert: false,
    };
    this.fileChangedHandler = this.fileChangedHandler.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.uploadhandler = this.uploadhandler.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
  }
  fileChangedHandler(event) {
    const imgs = event.target.files[0];
    this.setState({ coverimg: imgs });
    const _reader = new FileReader();
    _reader.readAsDataURL(imgs);
    _reader.onloadend = () => {
      this.setState({ imgbase64: _reader.result });
    };
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }
  handleCheckBox() {
    this.setState({ mustread: !this.state.mustread });
  }
  checkUpload() {
    if (localStorage.getItem("uid") === "sampleuidw83q498") {
      Swal.fire({
        confirmButtonColor: "#ff847c",
        title: "Can't Upload",
        text: "Please Login with email for Uploading",
        icon: "Error",
        confirmButtonText: "Okay",
      });
    } else if (
      this.state.imgbase64 != null &&
      this.state.posttitle != null &&
      this.state.desc != null &&
      this.state.body != null &&
      this.state.bodytamil != null
    ) {
      this.uploadhandler();
    } else {
      Swal.fire({
        title: "Can't Upload",
        text: "Please Fillout all the fields before uploading",
        icon: "Error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#ff847c",
      });
    }
  }
  uploadhandler() {
    Swal.fire({
      html:
        '<img src="' +
        womansittinglaptop +
        '" alt="uploading" height="100px" width="100px" /> <br/> Post is Uploading Please Wait',
      showConfirmButton: false,
    });
    //! this._testupload();
    let data = {
      poster: localStorage.getItem("uid"),
      mustread: this.state.mustread === true ? "true" : "false",
      posttitle: this.state.posttitle,
      postdesc: this.state.desc,
      body: this.state.body,
      bodytamil: this.state.bodytamil,
      imagebin: this.state.imgbase64,
    };
    Axios.post(
      "https://blooming-shelf-29088.herokuapp.com/api/posts/" +
        this.state.category,
      data
    )
      .then((res) => {
        if (res.data.code === "PSTUPD") {
          Swal.close();
          Swal.fire({
            title: "Post Uploaded!",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Okay",
            confirmButtonColor: "#ff847c",
          });
        } else {
          console.log(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <>
        <NavBar></NavBar>
        <Fade>
          <div className="app">
            <div className="safearea articleform">
              <div className="mobile-view">
                <div className="form">
                  <h3>Add Article</h3>
                  <select
                    name="category"
                    id="category"
                    onChange={this.handleInputChange}
                    placeholder="Select The Category"
                  >
                    <option value="tamil">Tamil</option>
                    <option value="medicine">Medicine</option>
                    <option value="mystery">Mystery</option>
                    <option value="business">Business</option>
                    <option value="archaeology">Archaeology</option>
                    <option value="environment">Environment</option>
                    <option value="art">Art</option>
                    <option value="imagination">Imagination</option>
                    <option value="politics">Politics</option>
                    <option value="tech">Technology</option>
                    <option value="crime_stories">Crime Stories</option>
                  </select>
                  <label htmlFor="posttitle">Title :</label>
                  <input
                    type="text"
                    name="posttitle"
                    id="posttitle"
                    placeholder="Title of Post"
                    onChange={this.handleInputChange}
                  />
                  <label htmlFor="desc">Description :</label>
                  <input
                    type="text"
                    name="desc"
                    id="desc"
                    placeholder="Short Description"
                    onChange={this.handleInputChange}
                  />
                  <label htmlFor="body">Body of Post English :</label>
                  <div className="textarea">
                    <textarea
                      name="body"
                      id="body"
                      onChange={this.handleInputChange}
                      cols="43"
                      rows="30"
                      placeholder="Type in the Article in MarkDown Format"
                    ></textarea>
                  </div>
                  <label htmlFor="body">Body of Post Tamil :</label>
                  <div className="textarea">
                    <textarea
                      name="bodytamil"
                      id="bodytamil"
                      onChange={this.handleInputChange}
                      cols="43"
                      rows="30"
                      placeholder="Type in the Article in MarkDown Format"
                    ></textarea>
                  </div>
                  <input
                    type="file"
                    className="filepicker"
                    onChange={this.fileChangedHandler}
                  />
                  <span style={{ textAlign: "center" }}>
                    (Maximum Image Size is 5MB)
                  </span>
                  <p></p>
                  <button onClick={this.checkUpload}>Post Article</button>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </>
    );
  }
}

export default AddArticle;
