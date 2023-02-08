import React, {memo} from 'react';
import {WarmUpIntro} from './WarmUpIntro';
import {Trick} from '../../trick/Trick';

type PropsType = {
    task1: string;
    task2: string;
}

export const IntroFinalPlanDetails = memo(({task1, task2}: PropsType) => {

    const introTricksPlan = ['Крутки', 'Лазы', task1, task2, 'СФП'];

    return (
        <>
            <WarmUpIntro/>

            <h3>Основная часть тренировки:</h3>
            {introTricksPlan.map((el, index) => {
                return <Trick key={index} index={index} trickTitle={el}/>
            })
            }
        </>
    );
});
