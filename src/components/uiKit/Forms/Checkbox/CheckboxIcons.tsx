import React, { FC, memo } from "react";
import { CheckboxIconsProps, IndeterminateCheckboxValues } from "./models";
import CheckIcon from "../../Icons/CheckIcon";
import CorrectMarkIcon from "../../Icons/CorrectMarkIcon";

const CheckboxIcons: FC<CheckboxIconsProps> = ({ checked, checkboxValue }) => {
    if (checked) return <CheckIcon className="stroke-white" />;
    if (checkboxValue) {
        switch (Number(checkboxValue)) {
            case IndeterminateCheckboxValues.Checked:
                return <CheckIcon className="stroke-white" />;
            case IndeterminateCheckboxValues.Indeterminate:
                return <CorrectMarkIcon />;
        }
    }
    return null;
};

export default memo(CheckboxIcons);
