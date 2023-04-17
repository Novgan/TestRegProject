import React from "react";

const ChevronDownIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6" {...props}>
            <path d="M7 10L12 15L17 10H7Z" fill="#4E5AF2" />
        </svg>
    );
};

export default React.memo(ChevronDownIcon);
