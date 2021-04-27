import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";
import Assignments from "./views/assignments";
import Assessments from "./views/assessments";
import Navbar from "./components/navbar";

export default function Router() {
    return (
        <div data-testid="router">
            <Navbar />
            <div>
                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/assignments">
                        <Assignments />
                    </Route>
                    <Route path="/assessments">
                        <Assessments />
                    </Route>
                </Switch>
            </div>
        </div>
    );
}
