import React from 'react'

function Statistics({good,neutral,bad,total,positivePercentage}) {
    
//     const countTotalFeedback () => (
//         return total.good + total.bad + total.neutral;
//   );
    
//   countPositiveFeedbackPercentage()
    
    // console.log(total.good);
    // console.log(positivePercentage);
    
    return (
        <div>
            <p>Statistics</p>
            <ul>
                <li>Good:{good}</li>
                <li>Neutral:{neutral}</li>
                <li>Bad:{bad}</li>
                <li>Total:{good+neutral+bad}</li>
                <li>Positive feedback:{Number.parseInt(good/(good+neutral+bad) * 100)}%</li>
            </ul>
        </div>
    )
}

export default Statistics;

