import Drawer from "../../components/microComponents/Drawer.tsx";
import NavigationBarItem from "./NavigationBarItem.tsx";
import {useState} from "react";
import IconFilter from "../../components/microComponents/icons/IconFilter.tsx";

const FilterBox = () => {
    const [selected, setSelected] = useState("1");
    const sortArray = [
        {title: "براساس زمان(تراکنش‌های جدید)", value: "1"},
        {title: "بیشترین مبلغ", value: "2"},
        {title: "کمترین مبلغ", value: "3"},
    ]
    return (
        <div className="flex-1">
            <Drawer trigger={<div className="flex justify-center">
                <NavigationBarItem icon={<IconFilter/>} text="مرتب سازی"/>
            </div>}>
                <p className="text-xs text-center font-regular mb-4">مرتب سازی</p>
                <div>


                    {
                        sortArray.map((item) => (
                            <div key={item.value} className="flex items-center gap-2 mb-4 ">
                                <input type="radio" onChange={(e) => setSelected(e.target.value)} id={item.value}
                                       name="filter" value={item.value}
                                       className="accent-secondaryColor"
                                />
                                <label
                                    className={`mb-1 text-base font-regular ${selected === item.value ? "text-secondaryColor" : ""}`}
                                    htmlFor={item.value}>{item.title}</label>

                            </div>
                        ))
                    }


                </div>
            </Drawer></div>
    );
};


export default FilterBox;