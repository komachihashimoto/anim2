'use strict';

const container = document.querySelector(".container");
const blockSize = 30;

function createBlocks() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  const numRows = Math.floor(window.innerHeight / blockSize);
  const numCols = Math.floor(window.innerWidth / blockSize);

  for(let i = 0; i <= numRows; i++) {
    for(let j = 0; j <= numCols; j++) {
      const blocks = document.createElement("div");
      blocks.classList.add("block");
      blocks.style.height = blockSize + 'px';
      blocks.style.width = blockSize + 'px';
      blocks.style.top = (i * blockSize) + 'px';
      blocks.style.left = (j * blockSize) + 'px';
      container.appendChild(blocks);
    }
  }
}


createBlocks();
window.addEventListener('resize', createBlocks);


let timeline = anime.timeline({
  loop: true
});

timeline
.add({
  targets: '.block',
  rotate: '1turn',
  duration: 5000,
  easing: 'easeInOutQuad',
})
.add({
  targets: '.block',
  scale: 0.5,
  rotate: '5turn',
  duration: 3000,
  borderRadius: '20%',
})
.add({
  targets: '.block',
  scale: 1,
  rotate: '5turn',
  duration: 5000,
  borderRadius: '0%',
});
