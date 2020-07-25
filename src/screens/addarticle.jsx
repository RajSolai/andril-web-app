import React, { Component } from "react";

class AddArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coverimg: null,
      category: "Tamil",
      imgbase64: null,
    };
    this.fileChangedHandler = this.fileChangedHandler.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.uploadhandler = this.uploadhandler.bind(this);
    this._testupload = this._testupload.bind(this);
  }
  fileChangedHandler = (event) => {
    const imgs = event.target.files[0];
    this.setState({ coverimg: imgs });
  };
  getbase64(file) {
    const _reader = new FileReader();
    _reader.readAsDataURL(file);
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
  uploadhandler() {
    this._testupload();
  }
  //! Test function
  _testupload() {
    console.log("TOTAL IMAGES" + this.state.coverimg);
    console.log("CATEGORY" + this.state.category);
  }
  render() {
    return (
      <div className="app">
        <div className="safearea articleform">
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
                />
                <input type="file"className="filepicker" onChange={this.fileChangedHandler} />
                <button onClick={this.uploadhandler}>Post Article</button>
              </div>
            </div>
          </div>
          <div className="right-aa">
            <div className="textarea">
              <textarea name="" id="" cols="100" rows="30"></textarea>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddArticle;
