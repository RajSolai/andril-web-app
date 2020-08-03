import React, { Component } from "react";
import {Fade} from "react-reveal";
import Axios from "axios";


class AddArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coverimg: null,
      category: "Tamil",
      imgbase64: null,
      posttitle:null,
      body:null,
      desc:null,
      mustread:false
    };
    this.fileChangedHandler = this.fileChangedHandler.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.uploadhandler = this.uploadhandler.bind(this);
    this._testupload = this._testupload.bind(this);
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
  };
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }
  handleCheckBox(){
    this.setState({mustread: !this.state.mustread});
  }
  changebottombarPos(){
      document.getElementById("bottombar").style.display="none";
  }
  changebottombarTogglevisible(){
    if (document.documentElement.clientWidth <= 600) {
      document.getElementById("bottombar").style.display="flex";
    }
  }
  componentDidMount() {
    this.changebottombarPos();
  }
  componentWillUnmount() {
   this.changebottombarTogglevisible(); 
  }
  uploadhandler() {
    //! this._testupload();
    let data={
      poster:localStorage.getItem("uid"),
      mustread: this.state.mustread===true?"true":"false",
      posttitle: this.state.posttitle,
      postdesc: this.state.desc,
      imagebin: this.state.imgbase64,
    }
    Axios.post("https://blooming-shelf-29088.herokuapp.com/api/posts/"+this.state.category,data).then((res)=>{
      if (res.data.code==="PSTUPD") {
        alert("Post Uploaded");
      } else {
         console.log(res);
      }
    }).catch(err=>{
      console.log(err);
    })
  }
  //! Test function
  _testupload() {
    console.log("TITLE",this.state.posttitle);
    console.log("DESC",this.state.desc);
    console.log("BODY",this.state.body);
    console.log("IMAGE" + this.state.imgbase64);
    console.log("CATEGORY" + this.state.category);
    console.log("mustread?"+this.state.mustread);
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
                  <textarea name="body" id="" onChange={this.handleInputChange} cols="43" rows="30" placeholder="Type in the Article in MarkDown Format"></textarea>
                </div>
                <input type="file"className="filepicker" onChange={this.fileChangedHandler} />
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
                    <input type="checkbox" id="mustread" name="mustread" defaultChecked={this.state.mustread} onChange={this.handleCheckBox} value="false"/>
                    <label>Mark as Must Read ? <span role="img" aria-label="emoji">🙄</span> </label>
                  </div>
                </div>
                <input type="file"className="filepicker" onChange={this.fileChangedHandler} />
                <button onClick={this.uploadhandler}>Post Article</button>
              </div>
            </div>
          </div>
          <div className="right-aa">
            <div className="textarea">
              <textarea name="body" id="" onChange={this.handleInputChange} cols="70" rows="20" placeholder="Type in the Article in MarkDown Format"></textarea>
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
