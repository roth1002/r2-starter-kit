import _ from "lodash";
import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";

import { fetchList } from "../actions/list";

export class List extends Component {
	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(fetchList());
	}
	render() {
		const { list } = this.props;
		return (
			<div>
				<h1>Post List</h1>
				<ul>
				{
					_.map(list, item => 
						<li key={item.id}><Link to={"/post/" + item.id}>{item.title}</Link></li>
					)
				}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		list: state.list
	};
}

export default connect(mapStateToProps)(List);