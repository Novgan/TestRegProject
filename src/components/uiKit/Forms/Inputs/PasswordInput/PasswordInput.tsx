import React, { FC, useState } from "react";
import { InputProps } from "../CommonInput/models";
import Input from "../CommonInput/Input";
import CloseEyeIcon from "../../../Icons/CloseEyeIcon";
import OpenEyeIcon from "../../../Icons/OpenEyeIcon";

const PasswordInput: FC<InputProps> = props => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(prev => !prev);
    };

    return (
        <Input
            {...props}
            type={isVisible ? "text" : "password"}
            endIcon={
                isVisible ? <OpenEyeIcon onClick={toggleVisibility} /> : <CloseEyeIcon onClick={toggleVisibility} />
            }
        />
    );
};

export default PasswordInput;
