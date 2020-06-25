let slideControls = document.querySelectorAll(".slide__arrow"),
movingPart = document.getElementById("moving-part");
slideControls.forEach(el => el.addEventListener("click", e => move(e)))

const move = e => {
  let translateValue;
  e.target.dataset.direction == "prev" ? translateValue = "0%" : translateValue = "-50%";
  movingPart.style.transform = `translateX(${translateValue})`;
}