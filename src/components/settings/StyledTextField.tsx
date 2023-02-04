import React, {ChangeEvent} from 'react';
import {TextField} from '@mui/material';

type PropsType = {
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}
export const StyledTextField = ({onChange}: PropsType) => {
    return (
        <TextField
            multiline
            fullWidth
            rows={3}
            onChange={onChange}
        />
    );
};
