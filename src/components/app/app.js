import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

	const data = [
		{ employeesName: "Alex Spiridovich", wage: 700 },
		{ employeesName: "Pavel Zhaliazniak", wage: 1100 },
		{ employeesName: "Dmitry Pudau", wage: 900 }
	]

	return (
		<div className="app">
			<AppInfo />

			<div className="search-panel">
				<SearchPanel />
				<AppFilter />
			</div>
			<EmployeesList data={data} />
			<EmployeesAddForm />
		</div >
	);
}

export default App;
