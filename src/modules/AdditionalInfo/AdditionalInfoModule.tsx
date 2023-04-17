import AdditionalInfoContainer from "./components/AdditionalInfoForm/AdditionalInfoContainer";
import AdditionalInfoSideBar from "./components/AdditionalInfoSideBar/AdditionalInfoSideBar";
import { Navigate, useSearchParams } from "react-router-dom";
import { setAuthToken } from "../../shared/utils/auth";
import { loginUser } from "../../api/profile";
import { useQuery } from "react-query";
import { userSlice } from "../../store/reducers/UserSlice";
import { useAppDispatch } from "../../shared/hooks/redux";
import { ROUTES } from "../../shared/constants/routes";

const AdditionalInfoModule = () => {
    const [searchParams] = useSearchParams();
    const { setUserInfo } = userSlice.actions;
    const dispatch = useAppDispatch();
    const email = searchParams.get("email") ?? "";
    const password = searchParams.get("password") ?? "";

    const { isFetching } = useQuery(["profile", "login"], loginUser({ email, password }), {
        enabled: Boolean(email && password),
        select: queryData => queryData.data,
        onSuccess: ({ status, user_data }) => {
            if (!status) return;
            const {
                email: userEmail,
                token,
                birth_date: birthDate,
                phone,
                lname,
                name,
                sname,
                gender_id: genderId,
            } = user_data;

            setAuthToken(token);
            dispatch(
                setUserInfo({
                    birthday: birthDate,
                    phone: phone,
                    lastName: lname,
                    firstName: name,
                    middleName: sname,
                    sex: genderId,
                    email: userEmail,
                })
            );
        },
    });

    if (!email || !password) return <Navigate to={ROUTES.authorization.route} replace />;

    return (
        <div className="flex h-screen">
            <AdditionalInfoSideBar />
            <AdditionalInfoContainer isFetching={isFetching} />
        </div>
    );
};

export default AdditionalInfoModule;
