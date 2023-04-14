import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthorizationModule from "./modules/Authorization/AuthorizationModule";
import AdditionalInfoModule from "./modules/AdditionalInfo/AdditionalInfoModule";
import PhoneConfirmationModule from "./modules/PhoneConfirmation/PhoneConfirmationModule";

const RoutSwitcher = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/registration/phoneConfirmation" element={<PhoneConfirmationModule />} />
                <Route path="/registration/additionalInfo" element={<AdditionalInfoModule />} />
                <Route path="/authorization" element={<AuthorizationModule />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RoutSwitcher;
