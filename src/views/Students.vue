<template>
  <div>
    <StudentList title="Tudengite nimekiri" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import StudentList from '@/components/StudentList.vue';

export default defineComponent({
  components: {
    StudentList,
  },
  setup() {
    return {};
  },
});
</script>
