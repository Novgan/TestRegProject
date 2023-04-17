import { forwardRef } from "react";
import { ButtonProps, IconButtonProps } from "./models";
import LoadingIcon from "../Icons/LoadingIcon";

const BaseButton = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ startIcon, endIcon, text, className = "", isLoading, ...rest }, ref) => {
        return (
            <button
                aria-label={text?.toString()}
                aria-disabled={rest.disabled}
                {...rest}
                ref={ref}
                className={`${className} px-6 text-xs font-semibold h-10 rounded-[20px] cursor-pointer disabled:cursor-not-allowed transition-all ease-in-out flex items-center justify-center`}
            >
                {isLoading ? (
                    <span className="mr-2">
                        <LoadingIcon className="animate-spin w-5 h-5" />
                    </span>
                ) : (
                    startIcon && <span className="mr-2">{startIcon}</span>
                )}
                {text}
                {endIcon && <span className="ml-2">{endIcon}</span>}
            </button>
        );
    }
);

export const OutlineButton = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ isLoading, className = "", ...rest }, ref) => {
        return (
            <BaseButton
                {...rest}
                ref={ref}
                isLoading={isLoading}
                className={`${className} ${
                    isLoading
                        ? "!text-gray-400 border-gray-200 cursor-not-allowed"
                        : "focus:bg-brand-600 focus:text-white focus:border-transparent hover:bg-brand-500 hover:text-white hover:border-transparent"
                } border-2 border-brand-400 text-brand-400 disabled:bg-transparent disabled:text-gray-400 disabled:border-gray-200`}
            />
        );
    }
);

export const SolidButton = forwardRef<HTMLButtonElement, ButtonProps>(({ isLoading, className = "", ...rest }, ref) => {
    return (
        <BaseButton
            {...rest}
            isLoading={isLoading}
            className={`${className} ${
                isLoading
                    ? "!text-gray-400 border-gray-200 cursor-not-allowed !bg-brand-100"
                    : "focus:bg-brand-600 focus:text-white focus:border-transparent hover:bg-brand-500 hover:text-white hover:border-transparent"
            } bg-brand-400 text-white disabled:bg-brand-100 disabled:text-gray-400`}
            ref={ref}
        />
    );
});

export const TextButton = forwardRef<HTMLButtonElement, ButtonProps>(({ className = "", ...rest }, ref) => {
    return (
        <BaseButton
            {...rest}
            ref={ref}
            className={`${className} text-blue-400 disabled:text-blue-200 hover:bg-blue-50`}
        />
    );
});

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
    ({ className = "", children, ...rest }, ref) => {
        {
            return (
                <button
                    aria-disabled={rest.disabled}
                    {...rest}
                    className={`${className} px-3 p-2 text-blue-500 disabled:text-blue-200 hover:bg-blue-200 transition-colors ease-in-out flex items-center justify-center`}
                    ref={ref}
                >
                    {children}
                </button>
            );
        }
    }
);
