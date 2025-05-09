import styled, { css } from 'styled-components';
import React from 'react';

type Variant = 'solid' | 'outline' | 'ghost' | 'full';
type Radius = 'full' | 'xs' | 'sm' | 'md' | 'lg';
type Size = 'md' | 'lg' | 'xxl';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
    size?: Size;
    radius?: Radius;
    children: React.ReactNode;
}

interface StyledProps {
    $color?: string;
    $backgroundColor?: string;
    $borderColor?: string;
    variant?: Variant;
    size?: Size;
    radius?: Radius;
}

const variants = {
    solid: css<StyledProps>`
        color: white;
        border: none;
    `,
    outline: css<StyledProps>`
        color: ${({ $color }) => $color};
        border: 1px solid ${({ $borderColor }) => $borderColor};
    `,
    ghost: css<StyledProps>`
        color: ${({ $color }) => $color};
        border: none;
        background-color: transparent;
    `,
    full: css<StyledProps>`
        color: ${({ $color }) => $color};
        border: none;
        width: 100%;
    `,
};

const radiusValues = {
    xs: css`border-radius: 3px;`,
    sm: css`border-radius: 0.5rem;`,
    md: css`border-radius: 1rem;`,
    lg: css`border-radius: 2rem;`,
    full: css`border-radius: 100rem;`,
};

const sizeValues = {
    md: css`
        font-size: 10px;
        padding: 4px 12px;
    `,
    lg: css`
        font-size: 14px;
        padding: 2px 12px;
    `,
    xxl: css`
        font-size: 18px;
        padding: 10.5px 24px;
    `,
};

const ButtonStyled = styled.button<StyledProps>`
    cursor: pointer;
    transition: all 0.3s ease;
    background-color: ${({ $backgroundColor = 'white' }) => $backgroundColor};

    ${({ radius = 'full' }) => radiusValues[radius]};
    ${({ variant = 'solid' }) => variants[variant]};
    ${({ size = 'md' }) => sizeValues[size]};

    &:hover {
        opacity: 0.9;
    }
`;

const Button: React.FC<ButtonProps> = ({
                                           children,
                                           variant = 'solid',
                                           color = 'var(--text-color)',
                                           backgroundColor = 'white',
                                           borderColor = 'var(--text-color)',
                                           size = 'md',
                                           radius = 'full',
                                           ...props
                                       }) => {
    return (
        <ButtonStyled
            $color={color}
            $backgroundColor={backgroundColor}
            $borderColor={borderColor}
            variant={variant}
            size={size}
            radius={radius}
            {...props}
        >
            {children}
        </ButtonStyled>
    );
};

export default Button;
