import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <ul>
                <Link to='/api'>
                    <li>API</li>
                </Link>

                <Link to='/'>
                    <li>Dashboard</li>
                </Link>

            </ul>
        </nav>

    )
}

export default Navigation;