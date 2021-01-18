import React from 'react'

function Statistics({good,neutral,bad}) {
        
    function countTotalFeedback() {
        return good + bad + neutral;
    }
    
    function countPositiveFeedbackPercentage() {
        return Number.parseInt(good/(good+neutral+bad) * 100)
    }
    
    return (
        <div>
            <p>Statistics</p>
            <ul>
                <li>Good:{good}</li>
                <li>Neutral:{neutral}</li>
                <li>Bad:{bad}</li>
                <li>Total:{countTotalFeedback()}</li>
                <li>Positive feedback:{countPositiveFeedbackPercentage()}%</li>
            </ul>
        </div>
    )
}

export default Statistics;

