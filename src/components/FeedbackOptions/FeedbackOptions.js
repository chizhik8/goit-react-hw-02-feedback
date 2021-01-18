import React from 'react'


const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
            <div>
                <p>Please leave feedback</p>
                <button type='button' name='good' onClick={onLeaveFeedback}>Good</button>
                <button type='button' name='neutral' onClick={onLeaveFeedback}>Neutral</button>
                <button type='button' name='bad' onClick={onLeaveFeedback}>Bad</button>                
            </div>
    );
}

export default FeedbackOptions;