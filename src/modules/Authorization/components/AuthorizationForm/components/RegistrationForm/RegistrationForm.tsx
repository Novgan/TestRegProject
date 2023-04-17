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
                <SolidButton
                    text="Зарегистрироваться"
                    type="submit"
                    disabled={!isDirty || isSubmitting}
                    isLoading={isSubmitting}
                />
            </div>
            <div className="flex items-center gap-x-6">
                <span className="h-px flex-1 bg-gray-300" />
                <span className="flex-initial text-gray-400">Или войдите с помощью</span>
                <span className="h-px flex-1 bg-gray-300" />
            </div>
            <div className="flex gap-x-3">
                <IconButton className="flex-1 border border-gray-300 rounded-lg" type="button">
                    <GmailIcon />
                </IconButton>
                <IconButton className="flex-1 border border-gray-300 rounded-lg" type="button">
                    <FacebookIcon />
                </IconButton>
                <IconButton className="flex-1 border border-gray-300 rounded-lg" type="button">
                    <LinkedinIcon />
                </IconButton>
            </div>
        </div>
    );
};

export default RegistrationForm;
