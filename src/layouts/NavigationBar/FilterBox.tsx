import Drawer from "../../components/microComponents/Drawer.tsx";
import NavigationBarItem from "./NavigationBarItem.tsx";
import IconFilter from "../../components/microComponents/icons/IconFilter.tsx";
import IconSuccess from "../../components/microComponents/icons/IconSuccess.tsx";
import IconError from "../../components/microComponents/icons/IconError.tsx";

const FilterBox = () => {
    const filterArray = [
        {title: "موفق", value: "true"},
        {title: "ناموفق", value: "false"}
    ]
    return (
        <div className="flex-1">
            <Drawer trigger={<div className="flex justify-center">
                <NavigationBarItem icon={<IconFilter/>} text="فیلتر"/>
            </div>}>
                <p className="text-xs text-center font-regular mb-4">فیلتر‌ها</p>
                <p className="text-sm font-regular mb-4">نوع تراکنش:</p>
                <div className="flex items-center gap-3 ">


                    {
                        filterArray.map((item) => (
                            <div key={item.value}
                                 className="flex items-center justify-center gap-2 text-xs font-regular
                                     border-borderColor border  rounded-xl px-6 py-3">
                                {item.value === "true" ?
                                    <IconSuccess/>
                                    : <IconError/>}
                                <span>{item.title}</span>
                            </div>
                        ))
                    }


                </div>
            </Drawer></div>
    );
};


export default FilterBox;