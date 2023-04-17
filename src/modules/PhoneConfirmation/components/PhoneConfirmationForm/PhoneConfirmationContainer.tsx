import FormContainer from "../../../../components/uiKit/Forms/FormContainer/FormContainer";
import PhoneConfirmationForm from "./PhoneConfirmationForm";
import { schema } from "./schema";

const defaultValues = {
    code: "",
};

const PhoneConfirmationContainer = () => {
    const submitPhoneConfirmationHandler = () => {};

    return (
        <div className="flex-[3]">
            <FormContainer
                schema={schema}
                onSubmit={submitPhoneConfirmationHandler}
                defaultValues={defaultValues}
                className="flex flex-col justify-between h-full pt-24 pb-6 px-6"
            >
                <PhoneConfirmationForm />
            </FormContainer>
        </div>
    );
};

export default PhoneConfirmationContainer;
