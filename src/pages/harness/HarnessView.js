import React from "react";

import List from "@material-ui/core/List";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import {ListItem, ListItemText} from "@material-ui/core";

import {TaskListView} from "../../components/taskList/taskListView";

const LeftToolbar = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
    >
      <div>Project cool name</div>
      <Divider/>
      <List>
        {['Dashboard', 'Timeline', 'Calendar', 'Reports'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text}/>
          </ListItem>
        ))}
      </List>
    </Drawer>)
}

const HarnessView = () => {
  return (
    <>
      <LeftToolbar/>
      <div className="container root-wrapper">
        <TaskListView/>
      </div>
    </>
  );
};

export default HarnessView;
