'use strict';
function handleFocus(event) {
  console.log('Focus event fired');
  const $eventTarget = event.target;
  console.log('$eventTarget.name: ', $eventTarget.name);
}
function handleBlur(event) {
  console.log('blur event fired');
  const $eventTarget = event.target;
  console.log('$eventTarget.name: ', $eventTarget.name);
}
function handleInput(event) {
  const $eventTarget = event.target;
  console.log(
    '$eventTarget.name: ',
    $eventTarget.name,
    '$eventTarget.value: ',
    $eventTarget.value
  );
}
const $inputName = document.querySelector('#user-name');
const $inputEmail = document.querySelector('#user-email');
const $textMessage = document.querySelector('#user-message');
if (!$inputName || !$inputEmail || !$textMessage)
  throw new Error(
    'The $inputName or $inputEmail or $textMessage query failed.'
  );
$inputName.addEventListener('focus', handleFocus);
$inputName.addEventListener('blur', handleBlur);
$inputName.addEventListener('input', handleInput);
$inputEmail.addEventListener('focus', handleFocus);
$inputEmail.addEventListener('blur', handleBlur);
$inputEmail.addEventListener('input', handleInput);
$textMessage.addEventListener('focus', handleFocus);
$textMessage.addEventListener('blur', handleBlur);
$textMessage.addEventListener('input', handleInput);
