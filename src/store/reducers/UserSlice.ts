import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserState } from "../models";

const initialState: UserState = {
    phone: "",
    lastName: "",
    firstName: "",
    middleName: "",
    birthday: "",
    sex: "",
    email: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserPhone(state, action: PayloadAction<string>) {
            state.phone = action.payload;
        },
        setUserInfo(state, action: PayloadAction<UserState>) {
            state = action.payload;
        },
    },
});

export default userSlice.reducer;
