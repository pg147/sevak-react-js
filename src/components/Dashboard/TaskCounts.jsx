import React from 'react';
import {taskColors} from "../../utils/taskColors.js";

function TaskCounts({ taskTiles }) {
    return (
        <div className={"w-full grid grid-cols-2 lg:flex gap-4"}>
            {taskTiles.map((tiles) => (
                <div
                    className={"flex flex-col space-y-2 bg-tile border-[1.5px] border-stroke h-fit w-full rounded-xl shadow-intense p-6"}>
                    <h1 className={`text-4xl font-bold ${taskColors[tiles.theme.main].stroke}`}>0</h1>
                    <p className={"text-2xl font-semibold text-heading"}>{tiles.title}</p>
                </div>
            ))}
        </div>
    );
}

export default TaskCounts;