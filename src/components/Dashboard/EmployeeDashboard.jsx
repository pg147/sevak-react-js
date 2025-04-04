import React from 'react';
import Header from "../Other/Header.jsx";
import TaskList from "../TaskList/TaskList.jsx";
import TaskCounts from "./TaskCounts.jsx";

function EmployeeDashboard() {
    // Dashboard task category tiles
    const taskTiles = [
        {
            title: "New Task",
            theme: {
                main: "newTask"
            }
        },
        {
            title: "Completed",
            theme: {
                main: "completedTask"
            }
        },
        {
            title: "Accepted",
            theme: {
                main: "acceptedTask"
            }
        },
        {
            title: "Failed",
            theme: {
                main: "failedTask"
            }
        },
    ]

    const userName = 'Prathmesh';

    return (
        <div className={"h-full w-full flex flex-col space-y-6 max-w-7xl mx-auto"}>
            <Header userName={userName}/>
            <TaskCounts taskTiles={taskTiles}/>
            <TaskList/>
        </div>
    );
}

export default EmployeeDashboard;