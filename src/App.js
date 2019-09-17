import React from 'react';
import DisplaySinglePost from'./Components/DisplaySinglePost';
import DisplayUsers from './Components/DisplayUsers';
import EditPost from './Components/EditPost';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div>
        <Router>
          <Switch>
            <Route path={'/edit/:id'} component={EditPost}/>
            <Route path={'/:id'} component={DisplaySinglePost}/>
            <Route path={'/'} component={DisplayUsers} />
          </Switch>
        </Router>
      </div>
  );
}

export default App;
