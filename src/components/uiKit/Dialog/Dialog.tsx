import React, { FC } from "react";
import { DialogProps } from "./models";
import DialogHeader from "./components/DialogHeader";
import DialogFooter from "./components/DialogFooter";
import DialogContainer from "./components/DialogContainer";
import DialogBackdrop from "./components/DialogBackdrop";

const Dialog: FC<DialogProps> = ({
    title,
    onClose,
    submitButtonVariant = "primary",
    isSubmitButtonDisabled = false,
    isCancelButtonDisabled = false,
    cancelButtonVariant = "primary",
    submitText,
    cancelText,
    containerClass,
    childContainerClass = "",
    isOpen,
    onCancel,
    onSubmit,
    children,
    couldCloseOnBackdrop,
}) => {
    if (!isOpen) return null;

    return (
        <>
            <DialogContainer className={containerClass} onClose={onClose} couldCloseOnBackdrop={couldCloseOnBackdrop}>
                <DialogHeader title={title} onClose={onClose} />
                <div
                    className={`relative flex-auto mb-10 text-sm leading-[1.375rem] overflow-y-auto ${childContainerClass}`}
                >
                    {children}
                </div>
                <DialogFooter
                    cancelText={cancelText}
                    submitText={submitText}
                    isSubmitButtonDisabled={isSubmitButtonDisabled}
                    isCancelButtonDisabled={isCancelButtonDisabled}
                    cancelButtonVariant={cancelButtonVariant}
                    submitButtonVariant={submitButtonVariant}
                    onSubmit={onSubmit}
                    onCancel={onCancel}
                />
            </DialogContainer>
            <DialogBackdrop />
        </>
    );
};

export default Dialog;
