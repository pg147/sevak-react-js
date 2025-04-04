import React from 'react';
import Header from "../Other/Header.jsx";
import {taskColors} from "../../utils/taskColors.js";

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
        <div className={"w-full flex flex-col space-y-6 max-w-7xl mx-auto"}>
            <Header userName={userName}/>

            <div className={"w-full grid grid-cols-2 lg:flex gap-4"}>
                {taskTiles.map((tiles) => (
                    <div className={"flex flex-col space-y-2 bg-tile border-[1.5px] border-stroke h-fit w-full rounded-xl shadow-intense p-6"}>
                        <h1 className={`text-4xl font-bold ${taskColors[tiles.theme.main].stroke}`}>0</h1>
                        <p className={"text-2xl font-semibold text-heading"}>{tiles.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EmployeeDashboard;