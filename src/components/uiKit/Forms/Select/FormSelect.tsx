import React, { FC, useCallback } from "react";
import { FormSelectProps } from "./models";
import { Controller, useFormContext } from "react-hook-form";
import CustomSelect from "./Select";

const FormSelect: FC<FormSelectProps> = ({ name, onChange, defaultValue, ...rest }) => {
    const { control } = useFormContext();

    const onFieldChange = useCallback(
        (controllerCallback: (...event: unknown[]) => void) => {
            return (value: string | number) => {
                controllerCallback(value);
            };
        },
        [onChange]
    );

    return (
        <Controller
            control={control}
            name={name}
            defaultValue={defaultValue}
            render={({
                field: { ref, onChange: onFormFieldChange, onBlur, name: controllerName, value },
                fieldState: { error },
            }) => (
                <CustomSelect
                    {...rest}
                    value={value}
                    name={controllerName}
                    onBlur={onBlur}
                    onChange={onFieldChange(onFormFieldChange)}
                    errorMessage={error?.message}
                    formRef={ref}
                />
            )}
        />
    );
};

export default FormSelect;
