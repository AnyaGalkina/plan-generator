import React from 'react';
import stylesFinalText from '../FinalText.module.css';

type PropsType = {
    index: number;
    trickTitle: string;
    taskDescription?: string
}

export const Trick = ({trickTitle, index, taskDescription}: PropsType) => {
    return (
        <p>
            <h4 className={stylesFinalText.header4}>{index + 1}. {trickTitle}</h4>
            <div>{taskDescription  ? taskDescription : ''}</div>
        </p>
    );
};
