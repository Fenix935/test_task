import React, {useEffect, useState} from 'react';
import styles from "./Table.module.css"
import {getRandomNumber} from "../../libs/getRandomNumber";

const Table = ({tableOptions}) => {
    const [tableData, setTableData] = useState({row: [], columns: []});

    const generateArray = (number) => {
        const array = [];

        for(let i = 1; i <= number; i++){
            array.push(i);
        }
        return array;
    }

    useEffect(() => {
        if(tableOptions.rowValue) setTableData(prev => ({...prev, row: generateArray(Number(tableOptions.rowValue))}));

        if(tableOptions.columnsValue) setTableData(prev => ({...prev, columns: generateArray(Number(tableOptions.columnsValue))}));
    }, [tableOptions])

    return (
        <div className={styles.table}>
            <table>
                <tbody>
                    {
                        tableData.row.map(rowItem => {
                            return (
                                <tr key={rowItem}>
                                    {tableData.columns.map((columnsItem) => {
                                        return <td key={columnsItem}>{getRandomNumber(tableOptions.rowValue, tableOptions.columnsValue)}</td>
                                    })}
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Table;