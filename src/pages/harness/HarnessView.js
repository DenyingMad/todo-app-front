import React from "react";

import List from "@material-ui/core/List";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import {ListItem, ListItemIcon, ListItemText, makeStyles} from "@material-ui/core";

import {TaskListView} from "../../components/taskList/taskListView";

import { ReactComponent as Dashboard } from "../../images/dashboard.svg";
import { ReactComponent as Timeline } from "../../images/timeline.svg";
import { ReactComponent as Calendar } from "../../images/calendar.svg";
import { ReactComponent as Reports } from "../../images/send.svg";
import {Link} from "react-router-dom";

const SECTIONS = [
  {sectionName: 'Dashboard', href: '/dashboard', Icon: Dashboard},
  {sectionName: 'Timeline', href: '/timeline', Icon: Timeline},
  {sectionName: 'Calendar', href: '/calendar', Icon: Calendar},
  {sectionName: 'Reports', href: '/reports', Icon: Reports},
]

const drawerWidth = 220;

const useStyles = makeStyles({
  root: {
    display: "flex"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#061c34",
    borderRight: "1px solid #777777",
    padding: 15,
  },
  listItem: {
    border: "1px solid #fff",
    borderRadius: 15,
    marginBottom: 5,
    paddingTop: 15,
    paddingBottom: 15,
  }
})

const LeftToolbar = () => {
  const classes = useStyles();
  return (
    <Drawer className={classes.drawer} classes={{paper: classes.drawerPaper}} variant="permanent" anchor="left">
      <div className="leftToolbar-header">Project cool name</div>
      <Divider/>
      <List>
        {SECTIONS.map((section) => (
          <Link to={section.href} key={section.sectionName} className="leftToolbar-link">
            <ListItem button classes={{root: classes.listItem}}>
              <ListItemIcon className="section-icon"><section.Icon/></ListItemIcon>
              <ListItemText primary={section.sectionName}/>
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>)
}

const HarnessView = () => {
  return (
    <>
      <div>
        <LeftToolbar/>
      </div>
      <div className="container root-wrapper">
        <TaskListView/>
      </div>
    </>
  );
};

export default HarnessView;
