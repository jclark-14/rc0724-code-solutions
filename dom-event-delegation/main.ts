const $taskList = document.querySelector('.task-list');
if (!$taskList) throw new Error('$tasklist query failed');
$taskList?.addEventListener('click', (event: Event) => {
  const $eventTarget = event.target as HTMLElement;
  console.log('$eventTarget: ', $eventTarget);
  console.log('$eventTarget.tagName: ', $eventTarget.tagName);
  if ($eventTarget.tagName === 'BUTTON') {
    const $nearestParent = $eventTarget.closest('.task-list-item');
    console.log('$$nearestParent: ', $nearestParent);
    $nearestParent?.remove();
  }
});
