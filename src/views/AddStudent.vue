<template>
  <AddStudentForm />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AddStudentForm from '@/components/AddStudentForm.vue';

export default defineComponent({
  components: {
    AddStudentForm,
  },
  setup() {
    return {};
  },
});
</script>
