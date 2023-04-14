import FormContainer from "../../../../components/uiKit/Forms/FormContainer/FormContainer";
import PhoneConfirmationForm from "./PhoneConfirmationForm";
import { schema } from "./schema";

const defaultValues = {
    code: "",
};

const PhoneConfirmationContainer = () => {
    return (
        <div className="flex-[3]">
            <FormContainer schema={schema} onSubmit={() => {}} defaultValues={defaultValues}>
                <PhoneConfirmationForm />
            </FormContainer>
        </div>
    );
};

export default PhoneConfirmationContainer;
