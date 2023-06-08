import React from "react";
import Task from "./Task";

function TaskList({tasks, deleteTask}) {


  return (
    <div className="tasks">
      <ul className="Tasks">

      </ul>
      {tasks.map((task) => (
        <Task 
          key={task.text} 
          text={task.text} 
          category={task.category} 
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
