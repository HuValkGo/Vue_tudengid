import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import StudentsVue from '@/views/Students.vue';
import AddStudentVue from '@/views/AddStudent.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Tudengid',
    component: StudentsVue,
  },
  {
    path: '/newstudent',
    name: 'Lisa tudeng',
    component: AddStudentVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
