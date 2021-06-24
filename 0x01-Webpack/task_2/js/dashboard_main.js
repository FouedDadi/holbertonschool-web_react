import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';

var btn = document.createElement('<button>Click here to get started</button>');
var p = document.createElement('<p id="count"></p>');
$('body').append('Holberton Dashboard');
$('body').append('Dashboard data for the students');
$('body').append(btn);
$('body').append(p);
$('body').append('Copyright - Holberton School');

const updateCounter = function () {
  var count = 0;
  var disp = document.getElementById('count');
  btn.onclick = function () {
    count++;
    disp.innerHTML(`${count} clicks on the button`);
  };
};
btn.on('click', _.debounce(updateCounter, 500));
