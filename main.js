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
      
      //ブロックにマウスオーバーイベントを追加
      blocks.addEventListener('click', function() {
        // 周辺のブロックにアニメーションを適用
        anime({
          targets: blocks,
          rotate: '1turn',
          duration: 1000,
          easing: 'easeInOutQuad',
        });
      });
      
      container.appendChild(blocks);
    }
  }
}

createBlocks();
window.addEventListener('resize', createBlocks);
