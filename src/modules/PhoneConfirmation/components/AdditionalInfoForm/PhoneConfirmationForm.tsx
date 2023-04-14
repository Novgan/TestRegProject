import { useFormContext } from "react-hook-form";
import FormInput from "../../../../components/uiKit/Forms/Inputs/CommonInput/FormInput";
import { SolidButton } from "../../../../components/uiKit/Button/Button";

const AdditionalInfoForm = () => {
    const {
        formState: { isSubmitting, isDirty },
    } = useFormContext();

    return (
        <div className="flex justify-center">
            <div className="flex flex-col gap-y-6 max-w-sm">
                <div className="text-center flex flex-col gap-y-4">
                    <h1 className="font-semibold text-lg">Подтверждение телефона</h1>
                    <p className="text-xs">Мы отправили SMS с 6-значным кодом подтверждения на номер +38 (050) 725 60 09</p>
                </div>
                <FormInput name="code" label="SMS-код" placeholder="Укажите код" disabled={isSubmitting} />
                <SolidButton size="sm" text="Подтвердить" type="submit" disabled={!isDirty} />
            </div>
        </div>
    );
};

export default AdditionalInfoForm;
