import React from "react";
import { CgEnter } from "react-icons/cg";
import A from './Style';


interface Props {
    border: string;
    color: string;
    children?: React.ReactNode;
    height: string;
    onClick: () => void;
    radius: string;
    padding: string;
    width: string;
    backgroundColor: String;
    borderRadius: String;
    fontSize: String;
    textTransform: String;
    fontWeight: String;
    margin: String;
    marginTop: String;
    marginBottom: String;
    alignSelf: String;
    display: String
}
const Button:React.FC<Props> = ({
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
                display
            }}
        >
            {children}
        </A.Button>
    );
}
export default Button;