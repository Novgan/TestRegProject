import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { FormContainerProps } from "./models";
import defaultResolver from "./resolver/defaultResolver";

const FormContainer = <T extends FieldValues>({
    mode = "onSubmit",
    children,
    schema,
    defaultValues,
    className = "",
    onSubmit,
    autoComplete = "off",
}: FormContainerProps<T>) => {
    const methods = useForm<T>({
        resolver: defaultResolver(schema),
        mode,
        defaultValues,
    });
    const { handleSubmit } = methods;

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className={className} autoComplete={autoComplete}>
                {children}
            </form>
        </FormProvider>
    );
};

export default FormContainer;
