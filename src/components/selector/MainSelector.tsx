import React from 'react';
import {FormControl, InputLabel, MenuItem, Select} from '@mui/material';

type PropsType = {
    title: string;
    dataArray: Array<string>;
    value: string;
    onChange: (event: any) => void;
}

export const BasicSelector = ({dataArray, title, value, onChange}: PropsType) => {

    const onChangeHandler = (event: any) => {
        onChange(event.target.value)
    }
    return (
        <div>
            <h2>{title}</h2>
            <FormControl fullWidth>
                <InputLabel
                ></InputLabel>
                <Select
                    value={value}
                    onChange={onChangeHandler}
                >
                    {dataArray.map((el, index) => {
                        return  <MenuItem key={index} value={el}>{el}</MenuItem>
                    })}
                </Select>
            </FormControl>
        </div>
    );
};
