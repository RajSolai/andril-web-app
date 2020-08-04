//nodata.js
import React, { Component } from "react";
import {Fade} from "react-reveal";
import "../theme/App.scss";
import Nodata from "../assets/Nodata.svg"

export default class NoData extends Component{
	render(){
		return(
			<>
				<Fade>
					<div className="center-layout">
						<img src={Nodata} alt="loading"/>
					</div>
				</Fade>
			</>
		)
	};
}