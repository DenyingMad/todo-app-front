import HarnessView from "../pages/harness/HarnessView";
import {Switch, Route, Redirect} from "react-router-dom";
import ComingSoon from "../pages/comingSoon/comingSoon";
const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/dashboard" component={HarnessView} exact />
        <Route path="/timeline" component={ComingSoon} exact />
        <Route path="/calendar" component={ComingSoon} exact />
        <Route path="/reports" component={ComingSoon} exact />
        <Redirect from='/' to='/dashboard'/>
      </Switch>
    </div>
  );
};

export default App;
