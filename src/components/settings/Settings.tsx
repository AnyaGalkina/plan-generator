import React, {ChangeEvent} from 'react';
import {Paper} from '@mui/material';
import styles from '../Main.module.css';
import {BasicSelector} from '../selector/MainSelector';
import {StyledTextField} from './StyledTextField';

const levels = [
    // 'Intro',
    'Fit 1', 'Fit 2'];
const weeks = ['06.02-12.02', '13.02-19.02'];
const warmUp = ['на спину', ''];
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
            <div>
                <BasicSelector title={'Choose Level'}
                               dataArray={levels}
                               onChange={handleLevelChange}
                               value={level}
                />
            </div>
            <div>
                <BasicSelector title={'Программа недели'}
                               dataArray={weeks}
                               onChange={handleWeekChange}
                               value={week}
                />
            </div>
            <div>
                <BasicSelector title={'Разминка'}
                               dataArray={warmUp}
                               onChange={handleWarmUpPlan}
                               value={warmUpPlan}
                />
            </div>
            <div>
                <BasicSelector title={'Пилонная разминка'}
                               dataArray={warmUpWithPole}
                               onChange={handleWarmUpWithPole}
                               value={warmUpWithPoleMonths}
                />
            </div>
            <div>
                <h3>Основная часть тренировки:</h3>
                <h3>1. {week &&
                    // @ts-ignore
                    weekTrainingPlans[week].task1}</h3>
                <StyledTextField onChange={onTask1DescriptionChange}/>
                <h3>2. {week &&
                    // @ts-ignore
                    weekTrainingPlans[week].task2}</h3>
                <StyledTextField onChange={onTask2DescriptionChange}/>
                <h3>3. {week &&
                    // @ts-ignore
                    weekTrainingPlans[week].task3}</h3>
                <StyledTextField onChange={onTask3DescriptionChange}/>
            </div>
        </Paper>

    );
};
