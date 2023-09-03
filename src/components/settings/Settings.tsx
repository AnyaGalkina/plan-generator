import React from 'react';
import {Paper} from '@mui/material';
import styles from '../Main.module.css';
import {BasicSelector} from './selector/MainSelector';
import {TricksDescriptions} from './tricksDescriptions/TricksDescriptions';
import {useAppSelector} from '../../store/hooks/hooks';
import {useDispatch} from 'react-redux';
import {
    setLevel,
    setWarmUpPlan,
    setWeek
} from '../../store/settings-reducer';
import {INTRO} from '../../App';
import {TrainingPlansType} from '../../data/data';

const levels = ['Intro', 'Fit 1', 'Fit 2'];
const weeks = [
    // '03.07-09.07',
    // '10.07-16.07',
    // '17.07-23.07',
    // '24.07-30.07',
    // '31.07-06.08',
    // '07.08-13.08',
    // '14.08-20.08',
    // '21.08-27.08',
    '28.08-03.09',

    //!!!!Just uncomment this to get the full list of weeks

    '04.09-10.09',
    '11.09-17.09',
    '18.09-24.09',
    '25.09-01.10',
    '02.10-08.10',
];
const weeksIntro = ['неделя А', 'неделя Б', 'неделя В'];
const warmUp = ['универсальная', 'на продольник', 'на поперечную складку', 'на спину', 'на продольники и спину'];

type PropsType = {
    weekTrainingPlans: TrainingPlansType;
}

export const Settings = ({weekTrainingPlans}: PropsType) => {

    const dispatch = useDispatch();
    const level = useAppSelector(state => state.settings.level);
    const week = useAppSelector(state => state.settings.week);
    const warmUpPlan = useAppSelector(state => state.settings.warmUpPlan);

    const handleLevelChange = (value: string) => {
        // dispatch(setWeek(''));
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
