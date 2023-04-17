import { removeAuthToken, setAuthToken } from "../auth";
import { client } from "../../../api/config";

describe("auth utils", () => {
    describe("setAuthToken", () => {
        it("Should set token to LS", () => {
            setAuthToken("MOCKED_TOKEN");

            expect(client.defaults.headers.common.userToken).toBeDefined();
            expect(client.defaults.headers.common.userToken).toBe("MOCKED_TOKEN");
            expect(window.localStorage.getItem("token")).toBe("MOCKED_TOKEN");
        });
    });

    describe("removeAuthToken", () => {
        it("Should remove token from LS", () => {
            setAuthToken("MOCKED_TOKEN");

            expect(client.defaults.headers.common.userToken).toBe("MOCKED_TOKEN");
            expect(window.localStorage.getItem("token")).toBe("MOCKED_TOKEN");

            removeAuthToken();

            expect(client.defaults.headers.common.userToken).not.toBeDefined();
            expect(window.localStorage.getItem("token")).toBeNull();
        });
    });
});
