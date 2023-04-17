import { useState } from "react";
import Timer from "../../../../../../components/Timer/Timer";
import { useDisclosure } from "../../../../../../shared/hooks/useDisclosure";
import { useMutation } from "react-query";
import { confirmPhone } from "../../../../../../api/profile";
import { useAppSelector } from "../../../../../../shared/hooks/redux";
import { toast } from "react-toastify";

const threeMin = 175000;

const SendSmsAgain = () => {
    const { phone } = useAppSelector(({ userReducer }) => userReducer);
    const { isOpen: isSendSmsEnabled, onOpen: onSendSmsEnabled, onClose: onSendSmsDisable } = useDisclosure();
    const [deadline, setDeadline] = useState(Date.now() + threeMin);

    const { mutateAsync: sendSms } = useMutation(confirmPhone, {
        onSuccess: query => {
            if (!query.data.status) {
                toast.error(query.data.msg);
            } else {
                setDeadline(Date.now() + threeMin);
                onSendSmsDisable();
            }
        },
    });

    const sendSmsAgainHandler = () => {
        if (!phone) return;

        sendSms({ phone });
    };

    if (isSendSmsEnabled)
        return (
            <div onClick={sendSmsAgainHandler} className="text-right underline text-brand-400 cursor-pointer">
                Оправить код повторно
            </div>
        );

    return <Timer deadline={deadline} timerDone={onSendSmsEnabled} className="justify-end" />;
};

export default SendSmsAgain;
