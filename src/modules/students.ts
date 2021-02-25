import { reactive, toRefs } from 'vue';

export interface Student {
  matrixNumber: string;
  firstName: string;
  lastName: string;
  status: string;
  sex: string;
  dateOfBirth: Date;
  age: number;
}
export interface State {
  students: Student[];
}

const state = reactive<State>({
  students: [],
});

let initialized = false;

export default function useStudent() {
  const load = () => {
    if (!initialized) {
      state.students = [
        {
          matrixNumber: '193834IABB',
          firstName: 'Hugo',
          lastName: 'Valk',
          status: 'Aktiivne',
          sex: 'Mees',
          dateOfBirth: new Date(2000 / 10 / 24),
          age: 20,
        },
      ];
      initialized = true;
    }
  };

  const getAge = (dateOfBirth: Date) => {
    var today = new Date();
    var birthDate = new Date(dateOfBirth);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const addStudent = (student: Student) => {
    student.age = getAge(student.dateOfBirth);
    state.students.push(student);
  };

  return { ...toRefs(state), load, addStudent };
}
