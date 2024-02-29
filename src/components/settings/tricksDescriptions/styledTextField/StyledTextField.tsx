import React, {ChangeEvent, memo} from 'react';
import {TextField} from '@mui/material';

type PropsType = {
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    placeholder: string
}
export const StyledTextField = ({onChange, placeholder}: PropsType) => {
    return (
        <TextField
            multiline
            fullWidth
            defaultValue={placeholder}
            rows={3}
            onChange={onChange}
        />
    );
};
