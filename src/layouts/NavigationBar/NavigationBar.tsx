import SortBox from "./SortBox.tsx";
import FilterBox from "./FilterBox.tsx";

const NavigationBar = () => {
    return (
        <div className="bg-white">
            <div className="bg-blue-50 px-4 rounded-t-3xl">
                {/*<div className="grid grid-cols-2 items-center py-[19px] ">*/}


                <div className="flex items-center space-x-4 py-[19px]">
                    <FilterBox/>
                    <div className="w-px h-8 bg-gray-400"/>


                    <SortBox/>
                </div>


                <div className="flex justify-center">
                    <div className="w-[134px] h-[5px] mb-[9px] bg-gray-500 rounded"></div>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;