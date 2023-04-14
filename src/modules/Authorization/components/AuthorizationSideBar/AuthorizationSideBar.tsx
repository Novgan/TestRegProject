import SideBar from "../../../../components/SideBar/SideBar";
import CorrectMarkWithText from "./components/CorrectMarkWithText/CorrectMarkWithText";

const AuthorizationSideBar = () => (
    <SideBar>
        <div className="pt-24 pl-16 pr-11 flex flex-col gap-y-20">
            <div className="gap-y-6 flex flex-col">
                <h1 className="font-bold text-4xl">Войти в аккаунт</h1>
                <p>Введите ваш E-mail и пароль, чтобы начать использовать все преимущества платформы:</p>
            </div>
            <div className="grid grid-cols-2 gap-y-6">
                <CorrectMarkWithText text="Автоматизация HR" />
                <CorrectMarkWithText text="Интеграция с job-порталами" />
                <CorrectMarkWithText text="Оценка персонала" />
                <CorrectMarkWithText text="Синхронизация с Outlook" />
                <CorrectMarkWithText text="Безопасность данных" />
                <CorrectMarkWithText text="Парсинг резюме" />
                <CorrectMarkWithText text="Мультиязычность" />
                <CorrectMarkWithText text="Конструктор отчетности" />
            </div>
        </div>
    </SideBar>
);

export default AuthorizationSideBar;
