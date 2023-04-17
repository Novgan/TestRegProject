import { describe, it, expect, vi } from 'vitest';
import { render, screen } from "@testing-library/react";
import Dialog from "../Dialog";
import userEvent from "@testing-library/user-event";

const MOCKED_ON_SUBMIT = vi.fn();
const MOCKED_ON_CLOSE = vi.fn();
const MOCKED_ON_CANCEL = vi.fn();

const MOCKED_TITLE = "Modal title";
const MOCKED_SUBMIT_TEXT = "Submit";
const MOCKED_CANCEL_TEXT = "Cancel";
const MOCKED_CHILDREN_TEXT = "Hello children";
const MOCKED_CHILDREN = <p>{MOCKED_CHILDREN_TEXT}</p>;

const setup = (isOpen = true, couldCloseOnBackdrop = false) => {
    render(
        <Dialog
            isOpen={isOpen}
            onSubmit={MOCKED_ON_SUBMIT}
            onClose={MOCKED_ON_CLOSE}
            onCancel={MOCKED_ON_CANCEL}
            title={MOCKED_TITLE}
            submitText={MOCKED_SUBMIT_TEXT}
            cancelText={MOCKED_CANCEL_TEXT}
            couldCloseOnBackdrop={couldCloseOnBackdrop}
        >
            {MOCKED_CHILDREN}
        </Dialog>
    );
};

describe("Dialog component", () => {
    it("Should render component without errors", () => {
        setup();

        expect(screen.getByText(MOCKED_TITLE)).toBeInTheDocument();
        expect(screen.getByText(MOCKED_CANCEL_TEXT)).toBeInTheDocument();
        expect(screen.getByText(MOCKED_SUBMIT_TEXT)).toBeInTheDocument();
        expect(screen.getByText(MOCKED_CHILDREN_TEXT)).toBeInTheDocument();
    });

    // it("Should call onClose callback on click on close icon", () => {
    //     setup();

    //     userEvent.click(screen.getByTestId("close-dialog-button"));

    //     expect(MOCKED_ON_CLOSE).toHaveBeenCalled();
    // });

    // it("Should call onCancel callback on click on cancel button", () => {
    //     setup();

    //     userEvent.click(screen.getByText(MOCKED_CANCEL_TEXT));

    //     expect(MOCKED_ON_CANCEL).toHaveBeenCalled();
    // });

    // it("Should call onSubmit callback on click on submit button", () => {
    //     setup();

    //     userEvent.click(screen.getByText(MOCKED_SUBMIT_TEXT));

    //     expect(MOCKED_ON_SUBMIT).toHaveBeenCalled();
    // });

    // it("Should not render dialog if isOpen prop is false", () => {
    //     setup(false);

    //     expect(screen.queryByText(MOCKED_TITLE)).not.toBeInTheDocument();
    // });

    // it("Should close dialog on click on backdrop if prop was provided", () => {
    //     setup(true, true);

    //     expect(screen.getByTestId("dialog-inner-container")).toBeInTheDocument();
    //     userEvent.click(screen.getByTestId("dialog-container"));

    //     expect(screen.getByTestId("dialog-inner-container")).toBeInTheDocument();
    // });
});
