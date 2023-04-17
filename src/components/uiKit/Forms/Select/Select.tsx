import React, { forwardRef, useId, useMemo } from "react";
import { SelectProps } from "./models";
import FieldError from "../FieldError/FieldError";
import { Select } from "antd";

const { Option } = Select;

const CustomSelect = forwardRef<HTMLInputElement, SelectProps>(
    (
        {
            label,
            name,
            options,
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

        const ringClassName = useMemo(() => {
            const classNames = [];

            if (errorMessage) {
                return "outline-error-100 outline outline-2 outline-offset-0 border-transparent focus:border-transparent";
            }

            if (value) {
                classNames.push(
                    "outline",
                    "outline-offset-0",
                    "outline-brand-200",
                    "border-transparent",
                    "focus:border-transparent"
                );
            }

            return classNames.join(" ");
        }, [errorMessage, value]);

        return (
            <div className={`flex flex-col ${containerClassName}`}>
                <div className="w-full flex flex-col relative">
                    {label && (
                        <label
                            ref={formRef}
                            htmlFor={`${name ?? ""}${customId}`}
                            className="text-xs font-medium text-dark-800 peer-focus:text-dark-900 mb-1.5"
                        >
                            {label}
                        </label>
                    )}
                    <Select
                        aria-errormessage={errorMessage}
                        aria-label={label?.toString() || rest.placeholder}
                        aria-disabled={rest.disabled}
                        {...rest}
                        onChange={onChange}
                        id={`${name ?? ""}${customId}`}
                        className={`peer w-full border-inset border border-dark-600 rounded-lg outline-none text-md max-h-10 disabled:text-dark-700 disabled:bg-dark-100 placeholder:text-dark-800 focus:border-dark-900 ${ringClassName} ${inputClassName}`}
                    >
                        {options.map(({ label: optionLabel, value: optionValue }) => (
                            <Option key={optionValue} value={optionValue}>
                                {optionLabel}
                            </Option>
                        ))}
                    </Select>
                </div>
                {errorMessage && <FieldError name={name} message={errorMessage} className="text-xs mt-1.5" />}
            </div>
        );
    }
);

export default CustomSelect;
