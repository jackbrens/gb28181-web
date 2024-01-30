<template>
  <div class="table-box">
    <ProTable :columns="columns" :request-api="getTableList">
      <!-- 表格操作 -->
      <template #operation="scope">
        <!--        <el-button type="primary" link :icon="View" @click="openDrawer('查看', scope.row)">查看</el-button>-->
        <!--        <el-button type="primary" link :icon="EditPen" @click="openDrawer('编辑', scope.row)">编辑</el-button>-->
        <!--        <el-button type="primary" link :icon="Refresh" @click="resetPass(scope.row)">重置密码</el-button>-->
        <!--        <el-button type="primary" link :icon="Delete" @click="deleteAccount(scope.row)">删除</el-button>-->
        <el-button type="primary" link :icon="Refresh" @click="openDrawer('查看', scope.row)">刷新</el-button>
        <el-button type="primary" link :icon="View" @click="openDrawer('查看', scope.row)">通道</el-button>
        <el-button type="primary" link :icon="Location" @click="openDrawer('查看', scope.row)">定位</el-button>
        <el-button type="primary" link :icon="EditPen" @click="openDrawer('查看', scope.row)">编辑</el-button>
        <el-button type="primary" link :icon="Delete" @click="openDrawer('查看', scope.row)">删除</el-button>
      </template>
    </ProTable>
  </div>
</template>

<script setup lang="ts" name="device">
import ProTable from "@/components/ProTable/index.vue";
import { columns } from "@/views/videoPlatform/device/config";
import { deleteUser, getUserList, resetUserPassWord } from "@/api/modules/user";
import { Delete, EditPen, Refresh, View, Location } from "@element-plus/icons-vue";
import { User } from "@/api/interface";
import { useHandleData } from "@/hooks/useHandleData";
import { ProTableInstance } from "@/components/ProTable/interface";
import { ref } from "vue";

// ProTable 实例
const proTable = ref<ProTableInstance>();

// 如果你想在请求之前对当前请求参数做一些操作，可以自定义如下函数：params 为当前所有的请求参数（包括分页），最后返回请求列表接口
// 默认不做操作就直接在 ProTable 组件上绑定	:requestApi="getUserList"
const getTableList = (params: any) => {
  let newParams = JSON.parse(JSON.stringify(params));
  newParams.createTime && (newParams.startTime = newParams.createTime[0]);
  newParams.createTime && (newParams.endTime = newParams.createTime[1]);
  delete newParams.createTime;
  return getUserList(newParams);
};

// 重置用户密码
const resetPass = async (params: User.ResUserList) => {
  await useHandleData(resetUserPassWord, { id: params.id }, `重置【${params.username}】用户密码`);
  proTable.value?.getTableList();
};

// 删除用户信息
const deleteAccount = async (params: User.ResUserList) => {
  await useHandleData(deleteUser, { id: [params.id] }, `删除【${params.username}】用户`);
  proTable.value?.getTableList();
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const openDrawer = (title: string, row: Partial<User.ResUserList> = {}) => {
  // const params = {
  //   title,
  //   isView: title === "查看",
  //   row: { ...row },
  //   api: title === "新增" ? addUser : title === "编辑" ? editUser : undefined,
  //   getTableList: proTable.value?.getTableList
  // };
  // drawerRef.value?.acceptParams(params);
};
</script>

<style scoped lang="scss"></style>
