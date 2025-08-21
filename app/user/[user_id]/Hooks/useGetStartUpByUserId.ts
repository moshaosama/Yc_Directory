import {startUpService} from "@/Services/StartUp/StartupService";

export const useGetStartUpByUserId = async(user_id: number) => {
    const response = await startUpService.GetDataByUserId(user_id);
    return {response}
}