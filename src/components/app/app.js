import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ employeesName: "Alex Spiridovich", wage: 700, increase: false, id: 1 },
				{ employeesName: "Pavel Zhaliazniak", wage: 1100, increase: true, id: 2 },
				{ employeesName: "Dmitry Pudau", wage: 900, increase: false, id: 3 }
			]
		}
	}

	render() {
		return (
			<div className="app" >
				<AppInfo />

				<div className="search-panel">
					<SearchPanel />
					<AppFilter />
				</div>
				<EmployeesList
					data={this.state.data}
					onDelete={id => console.log(id)} />
				<EmployeesAddForm />
			</div >
		);
	}
}

export default App;
