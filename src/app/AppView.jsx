import HarnessView from "../pages/harness/HarnessView";
import {Switch, Route, Redirect} from "react-router-dom";
import ComingSoon from "../pages/comingSoon/comingSoon";
import {TaskListView} from "../components/taskList/taskListView";

const App = () => {
  return (
    <div>
      <HarnessView>
        <Switch>
          <Route path="/dashboard" component={TaskListView} exact/>
          <Route path="/timeline" component={ComingSoon} exact/>
          <Route path="/calendar" component={ComingSoon} exact/>
          <Route path="/reports" component={ComingSoon} exact/>
          <Redirect from='/' to='/dashboard'/>
        </Switch>
      </HarnessView>
    </div>
  );
};

export default App;
