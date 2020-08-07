import React, { Component } from "react";
import { Fade } from "react-reveal";
import Axios from "axios";
import Swal from "sweetalert2";
import womansittinglaptop from "../assets/womansittinglaptop.svg";

class AddArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coverimg: null,
      category: "Tamil",
      imgbase64: null,
      posttitle: null,
      body: null,
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
  changebottombarPos() {
    document.getElementById("bottombar").style.display = "none";
  }
  changebottombarTogglevisible() {
    if (document.documentElement.clientWidth <= 600) {
      document.getElementById("bottombar").style.display = "flex";
    }
  }
  componentDidMount() {
    this.changebottombarPos();
  }
  componentWillUnmount() {
    this.changebottombarTogglevisible();
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
                  <input
                    type="text"
                    name="posttitle"
                    id="posttitle"
                    placeholder="Title of Post"
                    onChange={this.handleInputChange}
                  />
                  <input
                    type="text"
                    name="desc"
                    id="desc"
                    placeholder="Short Description"
                    onChange={this.handleInputChange}
                  />
                  <div className="textarea">
                    <textarea
                      name="body"
                      id=""
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
                  <button onClick={this.uploadhandler}>Post Article</button>
                </div>
              </div>
              <div className="desk-view">
                <div className="left-aa">
                  <div className="left-aarea">
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
                      <input
                        type="text"
                        name="posttitle"
                        id="posttitle"
                        placeholder="Title of Post"
                        onChange={this.handleInputChange}
                      />
                      <input
                        type="text"
                        name="desc"
                        id="desc"
                        placeholder="Short Description"
                        onChange={this.handleInputChange}
                      />
                      <div className="togglewrapper">
                        <div className="toggle">
                          <input
                            type="checkbox"
                            id="mustread"
                            name="mustread"
                            defaultChecked={this.state.mustread}
                            onChange={this.handleCheckBox}
                            value="false"
                          />
                          <label>
                            Mark as Must Read ?{" "}
                            <span role="img" aria-label="emoji">
                              🙄
                            </span>{" "}
                          </label>
                        </div>
                      </div>
                      <input
                        type="file"
                        className="filepicker"
                        onChange={this.fileChangedHandler}
                      />
                      <button onClick={this.uploadhandler}>Post Article</button>
                    </div>
                  </div>
                </div>
                <div className="right-aa">
                  <div className="textarea">
                    <textarea
                      name="body"
                      id=""
                      onChange={this.handleInputChange}
                      cols="70"
                      rows="20"
                      placeholder="Type in the Article in MarkDown Format"
                    ></textarea>
                  </div>
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
