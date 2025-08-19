import axios from "axios";
import { ParentService } from "../parentService";

class StartUpService extends ParentService {
  createData(data?: any, thunkApi?: any): void {}
  async getData(_?: any, thunkApi?: any) {
    try {
      const response = await axios.get("http://localhost:3000/api/startup");
      return response;
    } catch (err) {
      return thunkApi?.rejectWithValue(err);
    }
  }

  async GetDataByid(id: number, thunkApi?: any) {
    try {
      const response = await axios(`http://localhost:3000/api/startup/${id}`);
      return response;
    } catch (err) {
      return thunkApi?.rejectWithValue(err);
    }
  }
}

export const startUpService = new StartUpService();
