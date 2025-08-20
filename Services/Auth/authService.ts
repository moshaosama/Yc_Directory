import axios from "axios";

class AuthService {
    async Login(data: {email: string, password: string}, thunkApi?: any) {
        try {
            const response = await axios.post("http://localhost:3002/api/auth/login", data)
            return response.data;
        }
        catch (err) {
            return thunkApi?.rejectWithValue(err);
        }
    }

    async SignUp (data: {username: string, email :string, password: string}, thunkApi?: any) {
        try {
            const response = await axios.post("http://localhost:3002/api/auth/signup", data)
            return response.data;
        }
        catch (err) {
            return thunkApi?.rejectWithValue(err);
        }
    }
}


export const authService = new AuthService();