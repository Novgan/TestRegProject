import React from "react";

const CorrectMarkIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.3344 2.75024H7.6654C4.6444 2.75024 2.7504 4.88924 2.7504 7.91624V16.0842C2.7504 19.1112 4.6354 21.2502 7.6654 21.2502H16.3334C19.3644 21.2502 21.2504 19.1112 21.2504 16.0842V7.91624C21.2504 4.88924 19.3644 2.75024 16.3344 2.75024Z"
                stroke="#84DF88"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8.43991 12.0002L10.8139 14.3732L15.5599 9.6272"
                stroke="#84DF88"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default React.memo(CorrectMarkIcon);
