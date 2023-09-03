import React from 'react';
import {Trick} from '../../trick/Trick';
import {useAppSelector} from '../../../../store/hooks/hooks';
import {actualWarmUpMonths, TrainingPlansType} from '../../../../data/data';

type PropsType = {
    warmUpPlan: string;
    warmUpMonths?: string;
    warmUpWithPolePlan?: TrainingPlansType;
    task1: string;
    task2: string;
    task3?: string;
    week: string;
}

export const FitFinalPlanDetails = ({warmUpPlan, warmUpMonths, warmUpWithPolePlan, week, task1, task2, task3}: PropsType) => {

    const task1Description = useAppSelector(state => state.settings.task1Description);
    const task2Description = useAppSelector(state => state.settings.task2Description);
    const task3Description = useAppSelector(state => state.settings.task3Description);

    const isFitWarmUpPlanShown = warmUpMonths && warmUpWithPolePlan;


    return (
        <>
            <p>
                <span> — Разминка: выбери раздел "{warmUpPlan}"</span>
            </p>
            <p>
                <span> — Пилонная разминка "{actualWarmUpMonths}": </span>
                <div>
                    <span>1. {isFitWarmUpPlanShown && warmUpWithPolePlan[warmUpMonths].task1}</span>
                </div>
                <div>
                    <span>2. {isFitWarmUpPlanShown && warmUpWithPolePlan[warmUpMonths].task2} </span>
                </div>
                <div>3. {isFitWarmUpPlanShown &&  warmUpWithPolePlan[warmUpMonths].task3}</div>
            </p>

            <p>
                <h3>Основная часть тренировки:</h3>
                <p>Выбери раздел “программа недели” -{'>'} {week}</p>
                <Trick index={0} trickTitle={task1} taskDescription={task1Description}/>
                <Trick index={1} trickTitle={task2} taskDescription={task2Description}/>
                {task3 &&
                    <Trick index={2} trickTitle={task3} taskDescription={task3Description}/>
                }
            </p>
        </>
    );
};
