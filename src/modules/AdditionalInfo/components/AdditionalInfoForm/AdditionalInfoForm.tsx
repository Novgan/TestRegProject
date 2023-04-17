import { useFormContext } from "react-hook-form";
import FormInput from "../../../../components/uiKit/Forms/Inputs/CommonInput/FormInput";
import CustomSelect from "../../../../components/uiKit/Forms/Select/Select";
import ExitButton from "./components/ExitButton/ExitButton";
import { SolidButton } from "../../../../components/uiKit/Button/Button";
import { FC } from "react";
import { AdditionalInfoFormProps } from "./models";
import FormSelect from "../../../../components/uiKit/Forms/Select/FormSelect";

const AdditionalInfoForm: FC<AdditionalInfoFormProps> = ({ onLogoutHandler }) => {
    const {
        formState: { isSubmitting, isDirty },
    } = useFormContext();

    return (
        <>
            <div className="flex flex-col gap-y-6">
                <h1 className="text-lg font-semibold">Профиль пользователя</h1>
                <div className="flex gap-x-6">
                    <FormInput
                        name="lastName"
                        label="Фамилия"
                        placeholder="Михайлов"
                        disabled={isSubmitting}
                        containerClassName="flex-1"
                    />
                    <FormInput
                        name="firstName"
                        label="Имя"
                        placeholder="Михаил"
                        disabled={isSubmitting}
                        containerClassName="flex-1"
                    />
                    <FormInput
                        name="middleName"
                        label="Отчество"
                        placeholder="Михайлович"
                        disabled={isSubmitting}
                        containerClassName="flex-1"
                    />
                </div>
                <FormInput name="birthday" label="Дата рождения" placeholder="10/08/1983" disabled={isSubmitting} />
                <div>
                    <FormSelect
                        name="sex"
                        label="Пол"
                        placeholder="Выберите пол"
                        options={[
                            { label: "Мужчина", value: 1 },
                            { label: "Женщина", value: 2 },
                            { label: "Другой", value: 3 },
                        ]}
                    />
                </div>
                <FormInput name="phone" label="Телефон" placeholder="+38 (050) 725 60 09" disabled={isSubmitting} />
                <FormInput name="email" label="E-Mail" disabled />
            </div>
            <div className="flex justify-between">
                <ExitButton type="button" onClick={onLogoutHandler} className="text-gray-500" />
                <SolidButton text="Далее" disabled={!isDirty} />
            </div>
        </>
    );
};

export default AdditionalInfoForm;
