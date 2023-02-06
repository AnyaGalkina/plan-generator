import React from 'react';
import {Button, Paper} from '@mui/material';
import styles from '../Main.module.css';
import {useAppSelector} from '../../hooks/hooks';
import {Title} from './title/Title';
import {INTRO} from '../../App';
import {WarmUpIntro} from '../intro/WarmUpIntro';
import {Trick} from './trick/Trick';

type PropsType = {
    weekTrainingPlans?: any;
    warmUpWithPolePlan?: any;
}

export const FinalText = React.memo(({weekTrainingPlans, warmUpWithPolePlan}: PropsType) => {

    const level = useAppSelector(state => state.settings.level);
    const week = useAppSelector(state => state.settings.week);
    const warmUpPlan = useAppSelector(state => state.settings.warmUpPlan);
    const task1Description = useAppSelector(state => state.settings.task1Description);
    const task2Description = useAppSelector(state => state.settings.task2Description);
    const task3Description = useAppSelector(state => state.settings.task3Description);

    const {task3, task2, task1, warmUpMonths} = week && weekTrainingPlans[week];

    const introTricksPlan = ['Крутки', 'Лазы', task1, task2, 'СФП'];

    const onCopyClick = () => {
        let copyText: any = document.getElementById('finalText');
        navigator.clipboard.writeText(copyText.outerText);
    };

    return (
        <Paper elevation={1} className={styles.paperBlock}>
            <Title/>
            <div id={'finalText'}>
                <p>
                    <h3 style={{margin: '0 0 6px 0'}}>План на следующую тренировку.</h3>
                    <span>Программа недели: </span><span>{week}</span>
                </p>

                {level === INTRO
                    ? <>
                        <WarmUpIntro/>

                        <h3>Основная часть тренировки:</h3>
                        {introTricksPlan.map((el, index) => {
                            return <Trick key={index} index={index} trickTitle={el}/>
                        })
                        }
                    </>
                    : <>
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
                            <Trick index={1} trickTitle={task1} taskDescription={task1Description}/>
                            <Trick index={2} trickTitle={task2} taskDescription={task2Description}/>
                            {task3 &&
                                <Trick index={3} trickTitle={task3} taskDescription={task3Description}/>
                            }
                        </p>
                    </>
                }
                <p>⁃ Заминка</p>
            </div>

            <div style={{display: 'flex', justifyContent: 'end'}}>
                <Button style={{margin: '40px 0', background: '#85c9cf'}} variant={'contained'}
                        onClick={onCopyClick}>
                    Copy Text
                </Button>
            </div>

        </Paper>
    );
});
