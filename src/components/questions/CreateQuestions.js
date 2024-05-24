import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQuestion } from "../../redux/actions/questionSlice";
import { setFlashMessage } from "../../redux/actions/flashMessageSlice";
import { useNavigate } from "react-router-dom";

const CreateQuestion = () => {
    const dispatch = useDispatch();
    const [question, setQuestion] = useState("");
    const { loading, error, successMessage } = useSelector((state) => state.question);
    const navigate = useNavigate();

    useEffect(() => {
        if (successMessage) {
            dispatch(setFlashMessage({ message: successMessage, type: 'success' }));
            navigate("/questions");
        }
        if (error) {
            dispatch(setFlashMessage({ message: error, type: 'error' }));
        }
    }, [successMessage, error, dispatch, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addQuestion({ question }));
        setQuestion("");
    };

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
        </div>
    );
}

export default CreateQuestion;
