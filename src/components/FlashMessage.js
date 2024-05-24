import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearFlashMessage } from '../redux/actions/flashMessageSlice';

const FlashMessage = () => {
    const dispatch = useDispatch();
    const { message, type } = useSelector((state) => state.flashMessage);

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                dispatch(clearFlashMessage());
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [message, dispatch]);

    if (!message) return null;

    return (
        <div className={`flash-message flash-message-${type}`}>
            {message}
        </div>
    );
};

export default FlashMessage;
