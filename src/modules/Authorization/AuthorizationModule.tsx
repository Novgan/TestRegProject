import AuthorizationContainer from "./components/AuthorizationForm/AuthorizationContainer";
import AuthorizationSideBar from "./components/AuthorizationSideBar/AuthorizationSideBar";

const AuthorizationModule = () => {
    return (
        <div className="flex h-screen">
            <AuthorizationSideBar />
            <AuthorizationContainer />
        </div>
    );
};

export default AuthorizationModule;
