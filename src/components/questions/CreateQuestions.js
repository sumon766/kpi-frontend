import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQuestion } from "../../redux/actions/questionSlice";
import { useNavigate } from "react-router-dom";

const CreateSector = () => {
    const dispatch = useDispatch();
    const [question, setQuestion] = useState("");
    const { loading, error } = useSelector((state) => state.question);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addQuestion({ question }));
        setQuestion("");
        navigate("/questions");
    }

    return (
        <div className="create-question">
            <h2>Add new question</h2>

            <form onSubmit={handleSubmit}>
                <label htmlFor="question">Question:</label>
                <textarea 
                name="question" 
                rows={7} 
                cols={35} 
                required 
                value={question} 
                onChange={(e) => setQuestion(e.target.value)}>
                </textarea>
                <br /><br />
                <button type="submit">Save question</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>Error: {error} </p>}
        </div>
    );
}

export default CreateSector;