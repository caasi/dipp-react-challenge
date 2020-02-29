import React from 'react';
import styles from './index.module.scss';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Task1Page from '../components/Task1Page';
import Task2Page from '../components/Task2Page';

function App({ id }) {
  return (
    <Router basename="/">
      <div id={id} className={styles.className}>
        <nav>
          <ul>
            <li>
              <Link to="/task1">Task 1</Link>
            </li>
            <li>
              <Link to="/task2">Task 2</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Switch>
            <Route path="/task1">
              <Task1Page />
            </Route>
            <Route path="/task2">
              <Task2Page />
            </Route>
            <Redirect to="/task1" />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
