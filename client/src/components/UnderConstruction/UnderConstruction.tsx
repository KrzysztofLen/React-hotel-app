import React from 'react';
import {Link} from "react-router-dom";

const UnderConstruction = () => (
    <div className={"underConstruction"}>
        <h1 className={"underConstruction__header"}>Under Construction</h1>
        <h2 className={"underConstruction__subHeader"}>Content will be available soon</h2>
        <Link to={"/"} className={"button is-primary"}>Home</Link>
    </div>
);

export default UnderConstruction;

