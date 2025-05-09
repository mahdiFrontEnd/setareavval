import Drawer from "../../components/microComponents/Drawer.tsx";
import NavigationBarItem from "./NavigationBarItem.tsx";
import {useState} from "react";
import IconFilter from "../../components/microComponents/icons/IconFilter.tsx";

const FilterBox = () => {
    const [selected, setSelected] = useState("option1");

    return (
        <div className="flex-1">
            <Drawer trigger={<div className="flex justify-center">
                <NavigationBarItem icon={<IconFilter/>} text="فیلتر"/>
            </div>}>
                <div className="space-x-4">
                    <label className="inline-flex items-center">
                        <input
                            type="radio"
                            name="option"
                            value="option1"
                            checked={true}
                            onChange={() => setSelected("option1")}
                            className="accent-blue-500"
                        />
                        <span className="ml-2">براساس زمان(تراکنش‌های جدید)</span>
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
                        <span className="ml-2">بیشترین مبلغ</span>
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
                        <span className="ml-2">کمترین مبلغ</span>
                    </label>
                </div>
            </Drawer></div>
    );
};


export default FilterBox;