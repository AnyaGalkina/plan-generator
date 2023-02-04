import React from 'react';
import {Button, Divider, Paper} from '@mui/material';
import styles from '../Main.module.css';

type PropsType = {
    week: string;
    task1Description: string;
    task2Description: string;
    task3Description: string;
    warmUpPlan: string;
    warmUpWithPoleMonths: string;
    weekTrainingPlans?: any;
    warmUpWithPolePlan: any;
}

export const FinalText = ({
                              week,
                              warmUpPlan,
                              weekTrainingPlans,
                              warmUpWithPolePlan,
                              task1Description,
                              task3Description,
                              task2Description, warmUpWithPoleMonths
                          }: PropsType) => {


    const onCopyClick = () => {
        // debugger
        let copyText: any = document.getElementById('finalText');

        navigator.clipboard.writeText(copyText.outerText);
    };

    return (
        <Paper elevation={1} className={styles.paperBlock}>
            <h2>Text to send</h2>
            <Divider/>
            <div id={'finalText'}>
                <h3>План на следующую тренировку.</h3>
                <h4></h4>

                <div>
                    <span>Программа недели </span><span>{week} :</span>
                </div>
                <div>
                    <span> — Разминка: </span><span>{warmUpPlan}</span>
                </div>
                <div>
                    <span> — Пилонная разминка: </span>
                    <div>1. {warmUpWithPoleMonths &&
                        // @ts-ignore
                        warmUpWithPolePlan[warmUpWithPoleMonths].task1}</div>
                    <div>2. {warmUpWithPoleMonths &&
                        // @ts-ignore
                        warmUpWithPolePlan[warmUpWithPoleMonths].task2}</div>
                    <div>3. {warmUpWithPoleMonths &&
                        // @ts-ignore
                        warmUpWithPolePlan[warmUpWithPoleMonths].task3}</div>
                </div>
                <div>
                    <h3>Основная часть тренировки:</h3>
                    <h3>1. {week &&
                        // @ts-ignore
                        weekTrainingPlans[week].task1}</h3>
                    <div>{task1Description}</div>
                    <h3>2. {week &&
                        // @ts-ignore
                        weekTrainingPlans[week].task2}</h3>
                    <div>{task2Description}</div>

                    <h3>3. {week &&
                        weekTrainingPlans[week].task3}</h3>
                    <div>{task3Description}</div>
                    <h3>⁃ Заминка</h3>
                </div>
            </div>
            <Button variant={'contained'} onClick={onCopyClick}>Copy Text</Button>
        </Paper>
    );
};
