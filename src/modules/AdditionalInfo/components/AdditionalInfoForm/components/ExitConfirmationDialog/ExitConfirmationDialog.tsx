import { FC } from "react";
import Dialog from "../../../../../../components/uiKit/Dialog/Dialog";
import RedBackgroundCrossIcon from "../../../../../../components/uiKit/Icons/RedBackgroundCrossIcon";
import { DialogProps } from "../../../../../../components/uiKit/Dialog/models";

const ExitConfirmationDialog: FC<Pick<DialogProps, "isOpen" | "onClose" | "onSubmit">> = ({
    isOpen,
    onClose,
    onSubmit,
}) => {
    return (
        <Dialog
            title={<RedBackgroundCrossIcon className="mx-auto" />}
            isOpen={isOpen}
            containerClass="max-w-lg max-h-5/6"
            childContainerClass="flex"
            submitText={"Продолжить"}
            cancelText={"Выйти"}
            submitButtonClassName={"w-1/2"}
            cancelButtonClassName={"w-1/2"}
            onClose={onClose}
            onCancel={onSubmit}
            onSubmit={onClose}
        >
            <div className="w-full">
                <h1 className="text-center text-lg font-semibold">Подтверждение выхода из аккаунта</h1>
                <p className="text-center">Вы действительно хотите выйти из своей учетной записи?</p>
            </div>
        </Dialog>
    );
};

export default ExitConfirmationDialog;
