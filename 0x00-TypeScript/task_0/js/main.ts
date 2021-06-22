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

var bd = document.getElementsByTagName('body')[0];
var table = document.createElement('table');
var th = document.createElement('thead');
var tb = document.createElement('tbody');
var rowh = th.insertRow(0);
var cell1 = rowh.insertCell(0);
var cell2 = rowh.insertCell(1);
cell1.innerHTML = 'firstname';
cell2.innerHTML = 'location';
table.append(th);
studentsList.forEach(function (Student) {
  var row = tb.insertRow(0);
  var cel1 = row.insertCell(0);
  var cel2 = row.insertCell(1);

  cel1.innerHTML = Student.firstName;
  cel2.innerHTML = Student.location;
});

table.append(tb);
bd.append(table);
