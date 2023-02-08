import React from 'react';
import {Button, Paper} from '@mui/material';
import styles from '../Main.module.css';
import {useAppSelector} from '../../store/hooks/hooks';
import {Title} from './title/Title';
import {INTRO} from '../../App';
import {TrainingPlansType} from '../../data/data';
import {IntroFinalPlanDetails} from './finalPlanContent/intro/IntroFinalPlanDetails';
import {FitFinalPlanDetails} from './finalPlanContent/fit/FitFinalPlanDetails';

type PropsType = {
    weekTrainingPlans: TrainingPlansType;
    warmUpWithPolePlan?: TrainingPlansType;
}

export const FinalText = React.memo(({weekTrainingPlans, warmUpWithPolePlan}: PropsType) => {

    const level = useAppSelector(state => state.settings.level);
    const week = useAppSelector(state => state.settings.week);
    const warmUpPlan = useAppSelector(state => state.settings.warmUpPlan);

    //@ts-ignore
    const {task3, task2, task1, warmUpMonths} = weekTrainingPlans && week && weekTrainingPlans[week];

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
                    ? <IntroFinalPlanDetails task1={task1} task2={task2}/>
                    : <FitFinalPlanDetails warmUpPlan={warmUpPlan}
                                           warmUpWithPolePlan={warmUpWithPolePlan}
                                           warmUpMonths={warmUpMonths}
                                           task1={task1}
                                           task2={task2}
                                           task3={task3}
                    />
                }
                <p>⁃ Заминка</p>
            </div>

            <div className={styles.buttonBlock}>
                <Button style={{margin: '40px 0', background: '#85c9cf'}}
                        variant={'contained'}
                        onClick={onCopyClick}> Copy Text
                </Button>
            </div>

        </Paper>
    );
});
