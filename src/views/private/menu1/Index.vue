<script setup>
import { onMounted } from "vue";
import UiParentCard from "../../../components/shared/UIParentCard.vue";
import BaseBreadcrumb from "../../../components/shared/Breadcrumb.vue";
import { menu1 } from "../../../composable/private/menu1/menu1";
import ModalImport from './../../../components/ModalImport.vue';

const { page, breadcrumbs, dialog, process, headers, rows, tab, items, handleExcelData, getTabs } = menu1();

onMounted(() => { });
</script>

<template>
  <div>
    <v-container>
      <ModalImport :dialogopen="dialog.import" @excel-data="handleExcelData" @submit="dialog.konfirmasi = true"
        @close="dialog.import = false">
      </ModalImport>
      <v-row>
        <v-col cols="12">
          <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
          <UiParentCard title="Input Data">
            <v-btn color="#5e35b1" class="mb-4" @click="dialog.import = true">Import Excel</v-btn>

            <v-tabs class="mt-5 mb-6 text-capitalize" v-model="tab" bg-color="transparent" center-active color="#5e35b1"
              @click="getTabs()" grow>
              <v-tab v-for="item in items" :key="item" :text="item" :value="item"></v-tab>
            </v-tabs>

            <v-data-table :headers="headers" :items="rows" item-value="index" class="elevation-1">
            </v-data-table>
          </UiParentCard>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>