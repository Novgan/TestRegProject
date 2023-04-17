import React, { FC } from "react";
import { DialogFooterProps } from "../models";
import { OutlineButton, SolidButton } from "../../Button/Button";

const DialogFooter: FC<DialogFooterProps> = ({
    cancelButtonVariant,
    submitButtonVariant,
    isSubmitButtonDisabled,
    cancelText,
    submitText,
    onCancel,
    onSubmit,
    submitButtonClassName,
    cancelButtonClassName,
    isCancelButtonDisabled,
}) => {
    return (
        <div className="flex flex-col gap-y-3 items-center">
            <SolidButton
                type="button"
                data-testid="submit-dialog-button"
                variant={submitButtonVariant}
                text={submitText}
                onClick={onSubmit}
                className={submitButtonClassName}
                disabled={isSubmitButtonDisabled}
            />
            {cancelText && (
                <OutlineButton
                    type="button"
                    data-testid="cancel-dialog-button"
                    variant={cancelButtonVariant}
                    text={cancelText}
                    onClick={onCancel}
                    className={cancelButtonClassName}
                    disabled={isCancelButtonDisabled}
                />
            )}
        </div>
    );
};

export default DialogFooter;
