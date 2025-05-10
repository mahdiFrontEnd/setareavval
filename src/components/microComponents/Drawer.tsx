import React, {useRef, useState} from 'react';
import IconClose from "./icons/IconClose.tsx";
import Button from "./Button.tsx";

type DrawerProps = {
    trigger: React.ReactNode;
    children: React.ReactNode;
};

const Drawer: React.FC<DrawerProps> = ({trigger, children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const drawerRef = useRef<HTMLDivElement | null>(null);
    const startYRef = useRef<number | null>(null);
    const currentYRef = useRef<number>(0);

    const handleTouchStart = (e: React.TouchEvent) => {
        startYRef.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (startYRef.current === null) return;

        const currentY = e.touches[0].clientY;
        const deltaY = currentY - startYRef.current;

        if (deltaY > 0 && drawerRef.current) {
            currentYRef.current = deltaY;//100
            if ("style" in drawerRef.current) {
                drawerRef.current.style.transform = `translateY(${deltaY}px)`;
            }
        }
    };

    const handleTouchEnd = () => {
        const drawer = drawerRef.current;
        if (!drawer) return;

        if (currentYRef.current > 100) {
            setIsOpen(false);
        } else {
            drawer.style.transition = 'transform 0.3s ease';
            drawer.style.transform = 'translateY(0)';
            setTimeout(() => {
                if (drawerRef.current) {
                    if ("style" in drawerRef.current) {
                        drawerRef.current.style.transition = '';
                    }
                }
            }, 300);
        }

        currentYRef.current = 0;
        startYRef.current = null;
    };

    return (
        <>
            <div onClick={() => setIsOpen(true)}>
                {trigger}
            </div>
            {isOpen && (
                <div style={{backgroundColor: "#00000012"}}
                     className="max-w-md m-auto fixed inset-0  backdrop-blur-xs  z-40"
                     onClick={() => setIsOpen(false)}
                />
            )}

            <div
                ref={drawerRef}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                className={`max-w-md m-auto fixed left-0 right-0 bottom-0
                  bg-contentBg rounded-t-2xl shadow-light
                   z-50  px-[20px] py-[18px]
                 transition-transform duration-300 ${
                    isOpen ? 'translate-y-0' : 'translate-y-full'
                } touch-none`}
            >

                <Button variant="ghost" className="absolute top-[16px]  right-[20px]"
                        onClick={() => setIsOpen(false)}><IconClose/></Button>
                <div className="w-[60px] h-1 bg-borderColor rounded mx-auto"/>

                <div className="min-h-[170px]  py-[30px]">
                    {children}
                </div>
                <div className="w-[134px] h-1 bg-gray-400 rounded mx-auto"/>

            </div>
        </>
    );
};

export default Drawer;
