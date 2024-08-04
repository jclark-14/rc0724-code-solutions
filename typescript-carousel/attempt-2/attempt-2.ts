const $imgs = document.querySelectorAll('img');
const $right2 = document.querySelector('.right') as HTMLAnchorElement;
const $left2 = document.querySelector('.left') as HTMLAnchorElement;
const $dots2 = document.querySelectorAll('.dot');
const $dotDiv2 = document.querySelector('.dots');

const $div = document.querySelector('.main-div');
if (!$imgs || !$right2 || !$left2 || !$dots2 || !$div || !$dotDiv2)
  throw new Error('query failed');
let imgIndex = 0;
let timeId: NodeJS.Timeout;

function changeIndex(num: number): number {
  if (num === -1 && imgIndex === 0) {
    imgIndex = 4;
  } else if (num === -1) {
    imgIndex--;
  }
  if (num === 1 && imgIndex === 4) {
    imgIndex = 0;
  } else if (num === 1) {
    imgIndex++;
  }
  return imgIndex;
}

function auto(): void {
  const timer = setInterval((): void => {
    changeIndex(1);
    changeImg(imgIndex);
  }, 2000);
  timeId = timer;
}

auto();

$div.addEventListener('click', (event: Event): void => {
  const eventTarget = event.target as HTMLElement;
  if (eventTarget.tagName === 'I') {
    clearInterval(timeId);
  }
  if (eventTarget.matches('.left')) {
    changeIndex(-1);
  } else if (eventTarget.matches('.right')) {
    changeIndex(1);
  }
  changeImg(imgIndex);
  auto();
});

$dotDiv2.addEventListener('click', (event: Event): void => {
  clearInterval(timeId);
  const eventTarget = event.target as HTMLElement;
  for (let i = 0; i < $dots2.length; i++)
    if (eventTarget.dataset.view === i.toString()) {
      imgIndex = i;
    }
  changeImg(imgIndex);
  auto();
});

function changeImg(changeIndex: number): void {
  for (let i = 0; i < $imgs.length; i++) {
    if (changeIndex === i) {
      $imgs[i].setAttribute('class', '');
    } else {
      $imgs[i].setAttribute('class', 'hidden');
    }
  }
}

changeImg(imgIndex);
