import React from "react";
import { Link } from "react-router-dom";
import "./style/index.css";

export default function Home() {
    return (
        <>
            <header>
                <h1>Welcome!</h1>
            </header>
            <main>
                <Link to="products">
                    Click here to take a look on our products
                </Link>
            </main>
        </>
    );
}
