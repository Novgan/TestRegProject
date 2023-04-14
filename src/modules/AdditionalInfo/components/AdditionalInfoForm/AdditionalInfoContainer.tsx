import FormContainer from "../../../../components/uiKit/Forms/FormContainer/FormContainer";
import AdditionalInfoForm from "./AdditionalInfoForm";
import { schema } from "./schema";

const defaultValues = {
    lastName: "",
    firstName: "",
    middleName: "",
    birthday: "",
    sex: "",
    phone: "",
    email: "asdasd",
};

const AdditionalInfoContainer = () => {
    return (
        <div className="flex-[3]">
            <FormContainer schema={schema} onSubmit={() => {}} defaultValues={defaultValues}>
                <AdditionalInfoForm />
            </FormContainer>
        </div>
    );
};

export default AdditionalInfoContainer;
