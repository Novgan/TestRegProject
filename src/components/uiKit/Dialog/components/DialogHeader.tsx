import React, { FC } from "react";
import { DialogProps } from "../models";
import { IconButton } from "../../Button/Button";
import CrossIcon from "../../Icons/CrossIcon";

const DialogHeader: FC<Pick<DialogProps, "title" | "onClose">> = ({ title, onClose }) => {
    return (
        <div className="flex items-center justify-between mb-6 font-bold text-xl text-dark-900">
            {title && <div className="w-full">{title}</div>}
            <IconButton
                aria-label="Close dialog"
                className="hover:bg-inherit flex items-center justify-center absolute top-3 right-3 w-10 h-10"
                data-testid="close-dialog-button"
                onClick={onClose}
            >
                <CrossIcon fill="#8D97B0" />
            </IconButton>
        </div>
    );
};

export default DialogHeader;
