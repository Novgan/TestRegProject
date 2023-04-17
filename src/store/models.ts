import rootReducer from "./rootReducer";
import { store } from "./store";

export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<typeof rootReducer>;

// user
export interface UserState {
    phone: string;
    lastName: string;
    firstName: string;
    middleName: string;
    birthday: string;
    sex: string;
    email: string;
}
