import React from 'react';
import TaskCards from "./TaskCards.jsx";

function TaskList(props) {
    return (
        <div id={"taskList"} className={"h-fit overflow-x-auto w-full flex space-x-5 text-nowrap md:rounded-xl"}>
            {Array.from({length: 12}).map((_, index) => {
                    return (
                        <TaskCards index={index} />
                    );
                }
            )}
        </div>
    );
}

export default TaskList;