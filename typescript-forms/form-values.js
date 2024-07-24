'use strict';
const $form = document.querySelector('#contact-form');
if (!$form) throw new Error('$form query failed');
$form.addEventListener('submit', (event) => {
  event.preventDefault();
  const $formElements = $form.elements;
  const $values = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log('$values: ', $values);
});
