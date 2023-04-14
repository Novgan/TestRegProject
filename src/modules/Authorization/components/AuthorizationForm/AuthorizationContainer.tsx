import FormContainer from "../../../../components/uiKit/Forms/FormContainer/FormContainer";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import { schema } from "./schema";
import { Tabs } from "antd";

const { TabPane } = Tabs;

const defaultValues = {
    email: "",
    password: "",
    passwordConfirmation: "",
};

const AuthorizationContainer = () => {
    return (
        <div className="flex-[3] flex justify-center items-center">
            <Tabs className="w-80" popupClassName="bg-brand-400" defaultActiveKey="2">
                <TabPane tab="Вход" key="1" disabled></TabPane>
                <TabPane tab="Регистрация" key="2">
                    <FormContainer schema={schema} onSubmit={() => {}} defaultValues={defaultValues}>
                        <RegistrationForm />
                    </FormContainer>
                </TabPane>
            </Tabs>
        </div>
    );
};

export default AuthorizationContainer;
