import PhoneConfirmationContainer from "./components/PhoneConfirmationForm/PhoneConfirmationContainer";
import PhoneConfirmationSideBar from "./components/PhoneConfirmationSideBar/PhoneConfirmationSideBar";

const PhoneConfirmationModule = () => {
    return (
        <div className="flex h-screen">
            <PhoneConfirmationSideBar />
            <PhoneConfirmationContainer />
        </div>
    );
};

export default PhoneConfirmationModule;
