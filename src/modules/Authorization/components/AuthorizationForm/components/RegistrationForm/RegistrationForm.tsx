import React, { FC, useMemo } from "react";
import { useFormContext } from "react-hook-form";
import FormInput from "../../../../../../components/uiKit/Forms/Inputs/CommonInput/FormInput";
import { IconButton, SolidButton } from "../../../../../../components/uiKit/Button/Button";
import FormPasswordInput from "../../../../../../components/uiKit/Forms/Inputs/PasswordInput/FormPasswordInput";
import GmailIcon from "../../../../../../components/uiKit/Icons/GmailIcon";
import FacebookIcon from "../../../../../../components/uiKit/Icons/FacebookIcon";
import LinkedinIcon from "../../../../../../components/uiKit/Icons/LinkedinIcon";

const RegistrationForm = () => {
    const {
        formState: { isSubmitting, isDirty },
    } = useFormContext();

    return (
        <div className="flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-6">
                <FormInput name="email" label="Email" placeholder="Адрес эл. почты" disabled={isSubmitting} />
                <FormPasswordInput
                    name="password"
                    label="Придумайте пароль"
                    placeholder="Укажите ваш пароль"
                    disabled={isSubmitting}
                />
                <FormPasswordInput
                    name="passwordConfirmation"
                    label="Повторите пароль"
                    placeholder="Повторите ваш пароль"
                    disabled={isSubmitting}
                />
                <SolidButton size="sm" text="Зарегистрироваться" type="submit" disabled={!isDirty} />
            </div>
            <div className="flex items-center gap-x-6">
                <span className="h-px bg-brand-200" />
                <span className="flex-1 w-fit">Или войдите с помощью</span>
                <span className="h-px bg-brand-200" />
            </div>
            <div className="flex">
                <IconButton type="button">
                    <GmailIcon />
                </IconButton>
                <IconButton type="button">
                    <FacebookIcon />
                </IconButton>
                <IconButton type="button">
                    <LinkedinIcon />
                </IconButton>
            </div>
        </div>
    );
};

export default RegistrationForm;
