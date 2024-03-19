import {BACKEND_API_URL} from "@/constants";
import axios from "axios";

export class Apis {
    static setAuthToken(token: string) {
        if (token) {
            // console.log("set header token", token);
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        } else {
            delete axios.defaults.headers.common["Authorization"];
        }
    }

    static async _getCall(path: string, config?: any) {
        try {
            if (config) {
                const res = await axios.get(`${BACKEND_API_URL}${path}`, config);
                return {success: true, data: res.data};
            } else {
                const res = await axios.get(`${BACKEND_API_URL}${path}`);
                return {success: true, data: res.data};
            }
        } catch (e: any) {
            if (e.response?.status != 404) {
                return {success: false, error_message: e.response.data.message};
            } else {
                console.error("Backend API call failed:", e);
            }
        }
        return {success: false, error_message: "Can not connect to server!"};
    }

    static async _postCall(path: string, payload: any) {
        try {
            const res = await axios.post(`${BACKEND_API_URL}${path}`, payload);
            return {success: true, data: res.data};
        } catch (e: any) {
            if (e.response?.status != 404) {
                return {success: false, error_message: e.response.data.message};
            } else {
                console.error("Backend API call failed:", e);
            }
        }
        return {success: false, error_message: "Can not connect to server!"};
    }

    static async getPosts() {
        return this._getCall("/posts");
    }
}