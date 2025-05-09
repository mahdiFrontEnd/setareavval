import Button from "../../components/microComponents/Button.tsx";
import {useState} from "react";

const ThemeHandler = () => {
    const [darkMode, setDarkMode] = useState(false);


    const toggleTheme = () => {
        const root = document.documentElement;

        if (darkMode) {
            root.classList.remove("dark-theme");
        } else {
            root.classList.add("dark-theme");
        }

        setDarkMode(!darkMode);
    };


    return (
        <div className="flex justify-end">
            <Button
                onClick={toggleTheme}
                backgroundColor="white"
                color="var(--text-color)"
                className="px-6!"
                size="md"
                variant="outline"
                borderColor="var(--primery-color)">
                {darkMode ? "دارک مود" : "لایت مود"}
            </Button>
        </div>
    );
};

export default ThemeHandler;