import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthorizationModule from "./modules/Authorization/AuthorizationModule";
import AdditionalInfoModule from "./modules/AdditionalInfo/AdditionalInfoModule";
import PhoneConfirmationModule from "./modules/PhoneConfirmation/PhoneConfirmationModule";
import { ROUTES } from "./shared/constants/routes";

const RoutSwitcher = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTES.registration.phoneConfirmation.route} element={<PhoneConfirmationModule />} />
                <Route path={ROUTES.registration.additionalInfo.route} element={<AdditionalInfoModule />} />
                <Route path="*" element={<AuthorizationModule />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RoutSwitcher;
