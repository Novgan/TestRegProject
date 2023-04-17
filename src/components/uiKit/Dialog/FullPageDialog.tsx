import { FC } from "react";
import { DialogProps } from "./models";
import { IconButton } from "../Button/Button";
import CrossIcon from "../Icons/CrossIcon";

const FullPageDialog: FC<Pick<DialogProps, "onClose" | "childContainerClass" | "isOpen" | "children">> = ({
    onClose,
    isOpen,
    children,
}) => {
    if (!isOpen) return null;

    return (
        <div className="bg-gradient-to-b from-brand-200 to-brand-300 text-white fixed z-40 bg-black w-full h-full top-0 left-0">
            <div className="flex items-center justify-between mb-6 font-bold text-xl text-dark-900">
                <IconButton
                    aria-label="Close dialog"
                    className="hover:bg-inherit flex items-center justify-center absolute top-3 right-3 w-10 h-10"
                    data-testid="close-dialog-button"
                    size="sm"
                    onClick={onClose}
                    variant="neutral"
                >
                    <CrossIcon fill="#DCDEFC" />
                </IconButton>
            </div>
            {children}
        </div>
    );
};

export default FullPageDialog;
