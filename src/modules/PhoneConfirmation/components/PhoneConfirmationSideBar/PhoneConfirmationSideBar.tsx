import SideBar from "../../../../components/SideBar/SideBar";

const PhoneConfirmationSideBar = () => (
    <SideBar>
        <div className="pt-12 pl-16 pr-12 flex flex-col gap-y-20 z-20">
            <div className="gap-y-6 flex flex-col">
                <h1 className="font-bold text-4xl">Регистрация пользователя</h1>
                <p>Заполните информацию о себе, чтобы начать использовать все преимущества платформы</p>
            </div>
        </div>
    </SideBar>
);

export default PhoneConfirmationSideBar;
