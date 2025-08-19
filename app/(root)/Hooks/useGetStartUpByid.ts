import { startUpService } from "@/Services/StartUp/StartupService";
import React from "react";
import { StartUpData } from "./useGetStartups";

const useGetStartUpByid = async (id: number) => {
  const response = await startUpService.GetDataByid(id);
  const data: StartUpData[] = await response?.data;
  return data;
};

export default useGetStartUpByid;
