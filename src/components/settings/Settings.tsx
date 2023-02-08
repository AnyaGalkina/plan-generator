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

const levels = ['Intro',
    // 'Fit 1',
    'Fit 2'];
const weeks = ['06.02-12.02', '13.02-19.02', '20.02-26.02', '27.02-05.03', '06.03-12.03', '13.03-19.03', '20.03-26.03', '27.03-02.04', '03.04-09.04'];
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
