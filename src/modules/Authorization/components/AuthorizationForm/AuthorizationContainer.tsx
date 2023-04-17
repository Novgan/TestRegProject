import FormContainer from "../../../../components/uiKit/Forms/FormContainer/FormContainer";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import { LoginFormFields } from "./models";
import { schema } from "./schema";
import { Tabs } from "antd";
import { useMutation } from "react-query";
import { registerUser } from "../../../../api/profile";
import { useDisclosure } from "../../../../shared/hooks/useDisclosure";
import FullPageDialog from "../../../../components/uiKit/Dialog/FullPageDialog";
import CircleMarkIcon from "../../../../components/uiKit/Icons/CircleMarkIcon";
import { MD5 } from "crypto-js";
import { ROUTES } from "../../../../shared/constants/routes";
import { toast } from "react-toastify";

const { TabPane } = Tabs;

const defaultValues = {
    email: "",
    password: "",
    passwordConfirmation: "",
};

const redirectRef = (queryParams: string) =>
    `${ROUTES.entry.route}${ROUTES.registration.additionalInfo.route}?${queryParams}`;

const AuthorizationContainer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { mutateAsync: register } = useMutation(registerUser, {
        onSuccess: query => {
            if (!query.data.status) {
                toast.error(query.data.msg);
            } else {
                onOpen();
            }
        },
    });

    const onSubmitFormHandler = async ({ email, password, passwordConfirmation }: LoginFormFields) => {
        if (password !== passwordConfirmation) return;

        const hashedPassword = MD5(password).toString();
        await register({
            email,
            password: hashedPassword,
            ref: redirectRef(`email=${email}&password=${hashedPassword}`),
        });
    };

    return (
        <div className="flex-[3] flex justify-center items-center">
            <Tabs className="w-80" defaultActiveKey="2">
                <TabPane tab="Вход" key="1" disabled></TabPane>
                <TabPane tab="Регистрация" key="2">
                    <FormContainer schema={schema} onSubmit={onSubmitFormHandler} defaultValues={defaultValues}>
                        <RegistrationForm />
                    </FormContainer>
                </TabPane>
            </Tabs>
            <FullPageDialog onClose={onClose} isOpen={isOpen}>
                <div className="flex flex-col h-full justify-center items-center gap-y-12">
                    <CircleMarkIcon />
                    <p className="text-center">
                        Аккаунт был успешно зарегистрирован.
                        <br />
                        На ваш E-Mail отправлено письмо с ссылкой для подтверждения
                    </p>
                </div>
            </FullPageDialog>
        </div>
    );
};

export default AuthorizationContainer;
