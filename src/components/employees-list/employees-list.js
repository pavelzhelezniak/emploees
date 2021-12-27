import EmployeesListItem from "../employees-list-item/employees-list-item"

import './employees-list.css'

const EmployeesList = () => {
	return (
		<ul className="app-list list-group">
			<EmployeesListItem employeesName={'Alex Spiridovich'} wage={"700$"} />
			<EmployeesListItem />
			<EmployeesListItem />
		</ul>
	)
}

export default EmployeesList;