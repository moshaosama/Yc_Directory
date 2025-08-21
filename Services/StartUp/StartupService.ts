import axios from "axios";
import { ParentService } from "../parentService";

class StartUpService extends ParentService {
  async createData(data?: { title: string, category: string
      description:string
      image: string }, thunkApi?: any) {
        try {
            const response = await axios.post("http://localhost:3004/api/startup", data);
            return response;
        }
        catch (err) {
            return thunkApi?.rejectWithValue(err);
        }
  }
  async getData(_?: any, thunkApi?: any) {
    try {
      const response = await axios.get("http://localhost:3004/api/startup");
      return response;
    } catch (err) {
      return thunkApi?.rejectWithValue(err);
    }
  }

  async GetDataByid(id: number, thunkApi?: any) {
    try {
      const response = await axios.get(
        `http://localhost:3004/api/startup/${id}`
      );
      return response;
    } catch (err) {
      return thunkApi?.rejectWithValue(err);
    }
  }

    async GetDataByUserId(user_id: number, thunkApi?: any) {
        try {
            const response = await axios.get(
                `http://localhost:3004/api/startup/user/${user_id}`
            );
            return response;
        } catch (err) {
            return thunkApi?.rejectWithValue(err);
        }
    }

}

export const startUpService = new StartUpService();
