import React from "react";
import { CgEnter } from "react-icons/cg";
import A from './style'
import { RiDeleteBin5Line } from "react-icons/ri";


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
    display
}) => {
    return (
        <A.DeleteButton
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
                display
            }}
        > <RiDeleteBin5Line />
            {children}
        </A.DeleteButton>
    );
}
export default Button;