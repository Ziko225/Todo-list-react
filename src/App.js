
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import Page404 from "./features/page404";
import AutorPage from "./features/author";

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