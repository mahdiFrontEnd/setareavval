import Button from "../../components/microComponents/Button.tsx";
import {useEffect, useState} from "react";
import Cookies from 'js-cookie';

const ThemeHandler = () => {
    const [darkMode, setDarkMode] = useState(false);


    const toggleTheme = () => {
        const root = document.documentElement;

        if (darkMode) {
            root.classList.remove("dark-theme");
        } else {
            root.classList.add("dark-theme");
        }
        Cookies.set('darkMode', !darkMode,{expires: 1000})
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        const themeValue = Cookies.get('darkMode');
        if(themeValue !== `${darkMode}`){
            toggleTheme()
        }
    }, []);



    return (
        <div className="flex justify-end">
            <Button
                backgroundColor="var(--content-bg)"
                onClick={toggleTheme}
                color="var(--text-color)"
                className="px-6!"
                size="md"
                variant="outline"
                borderColor="var(--primary-color)">
                {darkMode ? "دارک مود" : "لایت مود"}
            </Button>
        </div>
    );
};

export default ThemeHandler;