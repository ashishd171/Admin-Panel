import React from "react";
import { CgEnter } from "react-icons/cg";
import A from './Style';

const Button = ({
    border,
    color,
    children,
    height,
    onClick,
    radius,
    width,
    padding,
    backgroundColor,
    borderRadius,
    fontSize,
    textTransform,
    fontWeight,
    margin,
    marginTop,
    marginBottom,
    alignSelf,
    float,
    display,
    marginRight,
    marginLeft
}) => {
    return (
        <> 
        <A.Button
            onClick={onClick}
            style={{
                backgroundColor,
                color,
                border,
                borderRadius: radius,
                height,
                width,
                padding,
                backgroundColor,
                borderRadius,
                fontSize,
                textTransform,
                fontWeight,
                margin,
                marginTop,
                marginBottom,
                alignSelf,
                float,
                display,
                marginRight,
                marginLeft
            }}
        >
            {children}
        </A.Button>
       
        </>

    );
}
export default Button;