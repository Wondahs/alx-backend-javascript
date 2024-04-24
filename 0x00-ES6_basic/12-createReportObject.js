export default function createReportObject(employeesList) {
	const report = {
		allEmployees: employeesList,
		getNumberOfDepartments(employeesList) {
			return employeesList.length;
		}
	};
}