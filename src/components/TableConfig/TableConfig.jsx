import React from 'react';
import Input from "../../ui/Input/Input";
import styles from "./TableConfig.module.css"

const TableConfig = ({tableOptions, setTableOptions}) => {
    const changeInput = (value, maxNumber) => {
        const regExp = new RegExp("[^0-9]", "g");

        if(Number(value) >= maxNumber) {
            return maxNumber;
        }

        if(Number(value) > 0 && !regExp.test(value) || value === ""){
            return value;
        }
    }

    const changeRow = (e) => {
        let value = changeInput(e.target.value.trim(), 120);
        if(value !== undefined) setTableOptions(prev => ({...prev, rowValue: value}));
    }

    const changeColumns = (e) => {
        let value = changeInput(e.target.value.trim(), 20);
        if(value !== undefined) setTableOptions(prev => ({...prev, columnsValue: value}));
    }

    return (
        <div className={styles.table_config}>
            <h2 className={styles.table_title}>Настройки таблицы</h2>

            <div className={styles.table_config_input}>
                <label>
                    <span>Введите число строк</span>
                    <Input value={tableOptions.rowValue} setValue={changeRow}/>
                </label>

                <label>
                    <span>Введите число столбцов</span>
                    <Input value={tableOptions.columnsValue} setValue={changeColumns}/>
                </label>
            </div>
        </div>
    );
};

export default TableConfig;