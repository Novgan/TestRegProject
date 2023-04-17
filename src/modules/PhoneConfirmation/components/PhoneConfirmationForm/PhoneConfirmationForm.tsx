import { useFormContext } from "react-hook-form";
import FormInput from "../../../../components/uiKit/Forms/Inputs/CommonInput/FormInput";
import { SolidButton } from "../../../../components/uiKit/Button/Button";
import BackButton from "./components/BackButton/BackButton";
import SendSmsAgain from "./components/SendSmsAgain/SendSmsAgain";
import { useAppSelector } from "../../../../shared/hooks/redux";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../shared/constants/routes";

const AdditionalInfoForm = () => {
    const { phone } = useAppSelector(({ userReducer }) => userReducer);
    const {
        formState: { isSubmitting, isDirty },
    } = useFormContext();
    const navigate = useNavigate();

    const onBackClickHandler = () => {
        navigate(ROUTES.registration.additionalInfo.route);
    };

    return (
        <>
            <div className="flex justify-center">
                <div className="flex flex-col gap-y-6 max-w-sm">
                    <div className="text-center flex flex-col gap-y-4">
                        <h1 className="font-semibold text-lg">Подтверждение телефона</h1>
                        <p className="text-xs">Мы отправили SMS с 6-значным кодом подтверждения на номер +{phone}</p>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <FormInput name="code" label="SMS-код" placeholder="Укажите код" disabled={isSubmitting} />
                        <SendSmsAgain />
                    </div>
                    <SolidButton size="sm" text="Подтвердить" type="submit" disabled={!isDirty} />
                </div>
            </div>
            <div>
                <BackButton type="button" onClick={onBackClickHandler} className="text-gray-500" />
            </div>
        </>
    );
};

export default AdditionalInfoForm;
