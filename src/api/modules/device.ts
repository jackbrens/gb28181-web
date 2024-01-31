/**
 * @description 设备管理模块
 */
import http from "@/api";
import { PORT3 } from "@/api/config/servicePort";

export const getDevicesListApi = (params?: any) => {
  return http.get<any>(PORT3 + `/device/query/devices`, params);
};
