interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
  workFromHome() {
    return 'Working from home';
  }
  getCoffeeBreak() {
    return 'Getting a coffee break';
  }
  workDirectorTasks() {
    return 'Getting to director tasks';
  }
}

export class Teacher implements TeacherInterface {
  workFromHome() {
    return 'Cannot work from home';
  }
  getCoffeeBreak() {
    return 'Cannot have a break';
  }
  workTeacherTasks() {
    return 'Getting to work';
  }
}

export const createEmployee = (salary: number | string): Director | Teacher => {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
};

export function isDirector(
  employee: TeacherInterface | DirectorInterface
): employee is Director {
  return employee instanceof Director;
}

export function executeWork(
  employee: TeacherInterface | DirectorInterface
): string {
  let result;
  if (isDirector(employee)) result = employee.workDirectorTasks();
  else {
    result = employee.workTeacherTasks();
  }
  return result;
}
type Subjects = 'History' | 'Math';

export function teachClass(todayClass: Subjects): string {
  if (todayClass === 'History') {
    return 'Teaching History';
  }
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
}
