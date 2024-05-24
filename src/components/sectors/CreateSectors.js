import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSector } from "../../redux/actions/sectorSlice";
import { useNavigate } from "react-router-dom";

const CreateSector = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const { loading, error } = useSelector((state) => state.sector);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addSector({ name }));
        setName("");
        navigate("/sectors");
    }

    return (
        <div className="create-sector">
            <h2>Add new sector</h2>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Sector name:</label>
                <input type="text" 
                required id="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} />
                <button type="submit">Save sector</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>Error: {error} </p>}
        </div>
    );
}

export default CreateSector;