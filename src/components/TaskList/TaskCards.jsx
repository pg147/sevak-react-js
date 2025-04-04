import React from 'react';
import {taskColors} from "../../utils/taskColors.js";

function TaskCards({ index }) {
    let theme = index % 2 === 0 ? taskColors["newTask"] : taskColors["acceptedTask"];

    return (
        <div className={`relative shrink-0 aspect-square w-[calc(100vw-96px)] md:w-[300px] rounded-xl ${theme.main}`}>
            <div className={`size-fit absolute top-0 -right-2 px-3 py-1.5 rounded-lg shadow-intense ${theme.background}`}>
                <h3 className={`font-semibold ${theme.stroke}`}>High</h3>
            </div>
        </div>
    );
}

export default TaskCards;