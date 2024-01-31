/**
 * @description 表格配置项
 */
import { ColumnProps, HeaderRenderScope } from "@/components/ProTable/interface";
import { reactive } from "vue";
import { User } from "@/api/interface";
import { ElMessage } from "element-plus";
import { deviceStatus, streamModeStatus } from "@/utils/dict";

// 自定义渲染表头（使用tsx语法）
const headerRender = (scope: HeaderRenderScope<User.ResUserList>) => {
  return (
    <el-button type="primary" onClick={() => ElMessage.success("我是通过 tsx 语法渲染的表头")}>
      {scope.column.label}
    </el-button>
  );
};

export const columns = reactive<ColumnProps<User.ResUserList>[]>([
  { type: "selection", fixed: "left", width: 70 },
  {
    prop: "name",
    label: "设备名称",
    search: { el: "input", tooltip: "我是搜索提示" },
    render: scope => {
      return (
        <el-button type="primary" link onClick={() => ElMessage.success("我是通过 tsx 语法渲染的内容")}>
          {scope.row.name}
        </el-button>
      );
    }
  },
  {
    prop: "deviceId",
    label: "设备编号",
    // 字典数据（本地数据）
    // enum: genderType,
    // 字典请求不带参数
    // enum: getUserGender,
    // 字典请求携带参数
    // enum: () => getUserGender({ id: 1 }),
    search: { el: "select", props: { filterable: true } },
    fieldNames: { label: "genderLabel", value: "genderValue" }
  },
  {
    // 多级 prop
    prop: "sdpIp",
    label: "地址"
  },
  { prop: "idCard", label: "厂家", search: { el: "input" } },
  { prop: "streamModeForParam", label: "流传模式", enum: streamModeStatus },
  { prop: "channelCount", label: "通道数" },
  {
    prop: "onLine",
    label: "状态",
    // enum: getUserStatus,
    enum: deviceStatus,
    render: scope => {
      return (
        <>
          <el-tag type={scope.row.onLine ? "success" : "danger"}>{scope.row.onLine ? "在线" : "离线"}</el-tag>
        </>
      );
    }
  },
  {
    prop: "createTime",
    label: "最近心跳",
    headerRender,
    width: 180,
    search: {
      el: "date-picker",
      span: 2,
      props: { type: "datetimerange", valueFormat: "YYYY-MM-DD HH:mm:ss" },
      defaultValue: ["2022-11-12 11:35:00", "2022-12-12 11:35:00"]
    }
  },
  {
    prop: "createTime",
    label: "最近注册",
    headerRender,
    width: 180,
    search: {
      el: "date-picker",
      span: 2,
      props: { type: "datetimerange", valueFormat: "YYYY-MM-DD HH:mm:ss" },
      defaultValue: ["2022-11-12 11:35:00", "2022-12-12 11:35:00"]
    }
  },
  { prop: "operation", label: "操作", fixed: "right", width: 330 }
]);
