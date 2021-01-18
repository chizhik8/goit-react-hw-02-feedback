import React from 'react'
import styles from './Statistics.module.css';


function Statistics({good,neutral,bad}) {
        
    function countTotalFeedback() {
        return good + bad + neutral;
    }
    
    function countPositiveFeedbackPercentage() {
        return Number.parseInt(good/(good+neutral+bad) * 100)
    }
    
    return (
        <div>
            <p className={styles.title} >Statistics</p>
            <ul>
                <li className={styles.item}>Good: {good}</li>
                <li className={styles.item}>Neutral: {neutral}</li>
                <li className={styles.item}>Bad: {bad}</li>
                <li className={styles.item}>Total: {countTotalFeedback()}</li>
                <li className={styles.item}>Positive feedback: {countPositiveFeedbackPercentage()}%</li>
            </ul>
        </div>
    )
}

export default Statistics;

