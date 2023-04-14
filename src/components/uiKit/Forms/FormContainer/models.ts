import { DefaultValues, SubmitHandler, FieldValues, ResolverResult } from "react-hook-form";
import ObjectSchema, { ObjectShape } from "yup/lib/object";

export type FormContainerProps<T extends FieldValues> = {
    children: JSX.Element | JSX.Element[];
    className?: string;
    schema: ObjectSchema<ObjectShape>;
    defaultValues: DefaultValues<T>;
    mode?: "onBlur" | "onChange" | "onSubmit" | "onTouched" | "all";
    onSubmit: SubmitHandler<T>;
    autoComplete?: "on" | "off";
};
