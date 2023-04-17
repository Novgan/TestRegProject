import { FC } from "react";
import { SideBarProps } from "./models";

const SideBar: FC<SideBarProps> = ({ children }) => {
    return (
        <div className="flex flex-col bg-gradient-to-b from-brand-200 to-brand-300 text-white flex-[2] relative">
            {children}
            <img
                className="w-full absolute bottom-0 z-10"
                src="/images/Work.png"
                alt="Three people sit on chairs and one person reading a presentation in office"
            />
        </div>
    );
};

export default SideBar;
