import React, {Suspense} from 'react';
import "./styles/global.scss"
import {Link, Route, Routes} from "react-router-dom";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {PageNamespace} from "./pages/types/PageNamespace";

const App = () => {
    return (
        <div className="app">
            <Link to={PageNamespace.MAIN}>Главная</Link>
            <Link to={PageNamespace.ABOUT}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={PageNamespace.ABOUT} element={<AboutPageAsync/>}/>
                    <Route path={PageNamespace.MAIN} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;