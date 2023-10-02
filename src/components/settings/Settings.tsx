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
    '02.10-08.10',
    '09.10-15.10',
    '16.10-22.10',
    '23.10-29.10',
    //!!!!Just uncomment this to get the full list of weeks

    // '30.10-05.11',
    // '06.11-12.11',
    // '13.11-19.11',
    // '20.11-26.11',
    // '27.11-03.12',
    // '04.12-10.12',
    // '11.12-17.12',
    // '18.12-24.12',
    // '25.12-31.12',
    // '01.01-07.01',
    // '08.01-14.01',
    // '15.01-21.01',
    // '22.01-28.01',
    // '29.01-04.02',
    // '05.02-11.02',
    // '12.02-18.02',
    // '19.02-25.02',
    // '26.02-03.03',
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
