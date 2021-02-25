<template>
  <tbody class="bg-white divide-y divide-gray-200">
    <tr>
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="flex items-center">
          {{ student.matrixNumber }}
        </div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="flex items-center">
          {{ student.firstName }}
        </div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="flex items-center">
          {{ student.lastName }}
        </div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <span
          v-if="student.status === 'Aktiivne'"
          class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
        >
          {{ student.status }}
        </span>
        <span
          v-else
          class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800"
        >
          {{ student.status }}
        </span>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="flex items-center">
          {{ student.sex }}
        </div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="flex items-center">
          {{ student.age }}
        </div>
      </td>
    </tr>
  </tbody>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Student } from '@/modules/students';

export default defineComponent({
  name: 'TableBody',
  props: {
    student: {
      type: Object as PropType<Student>,
      required: true,
    },
  },
});
</script>
