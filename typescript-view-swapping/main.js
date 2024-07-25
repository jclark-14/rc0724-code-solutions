'use strict';
const $tabContainer = document.querySelector('.tab-container');
const $tabElements = document.querySelectorAll('.tab');
const $viewElements = document.querySelectorAll('.view');
if (!$tabContainer || !$tabElements || !$viewElements)
  throw new Error('$tabContainer , $tabElements or $viewElements query failed');
$tabContainer.addEventListener('click', (event) => {
  const $eventTarget = event.target;
  if ($eventTarget.matches('.tab')) {
    for (let i = 0; i < $tabElements.length; i++) {
      if ($tabElements[i] === $eventTarget) {
        $tabElements[i].className = 'tab active';
      } else {
        $tabElements[i].className = 'tab';
      }
    }
    const $viewData = $eventTarget.dataset.view;
    for (let i = 0; i < $viewElements.length; i++) {
      const $viewDataAtIndex = $viewElements[i].getAttribute('data-view');
      if ($viewDataAtIndex === $viewData) {
        $viewElements[i].className = 'view';
      } else {
        $viewElements[i].className = 'view hidden';
      }
      console.log('element class:', $viewElements[i].getAttribute('class'));
    }
  }
});
