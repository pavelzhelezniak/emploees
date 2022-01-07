import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			employeesName: '',
			wage: ''
		}
	}

	onValueChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	onSubmit = (e) => {
		e.preventDefault();
		this.props.onAdd(this.state.employeesName, this.state.wage);
		this.setState({
			employeesName: '',
			wage: ''
		})
	}

	render() {
		const { employeesName, wage } = this.state;

		return (
			<div className="app-add-form">
				<h3>Добавьте нового сотрудника</h3>
				<form
					className="add-form d-flex"
					onSubmit={this.onSubmit}>
					<input type="text"
						className="form-control new-post-label"
						placeholder="Как его зовут?"
						name="employeesName"
						value={employeesName}
						onChange={this.onValueChange} />
					<input type="number"
						className="form-control new-post-label"
						placeholder="З/П в $?"
						name="wage"
						value={wage}
						onChange={this.onValueChange} />

					<button type="submit"
						className="btn btn-outline-light">Добавить</button>
				</form>
			</div>
		)
	}
}

export default EmployeesAddForm;