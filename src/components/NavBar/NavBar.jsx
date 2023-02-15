import React from "react";
import { Link } from "react-router-dom";
import "./style/navbar.css";

export default function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link className="nav-links" to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link className="nav-links" to="products">
                        Products
                    </Link>
                </li>
                <li>
                    <Link className="nav-links" to="contact">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
