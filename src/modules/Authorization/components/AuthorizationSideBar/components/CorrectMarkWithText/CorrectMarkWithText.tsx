import { FC } from "react";
import { CorrectMarkWithTextProps } from "./models";
import CorrectMarkIcon from "../../../../../../components/uiKit/Icons/CorrectMarkIcon";

const CorrectMarkWithText: FC<CorrectMarkWithTextProps> = ({ text }) => {
    return (
        <div className="flex gap-2 items-center">
            <CorrectMarkIcon className="w-6 h-6 shrink-0" />
            <span>{text}</span>
        </div>
    );
};

export default CorrectMarkWithText;
