import styled, { css } from 'styled-components';
import React from 'react';

type HeadingSize = 'md' | 'lg' | 'xl';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    color?: string;
    align?: 'center' | 'right' | 'left';
    weight?: string | number;
    size?: HeadingSize;
    children: React.ReactNode;
}

const sizeValues: Record<HeadingSize, ReturnType<typeof css>> = {
    md: css`font-size: 14px;`,
    lg: css`font-size: 16px;`,
    xl: css`font-size: 18px;`,
};

const StyledHeading = styled.h1<HeadingProps>`
    ${({ size = 'md' }) => sizeValues[size]};
    color: ${({ color = '#5439AC' }) => color};
    font-weight: ${({ weight = 'bold' }) => weight};
    text-align: ${({ align = 'right' }) => align};
`;

const Heading: React.FC<HeadingProps> = ({
                                             children,
                                             color,
                                             size = 'md',
                                             weight,
                                             align,
                                             ...props
                                         }) => {
    return (
        <StyledHeading
            color={color}
            size={size}
            weight={weight}
            align={align}
            {...props}
        >
            {children}
        </StyledHeading>
    );
};

export default Heading;
