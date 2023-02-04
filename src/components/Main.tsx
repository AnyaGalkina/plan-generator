import React, {useState} from 'react';
import {FinalText} from './finalText/FinalText';
import styles from './Main.module.css';
import {Settings} from './settings/Settings';


const warmUpWithPolePlan = {
    'январь-февраль': {
        task1: 'Раскачка с подъемом наверх',
        task2: 'Шоудеры с выходом в коленный зацеп',
        task3: 'Тюльпан во флаг',
    }
};
const weekTrainingPlans = {
    '06.02-12.02': {
        task1: 'Оборот в балерину/бедра',
        task2: 'Опасный мост',
        task3: 'Икс/тейбл-топ',
    },
    '13.02-19.02': {
        task1: 'Титаник',
        task2: 'Флаг',
        task3: 'Стойка силовая',
    },
    '20.02-26.02': {
        task1: 'Крутка с двойным облетом',
        task2: 'Комбо',
        task3: 'Бланшики',
    },
    '27.02-05.03': {
        task1: 'Флаг цирковой',
        task2: 'Динамика в шоулдере/перехваты',
        task3: 'Джамилла',
    },
    '06.03-12.03': {
        task1: 'Китайский шпагат',
        task2: 'Рондат',
        task3: 'Икс/тейбл-топ',
    },
    '13.03-19.03': {
        task1: 'ДУЭТЫ',
        task2: 'СФП',
        // task3: '33',
    },
    '20.03-26.03': {
        task1: 'Крутка в шоулдер',
        task2: 'Флаг',
        task3: 'Инста',
    },
    '27.03-02.04': {
        task1: 'Комбо',
        task2: 'Силовые опускания/подъемы',
        task3: 'Стойка флажковая',
    },
    '03.04-09.04': {
        task1: 'Машин Ган',
        task2: 'Задняя аиша',
        task3: 'Стойка силовая',
    },
};


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
