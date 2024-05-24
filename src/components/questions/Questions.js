import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions } from "../../redux/actions/questionSlice";

const Questions = () => {
    const dispatch = useDispatch();
    const { questions, loading, error } = useSelector((state) => state.question);

    useEffect(() => {
        dispatch(fetchQuestions());
    }, []);

    return (
        <div className="questions">
            <h2>List of questions</h2>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <ul>
                {questions.length > 0 ? (
                    questions.map((question) => (
                        <li key={question.id}>{question.question}</li>
                    ))
                ) : (
                    <h3>No question found</h3>
                )}
            </ul>
        </div>
    );
}

export default Questions;