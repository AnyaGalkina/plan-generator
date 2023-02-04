import React, {ChangeEvent} from 'react';
import {Paper} from '@mui/material';
import styles from '../Main.module.css';
import {BasicSelector} from './selector/MainSelector';
import {StyledTextField} from './StyledTextField';

const levels = [
    // 'Intro',
    // 'Fit 1',
    'Fit 2'];
const weeks = ['06.02-12.02', '13.02-19.02', '20.02-26.02', '27.02-05.03', '06.03-12.03', '13.03-19.03', '20.03-26.03', '27.03-02.04', '03.04-09.04',


];
const warmUp = ['универсальная', 'на продольник', 'на складку', 'на спину'];
const warmUpWithPole = ['январь-февраль'];

type PropsType = {
    week: string;
    level: string;
    warmUpPlan: string;
    warmUpWithPoleMonths: string;
    handleWarmUpWithPole: (value: string) => void;
    handleLevelChange: (value: string) => void;
    handleWeekChange: (value: string) => void;
    handleWarmUpPlan: (value: string) => void;
    handleTask1DescriptionChange: (text: string) => void;
    handleTask2DescriptionChange: (text: string) => void;
    handleTask3DescriptionChange: (text: string) => void;
    weekTrainingPlans: any

}

export const Settings = ({
                             level, week, warmUpPlan, warmUpWithPoleMonths, handleWarmUpWithPole, handleWarmUpPlan,
                             handleLevelChange, handleWeekChange, weekTrainingPlans,
                             handleTask3DescriptionChange, handleTask2DescriptionChange, handleTask1DescriptionChange
                         }: PropsType) => {


    const {task3, task1, task2} = week && weekTrainingPlans[week];

    const onTask1DescriptionChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        handleTask1DescriptionChange(event.currentTarget.value);
    };
    const onTask2DescriptionChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        handleTask2DescriptionChange(event.currentTarget.value);
    };
    const onTask3DescriptionChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        handleTask3DescriptionChange(event.currentTarget.value);
    };

    return (
        <Paper elevation={1} className={styles.paperBlock}>
            {/*<BasicSelector title={'Выбери уровень'}*/}
            {/*               dataArray={levels}*/}
            {/*               onChange={handleLevelChange}*/}
            {/*               value={level}*/}
            {/*/>*/}
            <BasicSelector title={'Программа недели'}
                           dataArray={weeks}
                           onChange={handleWeekChange}
                           value={week}
            />
            <BasicSelector title={'Разминка'}
                           dataArray={warmUp}
                           onChange={handleWarmUpPlan}
                           value={warmUpPlan}
            />
            <BasicSelector title={'Пилонная разминка'}
                           dataArray={warmUpWithPole}
                           onChange={handleWarmUpWithPole}
                           value={warmUpWithPoleMonths}
            />

            {/*<Divider/>*/}
            <div>
                <h3>Основная часть тренировки:</h3>
                <h4>1. {task1}</h4>
                <StyledTextField onChange={onTask1DescriptionChange}/>
                <h4>2. {task2}</h4>
                <StyledTextField onChange={onTask2DescriptionChange}/>
                {task3 &&
                    <>
                        <h4>3. {task3}</h4>
                        <StyledTextField onChange={onTask3DescriptionChange}/>
                    </>
                }
            </div>
        </Paper>

    );
};
