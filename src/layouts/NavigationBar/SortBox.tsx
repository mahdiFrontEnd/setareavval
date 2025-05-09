import Drawer from "../../components/microComponents/Drawer.tsx";
import NavigationBarItem from "./NavigationBarItem.tsx";
import IconSort from "../../components/microComponents/icons/IconSort.tsx";
import {useState} from "react";

const SortBox = () => {
    const [selected, setSelected] = useState("option1");

    return (
        <div className="flex-1">
        <Drawer trigger={<div className="flex justify-center">
            <NavigationBarItem icon={<IconSort/>} text="مرتب سازی"/>
        </div>}>
            <div className="space-x-4">
                <label className="inline-flex items-center">
                    <input
                        type="radio"
                        name="option"
                        value="option1"
                        checked={selected === "option1"}
                        onChange={() => setSelected("option1")}
                        className="accent-blue-500"
                    />
                    <span className="ml-2">Blue</span>
                </label>

                <label className="inline-flex items-center">
                    <input
                        type="radio"
                        name="option"
                        value="option2"
                        checked={selected === "option2"}
                        onChange={() => setSelected("option2")}
                        className="accent-pink-500"
                    />
                    <span className="ml-2">Pink</span>
                </label>
            </div>
        </Drawer></div>
    );
};

export default SortBox;