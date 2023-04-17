import React from "react";
import ReactDOM from "react-dom/client";
import RoutSwitcher from "./RoutSwitcher";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { QueryClient, QueryClientProvider } from "react-query";
import { DEFAULT_REACT_QUERY_OPTIONS } from "./shared/constants/queries";
import { ToastContainer } from "react-toastify";
import "./styles/ant.less";
import "react-toastify/dist/ReactToastify.css";
import "./styles/index.css";

export const queryClient = new QueryClient(DEFAULT_REACT_QUERY_OPTIONS);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <RoutSwitcher />
                <ToastContainer theme="colored" />
            </Provider>
        </QueryClientProvider>
    </React.StrictMode>
);
