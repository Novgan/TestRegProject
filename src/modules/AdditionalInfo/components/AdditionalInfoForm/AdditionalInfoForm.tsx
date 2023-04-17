import { useFormContext } from "react-hook-form";
import FormInput from "../../../../components/uiKit/Forms/Inputs/CommonInput/FormInput";
import ExitButton from "./components/ExitButton/ExitButton";
import { SolidButton } from "../../../../components/uiKit/Button/Button";
import { FC, useEffect } from "react";
import { AdditionalInfoFormProps } from "./models";
import FormSelect from "../../../../components/uiKit/Forms/Select/FormSelect";
import { useAppSelector } from "../../../../shared/hooks/redux";
import { SEX } from "../../../../shared/constants/common";
import { useMutation } from "react-query";
import { confirmPhone } from "../../../../api/profile";
import { ROUTES } from "../../../../shared/constants/routes";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AdditionalInfoForm: FC<AdditionalInfoFormProps> = ({ isFetching, onLogoutHandler }) => {
    const userData = useAppSelector(({ userReducer }) => userReducer);
    const navigate = useNavigate();

    const {
        reset,
        formState: { isSubmitting, isDirty },
    } = useFormContext();

    const { mutateAsync: sendSms } = useMutation(confirmPhone, {
        onSuccess: query => {
            if (!query.data.status) {
                toast.error(query.data.msg);
            } else {
                navigate(ROUTES.registration.phoneConfirmation.route);
            }
        },
    });

    useEffect(() => {
        if (!isFetching) {
            reset(userData);
        }
    }, [isFetching]);

    const verifyPhone = async () => {
        if (!userData.phone) return;

        await sendSms({ phone: userData.phone });
    };

    return (
        <>
            <div className="flex flex-col gap-y-6">
                <h1 className="text-lg font-semibold">Профиль пользователя</h1>
                <div className="flex gap-x-6">
                    <FormInput
                        name="lastName"
                        label="Фамилия"
                        placeholder="Михайлов"
                        disabled={isFetching || isSubmitting}
                        containerClassName="flex-1"
                    />
                    <FormInput
                        name="firstName"
                        label="Имя"
                        placeholder="Михаил"
                        disabled={isFetching || isSubmitting}
                        containerClassName="flex-1"
                    />
                    <FormInput
                        name="middleName"
                        label="Отчество"
                        placeholder="Михайлович"
                        disabled={isFetching || isSubmitting}
                        containerClassName="flex-1"
                    />
                </div>
                <FormInput
                    name="birthday"
                    label="Дата рождения"
                    placeholder="1983/10/08"
                    disabled={isFetching || isSubmitting}
                />
                <div>
                    <FormSelect name="sex" label="Пол" placeholder="Выберите пол" options={SEX} />
                </div>
                <FormInput
                    name="phone"
                    label="Телефон"
                    placeholder="+38 (050) 725 60 09"
                    disabled={isFetching || isSubmitting}
                    endIcon={
                        <div
                            className="pt-[2px] absolute right-0 w-max text-xs text-brand-400 underline"
                            onClick={verifyPhone}
                        >
                            Подтвердить телефон
                        </div>
                    }
                />
                <FormInput name="email" label="E-Mail" disabled />
            </div>
            <div className="flex justify-between">
                <ExitButton type="button" onClick={onLogoutHandler} className="text-gray-500" />
                <SolidButton text="Далее" disabled={!isDirty || isSubmitting} isLoading={isSubmitting} />
            </div>
        </>
    );
};

export default AdditionalInfoForm;
