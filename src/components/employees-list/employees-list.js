import EmployeesListItem from "../employees-list-item/employees-list-item"

import './employees-list.css'

const EmployeesList = () => {
	return (
		<ul className="app-list list-group">
			<EmployeesListItem employeesName={'Alex Spiridovich'} wage={"700$"} />
			<EmployeesListItem employeesName={'Pavel Zhaliazniak'} wage={"1100$"} />
			<EmployeesListItem employeesName={'Dmitry Pudau'} wage={"900$"} />
		</ul>
	)
}

export default EmployeesList;