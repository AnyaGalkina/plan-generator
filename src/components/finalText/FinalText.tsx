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

    const task3IsShown = week && weekTrainingPlans[week].task3;

    const onCopyClick = () => {
        let copyText: any = document.getElementById('finalText');

        navigator.clipboard.writeText(copyText.outerText);
    };

    return (
        <Paper elevation={1} className={styles.paperBlock}>
            <div>
                <h2>Текст</h2>
                <Divider/>
            </div>

            <div id={'finalText'}>
                <h3>План на следующую тренировку.</h3>

                <div>
                    <span>Программа недели </span><span>{week}:</span>
                </div>
                <br/>
                <div>
                    <span> — Разминка: </span><span>{warmUpPlan}</span>
                </div>
                <br/>
                <div>
                    <span> — Пилонная разминка: </span>
                    <div>
                        <span>1. {warmUpWithPoleMonths && warmUpWithPolePlan[warmUpWithPoleMonths].task1}</span>
                    </div>
                    <div>
                        <span>2. {warmUpWithPoleMonths && warmUpWithPolePlan[warmUpWithPoleMonths].task2} </span>
                    </div>
                    <div>3. {warmUpWithPoleMonths && warmUpWithPolePlan[warmUpWithPoleMonths].task3}</div>
                </div>
                <br/>
                <div>
                    <h3>Основная часть тренировки:</h3>
                    <h4>1. {week && weekTrainingPlans[week].task1}</h4>
                    <div>{task1Description}</div>
                    <h4>2. {week && weekTrainingPlans[week].task2}</h4>
                    <div>{task2Description}</div>
                    {task3IsShown &&
                        <h4>3. {weekTrainingPlans[week].task3}</h4>
                    }
                    <div>{task3Description}</div>
                    <br/>
                    <div>⁃ Заминка</div>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'end'}}>
                <Button style={{margin: '40px 0',
                    // background: '#48677c'
                    background: '#85c9cf'
                }} variant={'contained'} onClick={onCopyClick}>
                    Copy Text
                </Button>
            </div>
        </Paper>
    );
};
