import React from "react";

const LoadingIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-5 h-5" {...props}>
            <path
                d="M1 10C1 4.6 4.951 0.999999 9.8254 1C13.7872 1 16.984 3.1015 18.1 6.4M19 10C19 15.4 15.049 19 10.1746 19C6.2119 19 3.016 16.8985 1.9 13.6"
                stroke="#8D97B0"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />

            <path
                d="M14.5 5.5002L18.1 6.4002L19 2.8002M5.5 14.5002L1.9 13.6002L1 17.2002"
                stroke="#8D97B0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default React.memo(LoadingIcon);
