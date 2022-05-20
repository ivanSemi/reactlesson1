import React from 'react';
import {Outlet} from "react-router-dom";
import CustomLink from "./CustomLink";

const Layout = () => {
    return (
        <>
            <header className='header'>
                <CustomLink className='header_link' to='/'>Home</CustomLink>
                <CustomLink className='header_link' to='/chats'>Chats</CustomLink>
                <CustomLink className='header_link' to='/profile'>Profile</CustomLink>
            </header>
            <main>
             <Outlet />
            </main>
            <footer>
                FOOTER
            </footer>
        </>
    );
};

export default Layout;