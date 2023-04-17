import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserState } from "../models";

const initialState: UserState = {
    phone: null,
    lastName: null,
    firstName: null,
    middleName: null,
    birthday: null,
    sex: null,
    email: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserPhone(state, action: PayloadAction<string>) {
            state.phone = action.payload;
        },
        setUserInfo(state, action: PayloadAction<UserState>) {
            const { birthday, email, firstName, lastName, middleName, phone, sex } = action.payload;
            state.email = email;
            state.birthday = birthday;
            state.firstName = firstName;
            state.lastName = lastName;
            state.middleName = middleName;
            state.phone = phone;
            state.sex = sex;
        },
    },
});

export default userSlice.reducer;
