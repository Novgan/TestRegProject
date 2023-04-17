import { act, render, screen } from "@testing-library/react";
import FormContainer from "../FormContainer";
import FormInput from "../../Inputs/CommonInput/FormInput";
import { object, ObjectSchema, string } from "yup";
import { ObjectShape } from "yup/lib/object";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

const MOCKED_DISCLOSURE_ON_CLOSE = vi.fn();
const MOCKED_DISCLOSURE_IS_OPEN = vi.fn();

vi.mock("../../../../../shared/hooks/useDisclosure", () => ({
    useDisclosure() {
        return {
            onClose: MOCKED_DISCLOSURE_ON_CLOSE,
            isOpen: MOCKED_DISCLOSURE_IS_OPEN(),
        };
    },
}));
vi.mock("../../../../../shared/hooks/useBeforeLeaveConfirmation/useBeforeLeaveConfirmation", () => ({
    useBeforeLeaveConfirmation() {
        return {
            leaveConfirmation: vi.fn(),
        };
    },
}));

vi.mock("../../../../../shared/utils/clearQueriesLogout");
vi.mock("../../../../../api/users");

const MOCKED_DEFAULT_VALUES = {
    input: "",
};

const MOCKED_INPUT_NAME = "input";

const DEFAULT_MOCKED_SCHEMA = object().shape({
    input: string(),
});

const DEFAULT_MOCKED_ON_SUBMIT = vi.fn();

const MOCKED_INPUT_PLACEHOLDER = "Placeholder";

const setup = (children: JSX.Element | JSX.Element[], onSubmit: typeof vi.fn, schema: ObjectSchema<ObjectShape>) => {
    render(
        <FormContainer schema={schema} onSubmit={onSubmit} defaultValues={MOCKED_DEFAULT_VALUES}>
            {children}
        </FormContainer>
    );
};

describe("FormContainer component", () => {
    it("Should render component without errors", () => {
        setup(
            <FormInput name={MOCKED_INPUT_NAME} placeholder={MOCKED_INPUT_PLACEHOLDER} />,
            DEFAULT_MOCKED_ON_SUBMIT,
            DEFAULT_MOCKED_SCHEMA
        );

        expect(screen.getByPlaceholderText(MOCKED_INPUT_PLACEHOLDER)).toBeInTheDocument();
    });

    it("Should show validation message on incorrect value in input", async () => {
        const expectedValidationError = "Error";
        const incorrectValue = "Hello";
        setup(
            <>
                <FormInput name={MOCKED_INPUT_NAME} placeholder={MOCKED_INPUT_PLACEHOLDER} />
                <button type="submit">Submit</button>
            </>,
            DEFAULT_MOCKED_ON_SUBMIT,
            object().shape({
                input: string().min(10, expectedValidationError),
            })
        );

        await act(async () => {
            userEvent.paste(screen.getByPlaceholderText(MOCKED_INPUT_PLACEHOLDER), incorrectValue);
        });

        await act(async () => {
            userEvent.click(screen.getByText("Submit"));
        });

        expect(screen.getByText(expectedValidationError)).toBeInTheDocument();
    });

    it("Should call onSubmit when pass validation rules", async () => {
        const validationError = "Error";
        const correctValue = "Hello my pretty form!";
        setup(
            <>
                <FormInput name={MOCKED_INPUT_NAME} placeholder={MOCKED_INPUT_PLACEHOLDER} />
                <button type="submit">Submit</button>
            </>,
            DEFAULT_MOCKED_ON_SUBMIT,
            object().shape({
                input: string().min(10, validationError),
            })
        );

        await act(async () => {
            userEvent.paste(screen.getByPlaceholderText(MOCKED_INPUT_PLACEHOLDER), correctValue);
        });

        await act(async () => {
            userEvent.click(screen.getByText("Submit"));
        });

        expect(screen.queryByText(validationError)).not.toBeInTheDocument();
        expect(DEFAULT_MOCKED_ON_SUBMIT).toHaveBeenCalled();
    });
});
