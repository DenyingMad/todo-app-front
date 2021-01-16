import {useFormik} from "formik";
import React from "react";
import {saveTask} from "../../api/taskApi";

export const AddTask = (props) => {

  const handleAddTask = newTask => {
    const task={taskName: newTask}
    addTask(props.tasks, task, props.setTasks)
  }

  const formik = useFormik({
    initialValues: {
      task: ''
    },
    onSubmit: (values, {resetForm}) => {
      handleAddTask(values.task);
      resetForm({task: ''})
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} className="">
      <input
        id="task"
        name="task"
        autoComplete="off"
        onChange={formik.handleChange}
        value={formik.values.task}
      />
      <button type="submit">Add new</button>
    </form>
  );
};

export const addTask = (tasks, newTask, setTask) => {
  saveTask(newTask)
    .then(task => setTask(tasks.concat(task)))
    .catch(() => console.log("Произошла ошибка при создании задачи"))
}
