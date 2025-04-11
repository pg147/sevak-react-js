import React from 'react';
import {taskColors} from "../../utils/taskColors.js";

function TaskCards({index}) {
    let theme = index % 2 === 0 ? taskColors["newTask"] : taskColors["acceptedTask"];

    return (
        <div
            className={`relative box-border shrink-0 aspect-square w-[calc(100vw-96px)] p-4 md:w-[300px] rounded-xl ${theme.main}`}
        >
            {/* Priority indicator */}
            <div
                className={`size-fit absolute top-0 -right-2 px-3 py-1.5 rounded-lg shadow-intense bg-red-600`}>
                <h3 className={`font-semibold text-heading`}>High</h3>
            </div>

            {/* Task details */}
            <div className={"flex flex-col space-y-6 w-full"}>
                {/* Task Heading */}
                <div className={"flex flex-col space-y-1.5 text-heading"}>
                    <h3 className={"text-sm"}>20 Feb 2025</h3>
                    <div className={`px-3 py-1.5 rounded-[10px] ${theme.background}`}>
                        <p className={"text-black font-semibold"}>Create a thumbnail for YouTube</p>
                    </div>
                </div>

                {/* Task briefing */}
                <div className={"bg-black/10 text-heading rounded-xl px-3 py-2 "}>
                    <p className={"w-full break-words"}>
                        Design an eye-catching and engaging thumbnail for a YouTube video titled "iPhone 15 Review –
                        Worth the Upgrade?" The goal is to grab attention and increase click-through rates.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default TaskCards;