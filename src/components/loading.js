//loading.js
//nodata.js
import React, { Component } from "react";
import {Fade} from "react-reveal";
import "../theme/App.scss";
import loadingandril from "../assets/loadingandril.svg"

export default class Loading extends Component{
	render(){
		return(
			<>
				<Fade>
					<div className="center-layout">
						<img src={loadingandril} alt="loading"/>
					</div>
				</Fade>
			</>
		)
	};
}