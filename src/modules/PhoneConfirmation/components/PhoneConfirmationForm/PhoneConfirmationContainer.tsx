import { useNavigate } from "react-router-dom";
import FormContainer from "../../../../components/uiKit/Forms/FormContainer/FormContainer";
import PhoneConfirmationForm from "./PhoneConfirmationForm";
import { schema } from "./schema";
import { PhoneConfirmationFormField } from "./models";

const defaultValues = {
    code: "",
};

const PhoneConfirmationContainer = () => {
    const navigate = useNavigate();

    const submitPhoneConfirmationHandler = (formField: PhoneConfirmationFormField) => {};

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
