interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

const $form = document.querySelector('#contact-form') as HTMLFormElement;
if (!$form) throw new Error('$form query failed');
$form.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  const $formElements = $form.elements as FormElements;
  const $values: any = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log('$values: ', $values);
});
