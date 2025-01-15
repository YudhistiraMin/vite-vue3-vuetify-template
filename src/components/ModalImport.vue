<script setup>
import { ref, computed, onMounted, watch } from "vue";
import * as XLSX from "xlsx";

const emit = defineEmits(["close", "form_department"]);
const props = defineProps(["dialogopen", "list_department"]);
const dialog = ref(props.dialogopen);
const list = ref(props.list_department);
const required = ref((value) => !!value || "Field harus diisi");
const form = ref({
  department: "",
});

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  // Lakukan sesuatu dengan file yang diunggah
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    const data = new Uint8Array(e.target.result);
    const workbook = XLSX.read(data, { type: "array" });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);
    emit("excel-data", jsonData);
    console.log("isi json data", jsonData);
  };
  reader.readAsArrayBuffer(file);
};

watch(
  () => props.dialogopen,
  (val) => {
    dialog.value = val;
  }
);

watch(
  () => props.list_department,
  (newList) => {
    list.value = newList;
  }
);

// const changeDepartment = (val) => {
//   emit("selected-department", val);
// };

const submit = async () => {};
</script>

<template>
  <v-dialog v-model="dialog" persistent max-width="500px">
    <v-card class="box-shadow">
      <v-card-title class="text-body-2 text-white background-first d-flex">
        <span>Import</span>
        <v-btn
          color="#5e35b1"
          small
          elevation="0"
          variant="plain"
          class="text-capitalize text-white ml-auto"
        >
          <v-icon @click="$emit('close')" small color="#FFFFFF"
            >mdi-close</v-icon
          >
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-row class="pa-4 align-center justify-center text-center">
          <!-- <v-col cols="12" class="pb-0">
            <v-select
              label="Department"
              color="#5e35b1"
              density="compact"
              variant="outlined"
              :items="list"
              v-model="form.department"
              placeholder="--- Pilih department ---"
              item-title="label"
              item-value="value"
              @update:model-value="changeDepartment"
              :rules="[required]"
            >
            </v-select>
          </v-col> -->
          <v-col cols="12">
            <v-file-input
              clearable
              label="Input file"
              accept=".xlsx, .xls, .csv"
              color="#5e35b1"
              density="compact"
              @change="handleFileUpload"
            ></v-file-input>
          </v-col>
        </v-row>
      </v-card-text>
      <v-divider
        style="border: 1px solid #bac0c6; border-radius: 25px"
      ></v-divider>
      <v-card-actions class="mt-2 pb-3 justify-center">
        <v-spacer></v-spacer>
        <v-btn
          outlined
          class="text-capitalize text--white mx-1"
          @click="$emit('close')"
        >
          Batal
        </v-btn>
        <v-btn
          color="#5e35b1"
          variant="outlined"
          class="text-capitalize text-body-2"
          @click="$emit('submit')"
        >
          Simpan
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
  
  <style>
.upload-btn {
  position: relative;
  overflow: hidden;
}

.upload-btn .upload-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.upload-btn input[type="file"] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}
</style>
  