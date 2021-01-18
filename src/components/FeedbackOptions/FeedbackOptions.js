import React from 'react'
import styles from './FeedbackOptions.module.css'


const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
            <div>
            <p className={styles.title}>Please leave feedback</p>
                <button className={styles.btn} type='button' name='good' onClick={onLeaveFeedback}>Good</button>
                <button className={styles.btn} type='button' name='neutral' onClick={onLeaveFeedback}>Neutral</button>
                <button className={styles.btn} type='button' name='bad' onClick={onLeaveFeedback}>Bad</button>                
            </div>
    );
}

export default FeedbackOptions;