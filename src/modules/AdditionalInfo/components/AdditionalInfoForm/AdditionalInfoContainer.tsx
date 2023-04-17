import { useMemo } from "react";
import FormContainer from "../../../../components/uiKit/Forms/FormContainer/FormContainer";
import { useDisclosure } from "../../../../shared/hooks/useDisclosure";
import AdditionalInfoForm from "./AdditionalInfoForm";
import ExitConfirmationDialog from "./components/ExitConfirmationDialog/ExitConfirmationDialog";
import { schema } from "./schema";
import { useAppDispatch, useAppSelector } from "../../../../shared/hooks/redux";
import { AdditionalInfoFormFields } from "./models";
import { userSlice } from "../../../../store/reducers/UserSlice";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../shared/constants/routes";
import FullPageDialog from "../../../../components/uiKit/Dialog/FullPageDialog";
import CircleMarkIcon from "../../../../components/uiKit/Icons/CircleMarkIcon";
import { OutlineButton, SolidButton } from "../../../../components/uiKit/Button/Button";
import { addAdditionalUserInfo, confirmPhone } from "../../../../api/profile";
import { useMutation } from "react-query";

const AdditionalInfoContainer = () => {
    const { setUserPhone, setUserInfo } = userSlice.actions;
    const { lastName, firstName, middleName, birthday, sex, phone, email } = useAppSelector(
        ({ userReducer }) => userReducer
    );
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { isOpen, onClose, onOpen } = useDisclosure();
    const {
        isOpen: isFullPageDialogOpen,
        onClose: onFullPageDialogClose,
        onOpen: onFullPageDialogOpen,
    } = useDisclosure();

    const { mutateAsync: addUserInfo } = useMutation(addAdditionalUserInfo, {
        onSuccess: query => {
            if (!query.data.status) return;

            dispatch(setUserPhone(query.data.data.phone));
            onFullPageDialogOpen();
        },
    });

    const { mutateAsync: sendSms } = useMutation(confirmPhone, {
        onSuccess: query => {
            if (!query.data.status) return;

            navigate(ROUTES.registration.phoneConfirmation.route);
        },
    });

    const defaultValues = useMemo(
        () => ({
            lastName,
            firstName,
            middleName,
            birthday,
            sex,
            phone,
            email,
        }),
        [birthday, email, firstName, lastName, middleName, phone, sex]
    );

    const submitAdditionalInfoHandler = async (formFields: AdditionalInfoFormFields) => {
        const {
            birthday: formBirthday,
            firstName: formFirstName,
            lastName: formLastName,
            middleName: formMiddleName,
            sex: formSex,
            phone: formPhone,
        } = formFields;

        dispatch(setUserInfo(formFields));

        const modifiedFormData = {
            name: formFirstName,
            lname: formLastName,
            sname: formMiddleName,
            birth_date: formBirthday,
            gender_id: Number(formSex),
            phone: formPhone,
        };

        await addUserInfo(modifiedFormData);
    };

    const verifyPhone = async () => {
        if (!phone) return;

        await sendSms({ phone });
    };

    const onExitHandler = () => {
        navigate(ROUTES.authorization.route);
    };

    return (
        <div className="flex-[3]">
            <FormContainer
                schema={schema}
                onSubmit={submitAdditionalInfoHandler}
                defaultValues={defaultValues}
                className="flex flex-col justify-between h-full pt-12 pb-6 px-6"
            >
                <AdditionalInfoForm onLogoutHandler={onOpen} />
            </FormContainer>
            <ExitConfirmationDialog isOpen={isOpen} onClose={onClose} onSubmit={onExitHandler} />
            <FullPageDialog onClose={onFullPageDialogClose} isOpen={isFullPageDialogOpen}>
                <div className="flex flex-col h-full justify-center items-center gap-y-12">
                    <CircleMarkIcon />
                    <p className="text-center">
                        Новая компания успешно создана и добавлена в базу данных.
                        <br />
                        Пройдите верификацию, чтобы завершить регистрацию компании
                    </p>
                    <div className="flex flex-col gap-y-6">
                        <SolidButton text="Пройти верификацию" onClick={verifyPhone} />
                        <OutlineButton text="Перейти в Профиль Компаний" />
                    </div>
                </div>
            </FullPageDialog>
        </div>
    );
};

export default AdditionalInfoContainer;
