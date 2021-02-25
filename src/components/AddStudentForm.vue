<template>
  <div
    class="min-h-screen flex justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8">
      <div class="mt-8 space-y-6">
        <div>
          <label for="matrixNumber">Matrikli number</label>
          <input
            id="matrixNumber"
            v-model="student.matrixNumber"
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Tudengi matrikli number"
          />
        </div>
        <div>
          <label for="firstName">Eesnimi</label>
          <input
            id="firstName"
            v-model="student.firstName"
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Tudengi eesnimi"
          />
        </div>
        <div>
          <label for="lastName">Perekonnanimi</label>
          <input
            id="lastName"
            v-model="student.lastName"
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Tudengi perekonnanimi"
          />
        </div>
        <div>
          <label for="status">Staatus</label>
          <select
            id="status"
            v-model="student.status"
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          >
            <option disabled value="">Vali palun üks</option>
            <option value="Aktiivne">Aktiivne</option>
            <option value="Mitteaktiivne">Mitteaktiivne</option>
          </select>
        </div>
        <div>
          <label for="sex">Sugu</label>
          <select
            id="sex"
            v-model="student.sex"
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          >
            <option disabled value="">Vali üks</option>
            <option value="Mees">Mees</option>
            <option value="Naine">Naine</option>
          </select>
        </div>
        <div>
          <label for="dateOfBirth">Sünnikuupäev</label>
          <input
            id="dateOfBirth"
            v-model="student.dateOfBirth"
            type="date"
            max="2020-12-31"
            min="1960-01-02"
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Tudengi sünnikuupäev"
          />
        </div>
        <button
          class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          @click="submitForm"
        >
          Lisa
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, Ref, ref } from 'vue';
import outsideStudents, { Student } from '@/modules/students';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const router = useRouter();

    const student: Ref<Student> = ref({
      matrixNumber: '',
      firstName: '',
      lastName: '',
      status: '',
      sex: '',
      dateOfBirth: new Date(),
      age: 0,
    });
    const { load, addStudent } = outsideStudents();
    onMounted(() => {
      load();
    });
    const submitForm = () => {
      addStudent({ ...student.value });
      student.value.matrixNumber = '';
      student.value.firstName = '';
      student.value.lastName = '';
      student.value.status = '';
      student.value.sex = '';
      student.value.dateOfBirth = new Date();
      student.value.age = 0;

      router.push({ name: 'Tudengid' });
    };

    return { student, submitForm };
  },
});
</script>
