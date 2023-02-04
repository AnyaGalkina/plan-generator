import React from 'react';
import {Button, Divider, Paper} from '@mui/material';
import styles from '../Main.module.css';

type PropsType = {
    week: string;
    task1Description: string;
    task2Description: string;
    task3Description: string;
    warmUpPlan: string;
    // warmUpWithPoleMonths: string;
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
                              task2Description,
                          }: PropsType) => {

    const {task3, task2, task1, warmUpMonths} = week && weekTrainingPlans[week]

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
                <p>
                    <h3 style={{margin: '0 0 6px 0'}}>План на следующую тренировку.</h3>
                    <span>Программа недели </span><span>{week}:</span>
                </p>

                <p>
                    <span> — Разминка: выбери видео "{warmUpPlan}"</span>
                </p>
                <p>
                    <span> — Пилонная разминка: </span>
                    <div>
                        <span>1. {warmUpMonths && warmUpWithPolePlan[warmUpMonths].task1}</span>
                    </div>
                    <div>
                        <span>2. {warmUpMonths && warmUpWithPolePlan[warmUpMonths].task2} </span>
                    </div>
                    <div>3. {warmUpMonths && warmUpWithPolePlan[warmUpMonths].task3}</div>
                </p>
                <p>

                    <h3>Основная часть тренировки:</h3>
                    <p>
                        <h4 style={{margin: '5px 0'}}>1. {task1}</h4>
                        <div>{task1Description}</div>
                    </p>
                    <p>
                        <h4 style={{margin: '5px 0'}}>2. {task2}</h4>
                        <div>{task2Description}</div>
                    </p>
                    <p>
                        {task3 &&
                            <h4 style={{margin: '5px 0'}}> 3. {weekTrainingPlans[week].task3}</h4>
                        }
                        <div>{task3Description}</div>
                    </p>
                    <p>⁃ Заминка</p>
                </p>
            </div>
            <div style={{display: 'flex', justifyContent: 'end'}}>
                <Button style={{
                    margin: '40px 0',
                    // background: '#48677c'
                    background: '#85c9cf'
                }} variant={'contained'} onClick={onCopyClick}>
                    Copy Text
                </Button>
            </div>
        </Paper>
    );
};
