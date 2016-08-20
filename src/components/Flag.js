"use strict";

const React = require('react');

const data = {
	"CUB": {
		"name": "Cuba",
		"emoji": "🇨🇺"
	},
	"FRA": {
		"name": "France",
		"emoji": "🇫🇷"
	},
	"JAP": {
		"name": "Japan",
		"emoji": "🇯🇵"
	},
	"NED": {
		"name": "Netherlands",
		"emoji": "🇳🇱"
	},
	"UZB": {
		"name": "Uzbekistan",
		"emoji": "🇺🇿"
	}
};

class Flag extends React.Component {
	render() {
		return (
			<span className="flag">
				<span className="emoji">{data[this.props.code].emoji}</span>
				{this.props.showName && <span className="name">{data[this.props.code].name}</span>}
			</span>
		);
	}
}

module.exports = Flag;
