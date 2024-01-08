import React, {Suspense, useState} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {PageNamespace} from "./pages/types/PageNamespace";

import "./styles/index.scss"
import {useTheme} from "./styles/themes/context/ThemeContext";
import classNames from "./helpers/classNames/classNames";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
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