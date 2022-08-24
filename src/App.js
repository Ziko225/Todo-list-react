
import { HashRouter, Link, Redirect, Route, Switch } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage/index.js";
import TaskPage from "./features/tasks/TaskPage/index.js";
import AutorPage from "./features/authorPage/AuthorPage.js";
import Page404 from "./features/page404/Page404.js";

export default () => (
    <HashRouter>
        <Redirect to="/tasks">Zadania</Redirect>
        <Switch>
            <Route path="/tasks/:id">
                <TaskPage />
            </Route>
            <Route path="/autor">
                <AutorPage />
            </Route>
            <Route path="/tasks">
                <TasksPage />
            </Route>
            <Route path="/">
                <Page404 />
            </Route>
        </Switch>
    </HashRouter>
);