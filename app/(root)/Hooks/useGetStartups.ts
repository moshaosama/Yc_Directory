import { startUpService } from "@/Services/StartUp/StartupService";

export interface StartUpData {
  id: number;
  date: string;
  name: string;
  tag: string;
  description: string;
  image_url: string;
  view: string;
}

const useGetStartups = async () => {
  const response = await startUpService.getData();
  const StartUps: StartUpData[] = (await response)?.data;
  return StartUps;
};

export default useGetStartups;
