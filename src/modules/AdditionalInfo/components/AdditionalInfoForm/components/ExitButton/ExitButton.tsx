import { forwardRef } from "react";
import { IconButton } from "../../../../../../components/uiKit/Button/Button";
import { IconButtonProps } from "../../../../../../components/uiKit/Button/models";
import ExitIcon from "../../../../../../components/uiKit/Icons/ExitIcon";

const ExitButton = forwardRef<HTMLButtonElement, Omit<IconButtonProps, "children">>(
    ({ className = "", ...rest }, ref) => {
        return (
            <IconButton {...rest} className={`flex items-center gap-2 ${className}`} ref={ref}>
                <>
                    <ExitIcon />
                    <span>Выход</span>
                </>
            </IconButton>
        );
    }
);

export default ExitButton;
