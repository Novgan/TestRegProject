import React from "react";
import ReactDOM from "react-dom/client";
import RoutSwitcher from "./RoutSwitcher";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./styles/index.css";
import "./styles/antTabs.less";
import { QueryClient, QueryClientProvider } from "react-query";
import { DEFAULT_REACT_QUERY_OPTIONS } from "./shared/constants/queries";

export const queryClient = new QueryClient(DEFAULT_REACT_QUERY_OPTIONS);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <RoutSwitcher />
            </Provider>
        </QueryClientProvider>
    </React.StrictMode>
);
