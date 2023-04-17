import { Navigate } from "react-router-dom";
import { getAuthToken } from "../../shared/utils/auth";
import PhoneConfirmationContainer from "./components/PhoneConfirmationForm/PhoneConfirmationContainer";
import PhoneConfirmationSideBar from "./components/PhoneConfirmationSideBar/PhoneConfirmationSideBar";
import { ROUTES } from "../../shared/constants/routes";
import { useAppSelector } from "../../shared/hooks/redux";

const PhoneConfirmationModule = () => {
    const { phone } = useAppSelector(({ userReducer }) => userReducer);

    if (!phone || !getAuthToken()) return <Navigate to={ROUTES.authorization.route} replace />;

    return (
        <div className="flex h-screen">
            <PhoneConfirmationSideBar />
            <PhoneConfirmationContainer />
        </div>
    );
};

export default PhoneConfirmationModule;
