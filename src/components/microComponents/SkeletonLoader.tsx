import React from 'react';
import Card from "./Card.tsx";

interface SkeletonLoaderProps {
    width?: string;
    height?: string;
    rounded?: string;
    className?: string;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
                                                           width = 'w-full',
                                                           height = 'h-4',
                                                           rounded = 'rounded-md',
                                                           className = '',
                                                       }) => {
    const arr = Array.from({ length: 11 }, (_, i) => i + 1);

    return (

        <>
            {arr.map((item) => (
                <Card key={item}>
                    <div className={`bg-gray-200 animate-pulse ${width} ${height} ${rounded} ${className}`}/>
                </Card>
            ))
            }

        </>
    )
        ;
};

export default SkeletonLoader;
