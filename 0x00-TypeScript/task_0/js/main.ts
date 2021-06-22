'use strict';
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

var Student1: Student = {
  firstName: 'foued',
  lastName: 'dadi',
  age: 29,
  location: 'Gabes',
};

var Student2: Student = {
  firstName: 'lycan',
  lastName: 'black',
  age: 29,
  location: 'Gabes',
};

const studentsList: Student[] = [Student1, Student2];

