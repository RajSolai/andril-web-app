//newbox.js
import React from "react";

export const ColorBox = (props) => {
	return (
		<div
			style={{
				display: "inline-flex",
				justifyContent: "center",
				background: props.color,
				padding: "1em",
				textAlign: "center",
				height: "200px",
				width: "250px",
				margin: ".5em",
				borderRadius: "8px",
				boxShadow: "2px 2px 8px rgba(0,0,0,.1)"
			}}
		>
			<img src={props.image} alt=""/>
		</div>
	);
};
