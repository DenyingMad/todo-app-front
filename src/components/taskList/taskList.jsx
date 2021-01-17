const Task = props => {
  return (
    <p><input type="checkBox"/>{props.task.taskName}</p>
  );
};

export const TaskList = props => {
  const taskList = props.tasks.map((task, index) =>
    <Task task={task} key={index}/>
  )
  return (
    <div className="list">
      {props.tasks.length === 0 ? <p>There are no tasks yet</p> : taskList}
    </div>
  );
};
