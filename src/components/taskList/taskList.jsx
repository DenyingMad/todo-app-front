import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    background: "#1a1a1a",
    border: "1px solid #777777",

  }
})

const Task = props => {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <p>{props.task.taskName}</p>
      <p>{props.task.description}</p>
      <p>{props.task.requaredTime}</p>
    </div>
  );
};

export const TaskList = props => {
  const taskList = props.tasks.map((task, index) =>
    <Task task={task} key={index}/>
  )
  return (
    <div className="container root-wrapper">
      {props.tasks.length === 0 ? <p>There are no tasks yet</p> : taskList}
    </div>
  );
};
