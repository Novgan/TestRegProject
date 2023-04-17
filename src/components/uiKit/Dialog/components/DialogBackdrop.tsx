import React, { FC } from "react";

const DialogBackdrop: FC<{ className?: string }> = ({ className = "" }) => {
    return <div className={`fixed z-40 bg-black opacity-25 w-full h-full top-0 left-0 ${className}`} />;
};

export default React.memo(DialogBackdrop);
