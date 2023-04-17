import { forwardRef } from "react";
import { IconButton } from "../../../../../../components/uiKit/Button/Button";
import { IconButtonProps } from "../../../../../../components/uiKit/Button/models";
import LeftArrowIcon from "../../../../../../components/uiKit/Icons/LeftArrowIcon";

const BackButton = forwardRef<HTMLButtonElement, Omit<IconButtonProps, "children">>(
    ({ className = "", ...rest }, ref) => {
        return (
            <IconButton {...rest} className={`flex items-center gap-2 ${className}`} ref={ref}>
                <>
                    <LeftArrowIcon />
                    <span>Назад</span>
                </>
            </IconButton>
        );
    }
);

export default BackButton;
