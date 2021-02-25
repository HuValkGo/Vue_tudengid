<template>
  <div
    class="min-h-screen flex justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="text-center">
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div
            class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
          >
            <div
              class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
            >
              <table class="min-w-full divide-y divide-gray-200">
                <TableHeader></TableHeader>
                <Student
                  v-for="item in students"
                  :key="item.matrixNumber"
                  :student="item"
                ></Student>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import outsideStudents from '@/modules/students';
import Student from './Student.vue';
import TableHeader from '@/components/TableHeader.vue';
export default defineComponent({
  components: {
    Student,
    TableHeader,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    const { students, load } = outsideStudents();
    onMounted(() => {
      load();
    });

    return { students };
  },
});
</script>

<style scoped></style>
