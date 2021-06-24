import $ from 'jquery';
import _ from 'lodash';

$('body').append('Holberton Dashboard');
$('body').append('Dashboard data for the students');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('Copyright - Holberton School');

const updateCounter = function () {
  var count = 0;
  $('button').onclick = function () {
    count++;
    $('#count').text(`${count} clicks on the button`);
  };
};
$('button').on('click', _.debounce(updateCounter, 500));
