import React  from 'react';

type NavigationBarItemPropsType = {
    icon: React.ReactElement;
    text: string
};


const NavigationBarItem = ({icon, text}:NavigationBarItemPropsType) => {
    return (
        <div className="flex justify-center items-center  gap-2">
            {icon}
            <span className="text-sm">{text}</span>
        </div>
    );
};

export default NavigationBarItem;