import { Component } from 'react';

import './employees-list-item.css';

class EmployeesListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			increase: false
		}
	}

	onIncrese = () => {
		this.setState(({ increase }) => ({
			increase: !increase
		}))
	}

	render() {
		const { employeesName, wage } = this.props;
		const { increase } = this.state;

		let classNames = "list-group-item d-flex justify-content-between";
		if (increase) {
			classNames += " increase";
		}

		return (
			<li className={classNames}>
				<span className="list-group-item-label">{employeesName}</span>
				<input type="text" className="list-group-item-input" defaultValue={wage + '$'} />
				<div className='d-flex justify-content-center align-items-center'>
					<button type="button"
						className="btn-cookie btn-sm "
						onClick={this.onIncrese}>
						<i className="fas fa-cookie"></i>
					</button>

					<button type="button"
						className="btn-trash btn-sm ">
						<i className="fas fa-trash"></i>
					</button>
					<i className="fas fa-star"></i>
				</div>
			</li>
		)
	}
}

export default EmployeesListItem;