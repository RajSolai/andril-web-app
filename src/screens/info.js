//info.js
import React, { Component } from "react";
import andrillogoop from "../assets/andrillogoop.svg";
import "../theme/App.scss";
import { FaWhatsapp, FaTelegram } from "react-icons/fa";
import BottomBar from "../components/bottombar";
import NavBar from "../components/navbar";


const waText =
	"Hey+Join+Me+on+Andril360+%2C+Gain+Knowledge+for+free%0D%0A%0D%0Ahttp%3A%2F%2Fandril.netlify.app";
const tlText = "Hey Join Me on Andril360 Gain Knowledge for free";
const tlLink = "%0D%0A%0D%0Ahttp%3A%2F%2Fandril.netlify.app";

export default class Info extends Component {
	async share(url) {
		window.open(url, "_self");
	}
	render() {
		return (
			<>
			<NavBar></NavBar>
			<div className="app">
				<div className="safe-area">
					<section className="banner-holder">
						<div className="banner">
							<p>Andril 360</p>
							<img src={andrillogoop} alt="" />
						</div>
					</section>
					<section className="infotxt">
						Andril 360 is here to furnish enlightening and engaging
						content for you to read and enjoy! Discover articles on
						mysteries, technology, politics, archaeology and other 7
						diverse articles on our platform.
					</section>
					<section className="sharebtns">
						<button
							className="wa"
							onClick={() =>
								this.share("whatsapp://send?text=" + waText)
							}
						>
							<FaWhatsapp /> Invite Friends via Whatsapp
						</button>
						<button
							className="tl"
							onClick={() =>
								this.share(
									"https://telegram.me/share/url?text=" +
										tlText +
										"&url=" +
										tlLink
								)
							}
						>
							<FaTelegram /> Invite Friends via Telegram
						</button>
					</section>
					<section className="ccholder">
						<div className="copyright">
							<a
								rel="license"
								href="http://creativecommons.org/licenses/by-nc-nd/3.0/"
							>
								<img
									alt="Creative Commons License"
									style={{ borderWidth: 0 }}
									src="https://i.creativecommons.org/l/by-nc-nd/3.0/88x31.png"
								/>
							</a>
							<br />
							This work is licensed under a{" "}
							<a
								rel="license"
								href="http://creativecommons.org/licenses/by-nc-nd/3.0/"
							>
								Creative Commons
								Attribution-NonCommercial-NoDerivs 3.0 Unported
								License
							</a>
						</div>
					</section>
				</div>
			</div>
			<BottomBar></BottomBar>
			</>
		);
	}
}
