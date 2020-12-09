import React from "react";
import DarkModeToggle from "react-dark-mode-toggle";
// import useDarkMode from 'use-dark-mode'

export default () => {
    // const darkMode = useDarkMode(false);
    return (
        <DarkModeToggle
            className='switch'
            // onChange={darkMode.toggle}
            // checked={darkMode.value}
            size={55}
        />
    );
};