import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav data-testid="navbar">
            <ul>
                <li>
                    <Link to="/assignments">Assignments</Link>
                    {/* <div><h1>Assignments</h1></div> */}
                </li>
                <li>
                    <Link to="/assessments">Assessments</Link>
                    {/* <div><h1>Assessments</h1></div> */}
                </li>
            </ul>
        </nav>
    );
}