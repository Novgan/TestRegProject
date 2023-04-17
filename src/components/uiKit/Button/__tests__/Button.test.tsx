import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { IconButton, OutlineButton, SolidButton, TextButton } from "../Button";
import { ButtonProps, IconButtonProps } from "../models";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import CrossIcon from "../../Icons/CrossIcon";

const MOCKED_BUTTON_TEXT = "Hello button!";

const setupOutline = (props?: ButtonProps) => {
    return render(<OutlineButton {...props} text={MOCKED_BUTTON_TEXT} />);
};

const setupSolid = (props?: ButtonProps) => {
    return render(<SolidButton {...props} text={MOCKED_BUTTON_TEXT} />);
};

const setupText = (props?: ButtonProps) => {
    return render(<TextButton {...props} text={MOCKED_BUTTON_TEXT} />);
};

const setupIcon = (props?: Partial<IconButtonProps>) => {
    return render(
        <IconButton {...props}>
            <CrossIcon data-testid="icon-for-icon-button" />
        </IconButton>
    );
};

describe("Button component", () => {
    describe("BaseButton", () => {
        it("Should render disabled button", () => {
            setupOutline({ disabled: true });

            expect(screen.getByRole("button", { name: MOCKED_BUTTON_TEXT })).toBeInTheDocument();
            expect(screen.getByRole("button", { name: MOCKED_BUTTON_TEXT })).toBeDisabled();
        });

        it("Should render disabled button", () => {
            setupOutline({ disabled: true });

            expect(screen.getByRole("button", { name: MOCKED_BUTTON_TEXT })).toBeInTheDocument();
            expect(screen.getByRole("button", { name: MOCKED_BUTTON_TEXT })).toBeDisabled();
        });

        it("Should call onClick handler when user click on button", () => {
            const mockedOnClick = vi.fn();
            setupOutline({ onClick: mockedOnClick });

            userEvent.click(screen.getByRole("button"));
            expect(mockedOnClick).toHaveBeenCalled();
        });

        it("Should render startIcon", () => {
            setupOutline({ startIcon: <CrossIcon className="w-4 h-4" data-testid="start-icon" /> });

            expect(screen.getByRole("button")).toBeInTheDocument();
            expect(screen.getByTestId("start-icon")).toBeInTheDocument();
        });

        it("Should render endIcon", () => {
            setupOutline({ endIcon: <CrossIcon className="w-4 h-4" data-testid="end-icon" /> });

            expect(screen.getByRole("button")).toBeInTheDocument();
            expect(screen.getByTestId("end-icon")).toBeInTheDocument();
        });
    });
});
