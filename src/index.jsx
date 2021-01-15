import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import {useFormik} from 'formik'
import "./index.css"
import {getTaskList, saveTask} from "./api/taskApi";

const Task = props => {
  return (
    <p><input type="checkBox"/>{props.task.taskName}</p>
  );
};

const TodoList = props => {
  const taskList = props.tasks.map((task) =>
    <Task task={task}/>
  )
  return (
    <div className="list">
      {console.log(props.tasks.length)}
      {props.tasks.length === 0 ? <p>There are no tasks yet</p> : taskList}
    </div>
  );
};

const AddTask = (props) => {
  const formik = useFormik({
    initialValues: {
      task: ''
    },
    onSubmit: (values, {resetForm}) => {
      props.handleClick(values.task);
      resetForm({task: ''})
    }
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className=""
    >
      <label htmlFor="task">What you want to do?</label>
      <input
        id="task"
        name="task"
        autoComplete="off"
        onChange={formik.handleChange}
        value={formik.values.task}
      />
      <button type="submit">Add task #{props.nextTaskNumber}</button>
    </form>
  );
};

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks(setTasks)
  }, [setTasks]);

  return (
    <div className="container root-wrapper">
      <h1 className="app-header">To-do List</h1>
      <TodoList tasks={tasks}/>
      <AddTask
        nextTaskNumber={tasks.length + 1}
        handleClick={(newTask) => {
          const newTaskObj = {
            taskName: newTask,
          };
          // setTasks(tasks.concat(newTaskObj));
          addTask(tasks, newTaskObj, setTasks)
        }}
      />
    </div>
  );
};

const Root = (
  <App/>
)

ReactDOM.render(
  Root,
  document.getElementById('root')
);

const loadTasks = (setTasks) => {
  getTaskList()
    .then(tasks => setTasks(tasks))
    .catch(() => console.log("Произошла ошибка при загрузке задач"));
}

const addTask = (tasks, task, setTask) => {
  saveTask(task)
    .then(task => setTask(tasks.concat(task)))
    .catch(() => console.log("Произошла ошибка при создании задачи"))
  console.log(tasks)
}
