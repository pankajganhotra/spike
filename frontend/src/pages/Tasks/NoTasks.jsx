import React from "react";
import { toggleTaskModal } from "../../app/store/actions/modalActions";

const NoTasks = () => {
  return (
    <div className="text-center">
      <h3>No Tasks</h3>
      <p>You have no tasks. Click the button below to add a task.</p>
      <button className="btn btn-primary" onClick={() => toggleTaskModal()}>
        Add Task
      </button>
    </div>
  );
};

export default NoTasks;
