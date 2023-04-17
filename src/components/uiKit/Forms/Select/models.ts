import { ChangeEventHandler, FocusEventHandler, MouseEventHandler, ReactNode } from "react";
import { RefCallBack } from "react-hook-form";

export interface SelectProps {
    options: Array<{ value: string | number; label: string }>;
    value?: string;
    name?: string;
    label?: string | ReactNode;
    errorMessage?: string;
    disabled?: boolean;
    placeholder?: string;
    inputClassName?: string;
    containerClassName?: string;
    accept?: string;
    autoFocus?: boolean;
    maxLength?: number;
    isFilter?: boolean;
    onClick?: MouseEventHandler<HTMLInputElement>;
    onChange?: (value: string | number) => void;
    onBlur?: FocusEventHandler<HTMLInputElement>;
    formRef?: RefCallBack;
}

export interface FormSelectProps extends Omit<SelectProps, "name" | "errorMessage"> {
    defaultValue?: string;
    name: string;
}
