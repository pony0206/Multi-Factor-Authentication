import {
  INameChangeRequest,
  IPasswordChangeRequest,
  IUser,
  RecoverPwdRequest,
  IBioChangeRequest,
} from "../types";
import { http } from "./api";

class UserService {
  async getAll() {}

  async recoverPwd(payload: RecoverPwdRequest) {
    const res = await http.post<boolean>(`/recover`, payload);
    return res.data;
  }

  async verifyEmail(code: string) {
    const res = await http.get<boolean>(`/recover/${code}`);
    return res.data;
  }

  async changeName(payload: INameChangeRequest) {
    const res = await http.patch<boolean>(`/user/settings/username`, payload);
    return res.data;
  }

  async changePwd(payload: IPasswordChangeRequest) {
    const res = await http.patch<boolean>(`/user/settings/password`, payload);
    return res.data;
  }
  async changeAvatar(payload: FormData) {
    const res = await http.patch<boolean>(`/user/settings/avatar`, payload);
    return res.data;
  }

  async getUserById(id: string) {
    const res = await http.get<IUser>(`/user/id/${id}`);
    return res.data;
  }
  async getUserByName(username: string) {
    const res = await http.get<IUser>(`/user/${username}`);
    return res.data;
  }
  async getUserProfile(name:any){ 
    const res : any = await http.post(`/user/profile`,name );
    return res.data;
  }
  async getUserBio(payload:IBioChangeRequest){
    const res :any = await http.patch(`/user/settings/bio`, payload );
    return res.data;
  }
  
}

export const userService = new UserService();
