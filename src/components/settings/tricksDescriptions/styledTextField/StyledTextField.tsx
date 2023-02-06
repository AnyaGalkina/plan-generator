import React, {ChangeEvent, memo} from 'react';
import {TextField} from '@mui/material';

type PropsType = {
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}
export const StyledTextField = memo(({onChange}: PropsType) => {
    return (
        <TextField
            multiline
            fullWidth
            rows={3}
            onChange={onChange}
        />
    );
});
