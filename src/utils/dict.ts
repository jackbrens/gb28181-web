// ? 系统全局字典

/**
 * @description：用户性别
 */
export const genderType = [
  { label: "男", value: 1 },
  { label: "女", value: 2 }
];

/**
 * @description：用户状态
 */
export const userStatus = [
  { label: "启用", value: 1, tagType: "success" },
  { label: "禁用", value: 0, tagType: "danger" }
];

/**
 * @description 流传输模式
 */
export const streamModeStatus = [
  { label: "UDP", value: 0, tagType: "success" },
  { label: "TCP主动模式", value: 2, tagType: "success" },
  { label: "TCP被动模式", value: 1, tagType: "success" }
];

/**
 * @description 设备状态
 */
export const deviceStatus = [
  { label: "在线", value: true, tagType: "success" },
  { label: "离线", value: false, tagType: "danger" }
];
