import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee } from "../../redux/actions/employeeSlice";
import { fetchSectors } from "../../redux/actions/sectorSlice";
import { setFlashMessage } from "../../redux/actions/flashMessageSlice"; // Import the action
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const CreateEmployee = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [designation, setDesignation] = useState("");
    const [sectorId, setSectorId] = useState("");

    const { loading, error, sectors } = useSelector((state) => state.sector);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchSectors());
    }, [dispatch]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await dispatch(addEmployee({ name, designation, sectorId }));
            dispatch(setFlashMessage({ message: 'Employee added successfully!', type: 'success' }));
            setName("");
            setDesignation("");
            setSectorId("");
            navigate("/employees");
        } catch (error) {
            dispatch(setFlashMessage({ message: 'Failed to add employee.', type: 'error' }));
        }
    };

    return (
        <div className="create-employee">
            <h2>Add new employee</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Employee name:</label>
                <input type="text" required id="name" value={name} onChange={(e) => setName(e.target.value)} /><br/><br/>

                <label htmlFor="designation">Employee designation:</label>
                <select name="designation" id="designation" value={designation} onChange={(e) => setDesignation(e.target.value)}>
                    <option value="">Select designation</option>
                    <option value="officer">Officer</option>
                    <option value="worker">Worker</option>
                </select><br/><br/>

                <label htmlFor="sectorId">Sector:</label>
                <select id="sectorId" value={sectorId} onChange={(e) => setSectorId(e.target.value)}>
                    <option value="">Select Sector</option>
                    {loading ? (
                        <option value="" disabled>Loading...</option>
                    ) : error ? (
                        <option value="" disabled>Error: {error}</option>
                    ) : (
                        sectors.map((sector) => (
                            <option key={sector.id} value={sector.id}>{sector.name}</option>
                        ))
                    )}
                </select><br/><br/>

                <button type="submit">Save employee</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>Error: {error} </p>}
        </div>
    );
}

export default CreateEmployee;
