import rootReducer from "./rootReducer";
import { store } from "./store";

export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<typeof rootReducer>;

// user
export interface UserState {
    phone: string | null;
    lastName: string | null;
    firstName: string | null;
    middleName: string | null;
    birthday: string | null;
    sex: string | number | null;
    email: string | null;
}
