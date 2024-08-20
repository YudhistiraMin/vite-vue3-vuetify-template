<script setup>
import { ref, watch } from "vue";
// import logo from "@/assets/images/favicon.png";

import { useAuthStore } from '../stores/auth'
import { get } from '../plugins/axios'

const authStore = useAuthStore()
const appName = import.meta.env.VITE_APP_NAME;
const props = defineProps(["drawer"]);
const emit = defineEmits(["change"]);
const drawerIn = ref(props.drawer.drawer);
const menuItems = ref([
  {
    label: "Dashboard",
    to: "/dashboard",
    icon: "mdi-view-dashboard",
    color: "#5e35b1",
  },
  {
    label: "Monitoring",
    to: "/monitoring",
    icon: "mdi-monitor-dashboard",
    color: "#5e35b1",
  },
  {
    label: "Input HM inspection",
    to: "/inspecting",
    icon: "mdi-file-document-edit-outline",
    color: "#5e35b1",
  },
]);
const menuGroup = ref([
  {
    label: "Report",
    value: "report",
    icon: "mdi-file-chart",
    color: "#5e35b1",
    children: [
      {
        label: "Detail HM",
        to: "/report/detail",
        color: "#5e35b1",
      },
      {
        label: "Summary HM",
        to: "/report/summary",
        color: "#5e35b1",
      },
      {
        label: "Last HM",
        to: "/report/last",
        color: "#5e35b1",
      }
    ]
  },
])

const logout = async () => {
  authStore.logout();
};

watch(props, (newValue) => {
  drawerIn.value = newValue.drawer.drawer;
});

watch(drawerIn, (newValue) => {
  emit("change", newValue);
});
</script>
<template>
  <v-navigation-drawer
    left
    floating
    v-model="drawerIn"
    elevation="0"
    rail-width="75"
    mobile-breakpoint="lg"
    app
    class="leftSidebar"
    expand-on-hover>
    <div class="pa-5">
      TPB DEV
    </div>
    <perfect-scrollbar class="scrollnavbar">
      <div class="pa-4" color="darkText">
        <v-list>
          <template v-for="(item, index) in menuItems" :key="index">
            <v-list-item v-if="!item.children"
                class="text-body-2"
                :density="item.density"
                :to="item.to"
                link
                :prepend-icon="item.icon"
                :color="item.color"
              >
              {{ item.label }}
            </v-list-item>
          </template>
          <v-list-group
            v-for="(group, index) in menuGroup"
              :key="'group-' + index"
              class="text-body-2"
              :density="group.density"
              :value="group.value">
              <template v-slot:activator="{ props }">
                <v-list-item
                  v-bind="props"
                  :prepend-icon="group.icon"
                  :color="group.color">
                  {{ group.label }}
                </v-list-item>
              </template>
              <v-list-item
                v-for="(child, index) in group.children"
                :key="'child-' + index"
                class="text-body-2"
                :density="child.density"
                :to="child.to"
                link
                :color="child.color">
                {{ child.label }}
              </v-list-item>
          </v-list-group>
        </v-list>
      </div>
    </perfect-scrollbar>
    <template v-slot:append>
      <div class="pa-2">
        <v-btn block class="text-capitalize" color="red" @click="logout()">
          Logout
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<style>
</style>