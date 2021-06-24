import $ from 'jquery';
import _ from 'lodash';

var btn = document.createElement('<button>Click here to get started</button>');
var p = document.createElement('<p id="count"></p>');
$('body').append('Holberton Dashboard');
$('body').append('Dashboard data for the students');
$('body').append(btn);
$('body').append(p);
$('body').append('Copyright - Holberton School');

let count = 0;
const updateCounter = function () {
  count += 1;
  const ct = document.getElementById('count');
  ct.text(`${count} clicks on the button`);
};
btn.on('click', _.debounce(updateCounter, 500));
