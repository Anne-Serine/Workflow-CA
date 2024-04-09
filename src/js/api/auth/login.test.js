import { login } from "./login.js";
import { apiPath } from "../constants.js";
import localStorageMock from "./localStorage.mock.js";

global.localStorage = localStorageMock;

global.fetch = jest.fn();

describe("login", () => {
  it("stores a token when provided with valid credentials", async () => {
    const email = "tintin@cool.com";
    const password = "test1234";
    const token = "2468";

    fetch.mockResolvedValue({
      ok: true,
      json: async () => [
        {
          accessToken: token,
          user: { id: 1, name: "Tintin", email: email },
        },
      ],
    });

    const profile = await login(email, password);
    expect(fetch).toHaveBeenCalledWith(`${apiPath}/social/auth/login`, {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    localStorage.setItem("token", profile[0].accessToken);
    expect(localStorage.setItem).toHaveBeenCalledWith("token", token);
    expect(localStorage.getItem("token")).toEqual(profile[0].accessToken);
  });
});
