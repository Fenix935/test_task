import './App.css';
import TableConfig from "./components/TableConfig/TableConfig";
import Table from "./components/Table/Table";
import { useState } from "react";

function App() {
    const [tableOptions, setTableOptions] = useState({
        rowValue: "",
        columnsValue: "",
    });

    return (
        <>
            <TableConfig tableOptions={tableOptions} setTableOptions={setTableOptions}/>
            <Table tableOptions={tableOptions}/>
        </>
    );
}

export default App;
