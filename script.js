    function changeColors(activeSquare) {
      for (let i = 1; i <= 3; i++) {
        const square = document.getElementById(`square${i}`);
        square.classList.toggle('active', i !== activeSquare);
      }
    }