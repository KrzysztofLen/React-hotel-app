import React from 'react';
import {Link} from "react-router-dom";

const NoMatch = () => (
    <div className={"noMatch"}>
        <h1 className={"noMatch__header"}>404</h1>
        <h2 className={"noMatch__subHeader"}>Oops! page not found</h2>
        <Link to={"/"} className={"button is-primary"}>Home</Link>
    </div>
);

export default NoMatch;

