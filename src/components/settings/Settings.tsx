import React, {memo, useState} from 'react';
import {Checkbox, Paper} from '@mui/material';
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
import {weeks, placeholderTest, TrainingPlansType} from '../../data/data';

const levels = ['Intro', 'Fit 1', 'Fit 2'];


const weeksIntro = ['неделя А', 'неделя Б', 'неделя В'];
const warmUp = ['универсальная', 'на продольник', 'на поперечную складку', 'на спину', 'на продольники и спину'];

type PropsType = {
    weekTrainingPlans: TrainingPlansType;
}

export const Settings =  ({weekTrainingPlans}: PropsType) => {

    const dispatch = useDispatch();
    const level = useAppSelector(state => state.settings.level);
    const week = useAppSelector(state => state.settings.week);
    const warmUpPlan = useAppSelector(state => state.settings.warmUpPlan);

    const [newText, setText] = useState('');
    const [checked, setChecked] = useState(false);

    const handleLevelChange = (value: string) => {
        dispatch(setLevel(value));
    }

    const handleWeekChange = (value: string) => {
        dispatch(setWeek(value));
    };

    const handleOnCheckboxChange = () => {
        checked ? setText('') : setText(placeholderTest)
        setChecked(!checked)
    }
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
                    <span>Добавить placeholder </span>
                    <Checkbox onChange={handleOnCheckboxChange} checked={checked}/>
                    <TricksDescriptions week={week}
                                        weekTrainingPlans={weekTrainingPlans}
                                        placeholderText={newText}
                    />
                </>
            }

        </Paper>

    );
};
