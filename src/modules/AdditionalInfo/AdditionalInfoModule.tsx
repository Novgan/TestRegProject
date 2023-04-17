import { useEffect } from "react";
import AdditionalInfoContainer from "./components/AdditionalInfoForm/AdditionalInfoContainer";
import AdditionalInfoSideBar from "./components/AdditionalInfoSideBar/AdditionalInfoSideBar";
import { useSearchParams } from "react-router-dom";
import { setAuthTokenToAxiosClient } from "../../shared/utils/auth";
import { confirmEmail } from "../../api/profile";
import { useQuery } from "react-query";

// e5c6a74c411aae53a928ed467e83c643

// https://api.prof.world/v2.0/profile/confirmEmail/?data=%7B%22token%22:%22de16eb00de6d67f55cc1fb99d17fe110%22,%22ref%22:%22http://example.com%22%7D

const AdditionalInfoModule = () => {
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token") ?? "";

    useQuery(["profile", "confirmEmail"], confirmEmail({ token, ref: "http://example.com" }), {
        enabled: Boolean(token),
        onSuccess: query => {
            if (!query.data.status) return;
        },
    });

    useEffect(() => {
        if (token) {
            setAuthTokenToAxiosClient(token);
        }
    }, []);

    return (
        <div className="flex h-screen">
            <AdditionalInfoSideBar />
            <AdditionalInfoContainer />
        </div>
    );
};

export default AdditionalInfoModule;
