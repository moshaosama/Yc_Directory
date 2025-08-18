import axios from "axios";
import { ParentService } from "../parentService";

class StartUpService extends ParentService {
  createData(data?: any, thunkApi?: any): void {}
  async getData(_?: any, thunkApi?: any) {
    const response = await axios.get("http://localhost:3000/api/startup");
    return response.data;
  }
}
