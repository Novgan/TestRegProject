import React, { forwardRef, useId, useMemo, useState } from "react";
import { SelectProps } from "./models";
import FieldError from "../FieldError/FieldError";
import { Select } from "antd";
import ChevronDownIcon from "../../Icons/ChevronDownIcon";

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
        const [rotateSuffix, setRotateSuffix] = useState(false);

        const ringClassName = useMemo(() => {
            if (errorMessage) {
                return "outline-error-100 outline outline-2 outline-offset-0 border-transparent focus:border-transparent";
            }

            return "";
        }, [errorMessage]);

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
                        size={"large"}
                        value={value}
                        suffixIcon={
                            <ChevronDownIcon className={`${rotateSuffix ? "rotate-180" : "rotate-0"} w-6 h-6`} />
                        }
                        onDropdownVisibleChange={setRotateSuffix}
                        id={`${name ?? ""}${customId}`}
                        className={`peer w-full order-2 border-inset border border-dark-600 rounded-lg outline-none text-md max-h-10 disabled:text-dark-700 disabled:bg-dark-100 placeholder:text-dark-800 focus:border-2 hover:border-brand-400 focus:border-brand-500 ${ringClassName} ${inputClassName}`}
                        bordered={false}
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
