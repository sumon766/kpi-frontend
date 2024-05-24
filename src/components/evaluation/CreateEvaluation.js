import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "../../redux/actions/employeeSlice";
import { fetchQuestions } from "../../redux/actions/questionSlice";
import { setFlashMessage } from "../../redux/actions/flashMessageSlice";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const CreateEvaluation = () => {
    const dispatch = useDispatch();
    const { employees } = useSelector((state) => state.employee);
    const { questions } = useSelector((state) => state.question);
    const [evaluationData, setEvaluationData] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchEmployees());
        dispatch(fetchQuestions());
    }, [dispatch]);

    const handleChange = (e, employeeId, questionId) => {
        const { value } = e.target;
        setEvaluationData(prevData => ({
            ...prevData,
            [`${employeeId}_${questionId}`]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            for (const key in evaluationData) {
                const [employeeId, questionId] = key.split('_');
                const mark = evaluationData[key];
                await axios.post('http://127.0.0.1:8000/api/evaluations', {
                    employee_id: employeeId,
                    question_id: questionId,
                    mark
                });
            }
            dispatch(setFlashMessage({ message: 'Evaluations submitted successfully!', type: 'success' }));
            navigate("/");
        } catch (error) {
            dispatch(setFlashMessage({ message: 'Failed to submit evaluations.', type: 'error' }));
        }
    };

    return (
        <div>
            <h2>Evaluate Employees</h2>
            
            <form onSubmit={handleSubmit}>
                <table>
                    <thead>
                        <tr>
                            <th>Employee</th>
                            {questions.map(question => (
                                <th key={question.id}>{question.question}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(employee => (
                            <tr key={employee.id}>
                                <td>{employee.name}</td>
                                {questions.map(question => (
                                    <td key={question.id}>
                                        <input
                                            type="number"
                                            value={evaluationData[`${employee.id}_${question.id}`] || ''}
                                            onChange={(e) => handleChange(e, employee.id, question.id)}
                                            min="0"
                                            max="100"
                                            placeholder={`Q${question.id}`}
                                            required
                                        />
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button type="submit">Submit Evaluations</button>
            </form>
        </div>
    );
};

export default CreateEvaluation;
