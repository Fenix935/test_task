import React from 'react';
import styles from "./Input.module.css"
import classNames from "classnames"

const Input = ({value, className, setValue, ...otherArgs}) => {
    return (
        <input
            onChange={setValue}
            value={value}
            className={classNames(styles.input, className)}
            {...otherArgs}
        />
    );
};

export default Input;