import React, { forwardRef, useId, useMemo } from "react";
import { InputProps } from "./models";
import FieldError from "../../FieldError/FieldError";

const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            startIcon,
            endIcon,
            label,
            name,
            errorMessage,
            inputClassName = "",
            containerClassName = "",
            value,
            onChange = () => {},
            formRef,
            ...rest
        },
        ref
    ) => {
        const customId = useId();
        const inputIconPadding = `${startIcon ? "pl-10" : ""} ${endIcon ? "pr-10" : ""}`;
        const inputIconPosition = `${label ? "pt-3 top-1/2 -translate-y-1/2" : "top-1/2 -translate-y-1/2"}`;

        const ringClassName = useMemo(() => {
            if (errorMessage) {
                return "outline-error-100 outline outline-2 outline-offset-0 border-transparent focus:border-transparent";
            }

            return "";
        }, [errorMessage]);

        return (
            <div className={`flex flex-col ${containerClassName}`}>
                <div className="w-full flex flex-col relative">
                    <input
                        aria-errormessage={errorMessage}
                        aria-label={label?.toString() || rest.placeholder}
                        aria-disabled={rest.disabled}
                        {...rest}
                        onChange={onChange}
                        value={value}
                        name={name}
                        ref={ref}
                        id={`${name ?? ""}${customId}`}
                        className={`peer w-full order-2 border-inset border border-dark-600 rounded-lg outline-none ${inputIconPadding} text-md px-4 py-3 max-h-10 disabled:text-dark-700 disabled:bg-light-200 disabled:border-light-100 placeholder:text-dark-800 focus:border-2 ${
                            rest.disabled ? "" : "hover:border-brand-400"
                        } focus:border-brand-500 ${ringClassName} ${inputClassName}`}
                    />
                    {startIcon && (
                        <div
                            className={`absolute left-3 w-6 h-6 text-dark-700 peer-focus:text-brand-500 cursor-pointer ${inputIconPosition}`}
                        >
                            {startIcon}
                        </div>
                    )}
                    {endIcon && (
                        <div
                            className={`absolute right-3 w-6 h-6 text-dark-700 peer-focus:text-brand-500 cursor-pointer ${inputIconPosition}`}
                        >
                            {endIcon}
                        </div>
                    )}
                    {label && (
                        <label
                            ref={formRef}
                            htmlFor={`${name ?? ""}${customId}`}
                            className="text-xs font-medium text-dark-800 peer-focus:text-dark-900 order-1 mb-1.5"
                        >
                            {label}
                        </label>
                    )}
                </div>
                {errorMessage && <FieldError name={name} message={errorMessage} className="text-xs order-3 mt-1.5" />}
            </div>
        );
    }
);

export default Input;
