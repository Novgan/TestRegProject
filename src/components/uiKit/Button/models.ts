import { MouseEventHandler } from "react";

export interface ButtonProps {
    className?: string;
    type?: "submit" | "reset" | "button";
    disabled?: boolean;
    text?: string | number;
    startIcon?: JSX.Element;
    endIcon?: JSX.Element;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    isLoading?: boolean;
}

export interface IconButtonProps extends Omit<ButtonProps, "text" | "startIcon" | "endIcon"> {
    children: JSX.Element;
}
