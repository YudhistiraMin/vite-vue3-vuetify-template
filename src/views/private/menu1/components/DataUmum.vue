<script setup>
import { ref, onMounted } from "vue";

</script>

<template>
	<div>
	  <v-data-table :headers="headers" :items="rows" item-value="index" class="elevation-1">
		</v-data-table>
	</div>
</template>