import React, { useEffect } from "react";
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import By_me from "./assessments/by-me";
import By_math_nation from "./assessments/by-math-nation";
import By_district from "./assessments/by-district";
import By_others from "./assessments/by-others";
import Create from "./assessments/create";
import Edit from "./assessments/edit";

export default function Assessments() {
    let match = useRouteMatch();

    useEffect(() => {
        console.log(match.url);
        console.log(match.path);
    }, []);

    return (
        <div data-testid="assessments">
            <h2>Assessments</h2>

            <ul>
                <li>
                    <Link to={`${match.url}/by-me`}>by me</Link>
                </li>
                <li>
                    <Link to={`${match.url}/by-math-nation`}>by math nation</Link>
                </li>
                <li>
                    <Link to={`${match.url}/by-district`}>by district</Link>
                </li>
                <li>
                    <Link to={`${match.url}/by-others`}>by others</Link>
                </li>
                <li>
                    <Link to={`${match.url}/create`}>create</Link>
                </li>
                <li>
                    <Link to={`${match.url}/edit`}>edit</Link>
                </li>
            </ul>

            {/* The Topics page has its own <Switch> with more routes
                that build on the /topics URL path. You can think of the
                2nd <Route> here as an "index" page for all topics, or
                the page that is shown when no topic is selected */}
            <Switch>
                <Route path={`${match.path}/by-me`}>
                    <By_me />
                </Route>
                <Route path={`${match.path}/by-math-nation`}>
                    <By_math_nation />
                </Route>
                <Route path={`${match.path}/by-district`}>
                    <By_district />
                </Route>
                <Route path={`${match.path}/by-others`}>
                    <By_others />
                </Route>
                <Route path={`${match.path}/create`}>
                    <Create />
                </Route>
                <Route path={`${match.path}/edit`}>
                    <Edit />
                </Route>
                <Route path={match.path}>
                    <h3>Please select an option.</h3>
                </Route>
            </Switch>
        </div>
    );
}

function Option() {
    let { id } = useParams();
    return <h3>Requested topic ID: {id}</h3>;
}

/*
https://web.algebranation.com/edgexl
https://web.algebranation.com/edgexl/assignments
https://web.algebranation.com/edgexl/assessments
https://web.algebranation.com/edgexl/assessments/by-me
https://web.algebranation.com/edgexl/assessments/by-math-nation
https://web.algebranation.com/edgexl/assessments/by-district
https://web.algebranation.com/edgexl/assessments/by-others
https://web.algebranation.com/edgexl/assessment/WJX0u0jV
https://web.algebranation.com/edgexl/assessment/create
https://web.algebranation.com/edgexl/assessment/edit/WJX0u0jV/add
https://web.algebranation.com/edgexl/assessment/edit/WJX0u0jV/order
https://web.algebranation.com/edgexl/assessment/edit/WJX0u0jV/options
*/