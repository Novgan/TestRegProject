import React from "react";

const FacebookIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6" {...props}>
            <path
                d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                fill="#3B5998"
            />
            <path
                d="M15.0168 12.4697H12.8755V20.3142H9.63132V12.4697H8.08838V9.71278H9.63132V7.92876C9.63132 6.65299 10.2373 4.65527 12.9044 4.65527L15.3075 4.66533V7.34136H13.5639C13.2779 7.34136 12.8757 7.48425 12.8757 8.09283V9.71535H15.3002L15.0168 12.4697Z"
                fill="white"
            />
        </svg>
    );
};

export default React.memo(FacebookIcon);
