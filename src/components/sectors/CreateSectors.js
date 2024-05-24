import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSector } from "../../redux/actions/sectorSlice";
import { setFlashMessage } from "../../redux/actions/flashMessageSlice";
import { useNavigate } from "react-router-dom";

const CreateSector = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const { loading, error, successMessage } = useSelector((state) => state.sector);
    const navigate = useNavigate();

    useEffect(() => {
        if (successMessage) {
            dispatch(setFlashMessage({ message: successMessage, type: 'success' }));
            navigate("/sectors");
        }
        if (error) {
            dispatch(setFlashMessage({ message: error, type: 'error' }));
        }
    }, [successMessage, error, dispatch, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addSector({ name }));
        setName("");
    };

    return (
        <div className="create-sector">
            <h2>Add new sector</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Sector name:</label>
                <input 
                    type="text" 
                    required 
                    id="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
                <button type="submit">Save sector</button>
            </form>
            {loading && <p>Loading...</p>}
        </div>
    );
}

export default CreateSector;
