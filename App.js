import React from "react";
import { Router, Route, browserHistory } from "react-router";
import { createApp, renderApp } from "@phenomic/preset-react-app/lib/client";

import "./defaults.css";

//import Html from "./Html";
import Home from "./src/components/Home";
/*import Wrapper from "./components/Wrapper";
import Home from "./components/Home";
import GettingStarted from "./components/GettingStarted";
import DocPage from "./components/Page/Doc";
import ShowcasePage from "./components/Page/Showcase";
import ShowcaseList from "./components/ShowcaseList";
import PageError from "./components/PageError";
import NewsItem from "./components/News/NewsItem";
import NewsList from "./components/News/NewsList";*/

const routes = () => (
    <Router history={browserHistory}>
            <Route path="/" component={Home} />
    </Router>
);

export default createApp(routes);

if (module.hot) {
    module.hot.accept(() => renderApp(routes));
}

// kill previous website ServiceWorker
if (typeof navigator !== "undefined" && "serviceWorker" in navigator) {
    navigator.serviceWorker.getRegistrations().then(registrations => {
        for (const registration of registrations)
            registration.unregister();
    });
}