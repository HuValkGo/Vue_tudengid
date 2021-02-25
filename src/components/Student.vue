<template>
  <TableBody :student="student"></TableBody>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Student } from '@/modules/students';
import TableBody from '@/components/TableBody.vue';

export default defineComponent({
  name: 'Student',
  components: {
    TableBody,
  },
  props: {
    student: {
      type: Object as PropType<Student>,
      required: true,
    },
  },
});
</script>
