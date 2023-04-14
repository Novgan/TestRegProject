import { useFormContext } from "react-hook-form";
import FormInput from "../../../../components/uiKit/Forms/Inputs/CommonInput/FormInput";
import { Select } from "antd";
import CustomSelect from "../../../../components/uiKit/Forms/Select/Select";

const { Option } = Select;

const AdditionalInfoForm = () => {
    const {
        formState: { isSubmitting, isDirty },
    } = useFormContext();

    return (
        <div className="flex flex-col gap-y-6">
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
                <CustomSelect
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
            <FormInput name="email" label="E-Mail" placeholder="asd" disabled />
        </div>
    );
};

export default AdditionalInfoForm;
