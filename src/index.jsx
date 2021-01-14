import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import {useFormik} from 'formik'
import "./index.css"

const Task = props => {
  return (
    <p><input type="checkBox"/>{props.task.text}</p>
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
    fetch('/task/get-all-tasks')
      .then(response => response.json())
      .then(json => console.log(json))
  });

  return (
    <div className="container root-wrapper">
      <h1 className="app-header">To-do List</h1>
      <TodoList tasks={tasks}/>
      <AddTask
        nextTaskNumber={tasks.length + 1}
        handleClick={(newTask) => {
          const newTaskObj = {
            id: Date.now().toLocaleString(),
            text: newTask,
          };
          setTasks(tasks.concat(newTaskObj));
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
