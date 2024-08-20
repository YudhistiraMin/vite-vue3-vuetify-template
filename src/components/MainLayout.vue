<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router";
import { useDisplay } from "vuetify";
import { useAuthStore } from "../stores/auth";
import { get } from "../plugins/axios";
import SideBar from "../components/Sidebar.vue";
const { mobile } = useDisplay();

const drawer = ref({
  drawer: true,
  permanent: true,
});

const user = ref(JSON.parse(localStorage.getItem("user")));

const authStore = useAuthStore();

if (mobile.value) {
  drawer.value.permanent = false;
}

const handleDrawer = (value) => {
  drawer.value.drawer = value;
};

const logout = async () => {
  await get("/auth/logout");
  authStore.logout();
};

</script>
<template>
  <v-layout class="rounded rounded-md">
    <SideBar :drawer="drawer" @change="handleDrawer" />
    <v-app-bar elevation="0" height="80">
      <v-btn
        class="hidden-md-and-down ml-3"
        color="#ede7f6"
        icon
        rounded="sm"
        variant="flat"
        style="border-radius: 9px !important;"
        @click.stop="drawer.drawer = !drawer.drawer"
        size="small">
        <v-icon color="#5e35b1" size="21" stroke-width="1.5">mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid class="page-wrapper">
        <div>
          <RouterView />
        </div>
      </v-container>
    </v-main>
  </v-layout>
</template>