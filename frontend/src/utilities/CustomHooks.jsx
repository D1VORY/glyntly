import { useState } from 'react';

export const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    return [
        {value, onChange: e => setValue(e.target.value)},
        () => setValue(initialValue)
    ];
}

export const useModal = initialValue => {
    const [value, setValue] = useState(initialValue);
    return[
        value,
        () => setValue(true), //open modal
        () => setValue(false) // close modal
    ]
}