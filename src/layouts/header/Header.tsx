import Button from "../../components/microComponents/Button.tsx";
import IconForward from "../../components/microComponents/icons/IconForward.tsx";
import Heading from "../../components/microComponents/Heading.tsx";
import ThemeHandler from "./ThemeHandler.tsx";


const Header = () => {


    return (
        <div className="grid grid-cols-3 items-center p-6">
            <div>
                <Button backgroundColor="transparent" variant="ghost"><IconForward
                    color="var(--primary-color)"/></Button>
            </div>
            <Heading color="var(--primary-color)" size="lg" weight="bold" align="center">
                تراکنش‌ها
            </Heading>
           <ThemeHandler/>

        </div>
    );
};

export default Header;