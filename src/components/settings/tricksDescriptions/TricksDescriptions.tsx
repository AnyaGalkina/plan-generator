import React, {ChangeEvent, useCallback, memo} from 'react';
import {StyledTextField} from './styledTextField/StyledTextField';
import {setTask1Description, setTask2Description, setTask3Description} from '../../../store/settings-reducer';
import {useDispatch} from 'react-redux';

type PropsType = {
    week: string;
    weekTrainingPlans: any;
    placeholderText: string
}


export const TricksDescriptions = ({
                                            week,
                                            weekTrainingPlans, placeholderText
                                        }: PropsType) => {

    const dispatch = useDispatch();
    const {task3, task1, task2} = week && weekTrainingPlans[week];
    console.log(placeholderText)
    // dispatch(setTask1Description(placeholderText));
    // dispatch(setTask2Description(placeholderText));
    // dispatch(setTask3Description(placeholderText));

    const handleTask1DescriptionChange = useCallback((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        let text = event.currentTarget.value;
        dispatch(setTask1Description(text));
    }, [dispatch]);

    const handleTask2DescriptionChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        let text = event.currentTarget.value;
        dispatch(setTask2Description(text));
    };

    const handleTask3DescriptionChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        let text = event.currentTarget.value;
        dispatch(setTask3Description(text));
    };

    return (
        <div>
            <h3>Основная часть тренировки:</h3>
            <h4>1. {task1}</h4>
            <StyledTextField onChange={handleTask1DescriptionChange} placeholder={placeholderText}/>
            <h4>2. {task2}</h4>
            <StyledTextField onChange={handleTask2DescriptionChange} placeholder={placeholderText}/>
            {task3 &&
                <>
                    <h4>3. {task3}</h4>
                    <StyledTextField onChange={handleTask3DescriptionChange} placeholder={placeholderText}/>
                </>
            }
        </div>
    );
};
