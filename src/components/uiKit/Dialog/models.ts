import React, { ReactNode } from "react";

export interface DialogProps {
    isOpen: boolean;
    title?: ReactNode;
    children?: JSX.Element | React.ReactFragment;
    cancelText?: string;
    submitText?: string;
    isCancelButtonDisabled?: boolean;
    isSubmitButtonDisabled?: boolean;
    submitButtonClassName?: string;
    cancelButtonClassName?: string;
    containerClass?: string;
    childContainerClass?: string;
    couldCloseOnBackdrop?: boolean;
    onClose: () => void;
    onCancel?: () => void;
    onSubmit: () => void;
}

export interface DialogContainerProps extends Pick<DialogProps, "onClose" | "couldCloseOnBackdrop"> {
    className?: string;
    children: JSX.Element | JSX.Element[];
}

export type DialogFooterProps = Omit<DialogProps, "isOpen" | "title" | "children" | "containerClass" | "onClose">;
