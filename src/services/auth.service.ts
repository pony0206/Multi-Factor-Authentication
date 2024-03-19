import { http } from "./api";
import {
  ILoginRequest,
  ILoginResponse,
  IRegisterRequest,
  IRefreshTokenRequest,
  IUser,
  I2FASecret,
  ITotpTokenRequest,
} from "../types";

class AuthService {
  async login(payload: ILoginRequest) {
    const res = await http.post<ILoginResponse>(`/auth/login`, payload);
    return res.data;
  }

  async register(payload: IRegisterRequest) {
    const res = await http.post<ILoginResponse>(`/auth/register`, payload);
    return res.data;
  }

  refreshToken(payload: IRefreshTokenRequest) {
    return http.post<ILoginResponse>(`/auth/refresh-token`, payload);
  }

  async me() {
    const res = await http.get<IUser>(`/auth/me`);
    return res.data;
  }

  async get2FASecret() {
    const res = await http.get<I2FASecret>("/auth/totp-secret");
    return res.data;
  }

  async deactive2FASecret(payload: ITotpTokenRequest) {
    const res = await http.post<ILoginResponse>(
      "/auth/totp-deactivate",
      payload
    );
    return res.data;
  }

  async verify2FA(payload: ITotpTokenRequest) {
    const res = await http.post<ILoginResponse>("/auth/totp-verify", payload);
    return res.data;
  }
}

export const authService = new AuthService();
