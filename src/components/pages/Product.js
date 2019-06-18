import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Details from "../books/Details";

export default class Product extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	onDeleteClick = id => {
		try {
			this.props.bookStore.deleteBook(id);
		} catch (e) {
			//Only for deleting in DOM
		}
	};

	listBooks = this.props.bookStore._books.map(b => (
		<li key={b.id}>
			{b.title} <span> </span>
			<Link style={{ float: "middle", marginRight: "1rem" }} to={`/products/${b.id}`}>
				details <span> </span>
				<i
					className="fas fa-question"
					style={{
						cursor: "pointer",
						// float: "right",
						// color: "black",
						marginRight: "1rem"
					}}
				/>
			</Link>
			<i
				className="fas fa-times"
				style={{ cursor: "pointer", float: "right", color: "red" }}
				onClick={() => this.props.bookStore.deleteBook(b.id)}
		/>
			<Link to={`/edit/${b.id}`}>
				<i
					className="fas fa-pencil-alt"
					style={{
						cursor: "pointer",
						float: "right",
						color: "black",
						marginRight: "1rem"
					}}
				/>
			</Link>
		</li>
	));

	// rows = this.props.bookStore._books.map(b => (
	// 	<tr key={b.id}>
	// 		<td>{b.id}</td>
	// 		<td>{b.title}</td>
	// 		<td>{b.info}</td>
	// 	</tr>
	// ));

	count = this.props.bookStore._books.length;

	render() {
		const {bookStore} = this.props;
		return (
			<div>
				<h1>Hello from Product</h1>
				<p>There is {this.count} books avaible</p>
				<h1>Book list</h1>
				<ul>{this.listBooks}</ul>
				{/* <table className="table">
					<thead>
						<tr>
							<th>ID</th>
							<th>Title</th>
							<th>Info</th>
						</tr>
					</thead>
					<tbody>{this.rows}</tbody>
				</table> */}
				<Route
					path={`/products/:id`}
					render={props => {
						return <Details {...props} bookStore={bookStore} />;
					}}
				/>

				{/* <Details {...this.props} bookStore={this.props.bookStore} /> */}
			</div>
		);
	}
}
