import React from 'react';
import PageDataProvider from './context/context'
import SharePage from './pages/sharePage/sharePage';
import FriendPage from './pages/friendPage/friendPage';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <PageDataProvider>
      <Router>
       <Switch>
          <Route exact path="/share" component={SharePage} />
          <Route exact path="/friend/" component={FriendPage} />
          <Route exact path="/">
             <Redirect to="/share" />
          </Route>
        </Switch>
    </Router>
    </PageDataProvider>
  );
}

export default App;
