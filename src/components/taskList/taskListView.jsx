import React, {useEffect, useState} from "react";

import {TaskList} from "./taskList";
import {AddTask} from "./addTaskForm";
import {getTaskList} from "../../api/taskApi";

export const TaskListView = () => {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks(setTasks)
  }, [setTasks]);

  return (
    <div>
      <TaskList tasks={tasks}/>
      <AddTask tasks={tasks} setTasks={setTasks}/>
    </div>
  )
}

const loadTasks = (setTasks) => {
  getTaskList()
    .then(tasks => setTasks(tasks))
    .catch(() => console.log("Произошла ошибка при загрузке задач"));
}
