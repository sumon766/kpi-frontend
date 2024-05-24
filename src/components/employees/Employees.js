import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "../../redux/actions/employeeSlice";

const Employees = () => {
    const dispatch = useDispatch();
    const { employees, loading, error } = useSelector((state) => state.employee);

    useEffect(() => {
        dispatch(fetchEmployees());
    }, []);

    return (
        <div className="employees">
            <h2>List of employees</h2>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <ul>
                {employees.length > 0 ? (
                    employees.map((employee) => (
                        <li key={employee.id}>{employee.name}</li>
                    ))
                ) : (
                    <h3>No employee found</h3>
                )}
            </ul>
        </div>
    );
}

export default Employees;