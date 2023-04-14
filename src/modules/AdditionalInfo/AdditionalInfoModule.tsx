import AdditionalInfoContainer from "./components/AdditionalInfoForm/AdditionalInfoContainer";
import AdditionalInfoSideBar from "./components/AdditionalInfoSideBar/AdditionalInfoSideBar";

const AdditionalInfoModule = () => {
    return (
        <div className="flex h-screen">
            <AdditionalInfoSideBar />
            <AdditionalInfoContainer />
        </div>
    );
};

export default AdditionalInfoModule;
