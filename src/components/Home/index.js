import React from "react";
import { createContainer } from "@phenomic/preset-react-app/lib/client";

const Home = () => (
    <div>
        <p>This is a homepage</p>
    </div>
);


export default createContainer(Home);