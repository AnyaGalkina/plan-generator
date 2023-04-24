import React from 'react';
import {Paper} from '@mui/material';
import styles from '../Main.module.css';
import {BasicSelector} from './selector/MainSelector';
import {TricksDescriptions} from './tricksDescriptions/TricksDescriptions';
import {useAppSelector} from '../../store/hooks/hooks';
import {useDispatch} from 'react-redux';
import {setLevel, setWarmUpPlan, setWeek} from '../../store/settings-reducer';
import {INTRO} from '../../App';
import {TrainingPlansType} from '../../data/data';

const levels = ['Intro', 'Fit 1', 'Fit 2'];
const weeks = ['17.04-23.04', '24.04-30.04', '01.05-07.05', '08.05-14.05', '15.05-21.05', '22.05-28.05', '29.05-04.06',
 '05.06-11.06', '12.06-18.06', '19.06-25.06', '26.06-02.07'];
const weeksIntro = ['неделя А', 'неделя Б', 'неделя В'];
const warmUp = ['универсальная', 'на продольник', 'на складку', 'на спину'];

type PropsType = {
    weekTrainingPlans: TrainingPlansType;
}

export const Settings = ({weekTrainingPlans}: PropsType) => {

    const dispatch = useDispatch();
    const level = useAppSelector(state => state.settings.level);
    const week = useAppSelector(state => state.settings.week);
    const warmUpPlan = useAppSelector(state => state.settings.warmUpPlan);

    const handleLevelChange = (value: string) => {
        dispatch(setWeek(''));
        dispatch(setLevel(value));
    }

    const handleWeekChange = (value: string) => {
        dispatch(setWeek(value));
    };

    const handleWarmUpPlan = (value: string) => {
        dispatch(setWarmUpPlan(value));
    };

    return (
        <Paper elevation={1} className={styles.paperBlock}>
            <BasicSelector title={'Выбери уровень'}
                           dataArray={levels}
                           onChange={handleLevelChange}
                           value={level}
            />

            {level === INTRO
                ? <>
                    <BasicSelector title={'Программа недели'}
                                   dataArray={weeksIntro}
                                   onChange={handleWeekChange}
                                   value={week}
                    />
                </>
                : <>
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
                    <TricksDescriptions week={week}
                                        weekTrainingPlans={weekTrainingPlans}
                    />
                </>
            }

        </Paper>

    );
};
