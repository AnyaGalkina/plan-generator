import React, {useState} from 'react';
import {FinalText} from './finalText/FinalText';
import styles from './Main.module.css';
import {Settings} from './settings/Settings';


const warmUpWithPolePlan = {
    'январь-февраль': {
        task1: '111',
        task2: '222',
        task3: '333',
    }
};
const weekTrainingPlans = {
    '06.02-12.02': {
        task1: 'otmaska',
        task2: '2',
        task3: '3',
    },
    '13.02-19.02': {
        task1: '11',
        task2: '22',
        task3: '33',
    },
}


export const Main = () => {

    const [level, setLevel] = useState('');
    const [week, setWeek] = useState('');
    const [warmUpPlan, setWarmUpPlan] = useState('');
    const [warmUpWithPoleMonths, setWarmUpWithPoleMonths] = useState('');

    const [task1Description, setTask1Description] = useState('');
    const [task2Description, setTask2Description] = useState('');
    const [task3Description, setTask3Description] = useState('');

    const handleLevelChange = (value: string) => {
        setLevel(value)
    };
    const handleWeekChange = (value: string) => {
        setWeek(value)
    };
    const handleWarmUpPlan = (value: string) => {
        setWarmUpPlan(value)
    };
    const handleWarmUpWithPole = (value: string) => {
        setWarmUpWithPoleMonths(value)
    };

    const handleTask1DescriptionChange = (text: string) => {
        setTask1Description(text);
    };
    const handleTask2DescriptionChange = (text: string) => {
        setTask2Description(text);
    };
    const handleTask3DescriptionChange = (text: string) => {
        setTask3Description(text);
    };

    return (
        <div className={styles.mainContainer}>
            <Settings
                level={level}
                week={week}
                warmUpPlan={warmUpPlan}
                handleLevelChange={handleLevelChange}
                handleWarmUpWithPole={handleWarmUpWithPole}
                handleWarmUpPlan={handleWarmUpPlan}
                handleWeekChange={handleWeekChange}
                warmUpWithPoleMonths={warmUpWithPoleMonths}
                weekTrainingPlans={weekTrainingPlans}
                handleTask1DescriptionChange={handleTask1DescriptionChange}
                handleTask2DescriptionChange={handleTask2DescriptionChange}
                handleTask3DescriptionChange={handleTask3DescriptionChange}
            />
            <FinalText week={week}
                       warmUpPlan={warmUpPlan}
                       task1Description={task1Description}
                       task2Description={task2Description}
                       task3Description={task3Description}
                       warmUpWithPolePlan={warmUpWithPolePlan}
                       warmUpWithPoleMonths={warmUpWithPoleMonths}
                       weekTrainingPlans={weekTrainingPlans}
            />
        </div>
    );
};
