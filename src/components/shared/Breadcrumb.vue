<script setup>

const props = defineProps({
  title: String,
  breadcrumbs: Array,
  icon: String
});

</script>
<template>
  <v-row class="page-breadcrumb mb-1 mt-1">
    <v-col cols="12" md="12">
      <v-card variant="flat" class="px-4 py-3">
        <v-row no-gutters class="align-center">
          <v-col md="5">
            <h3 class="text-h6 font-weight-bold">{{ props.title }}</h3>
          </v-col>

          <v-col md="7" sm="12" cols="12">
            <v-breadcrumbs :items="props.breadcrumbs" class="text-subtitle-2 justify-md-end pa-1">
              <template v-slot:divider>
                <div class="d-flex align-center">
                  <v-icon>mdi-chevron-right</v-icon>
                </div>
              </template>
              <template v-slot:prepend>
                <v-icon size="small" icon="mdi-home" class="mr-2" color="#5e35b1"></v-icon>
                <div class="d-flex align-center">
                  <v-icon>mdi-chevron-right</v-icon>
                </div>
              </template>
            </v-breadcrumbs>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<style lang="scss">
.page-breadcrumb {
  .v-toolbar {
    background: transparent;
  }
}
</style>