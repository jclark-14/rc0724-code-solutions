'use strict';
const $room = document.querySelector('.room');
const $light = document.querySelector('.light');
const $dialog = document.querySelector('dialog');
const $bulbOff = document.querySelector('.bulb-off');
if (!$room || !$light || !$dialog || !$bulbOff)
  throw new Error('The $room or $light query failed');
$light.addEventListener('click', () => {
  $dialog?.showModal();
  $room.className = 'dark-room';
});
$bulbOff.addEventListener('click', () => {
  $dialog?.close();
  $room.className = 'light-room';
});
