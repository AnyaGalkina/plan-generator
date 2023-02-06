import React from 'react';
import styles from './Main.module.css';
import {Settings} from './settings/Settings';
import {FinalText} from './finalText/FinalText';

type PropsType = {
    weekTrainingPlans: any;
    warmUpWithPolePlan?: any;
}

export const Main = ({weekTrainingPlans, warmUpWithPolePlan}: PropsType) => {

    return (
        <div className={styles.mainContainer}>
            <Settings weekTrainingPlans={weekTrainingPlans}/>
            <FinalText
                warmUpWithPolePlan={warmUpWithPolePlan}
                weekTrainingPlans={weekTrainingPlans}
            />
        </div>
    );
};
