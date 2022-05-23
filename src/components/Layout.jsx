import React, { useState}  from 'react';
import {Outlet} from "react-router-dom";
import CustomLink from "./CustomLink";
import { ThemeContext, themes } from "../context";

const Layout = () => {
    
    const [currentTheme, setCurrentTheme] = useState(themes.light);
    const toggleTheme = () => {
      setCurrentTheme(prevState => prevState === themes.light ? themes.dark : themes.light);
    }
    return (
        <>
            <ThemeContext.Provider value={currentTheme} >
            <header className='header'>
                <CustomLink className='header_link' to='/'>Home</CustomLink>
                <CustomLink className='header_link' to='/chats'>Chats</CustomLink>
                <CustomLink className='header_link' to='/profile'>Profile</CustomLink>
                <CustomLink className='header_link' to='/counter'>Counter</CustomLink>
            </header>
            <main>
             <Outlet />
             <button onClick={toggleTheme}>изменить тему</button>
             
            </main>
            <footer>
                FOOTER
            </footer>
            </ThemeContext.Provider>
        </>
    );
};

export default Layout;