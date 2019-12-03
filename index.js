window.onload = () => {
  document.querySelector(".arrow-right").addEventListener("click", clickRight);
  document.querySelector(".arrow-left").addEventListener("click", clickLeft);
  document
    .querySelector(".send-button")
    .addEventListener("click", showNotification);
  document.querySelectorAll(".project").forEach(element => {
    element.addEventListener("click", (e) => openModal(e));
  });
  document.body.addEventListener('click', (e) => closeModal(e))
};

function clickRight() {
  const currentLeft = parseInt(
    getComputedStyle(document.querySelector(".project-container")).left,
    10
  );
  if (currentLeft < -166) {
    return;
  }
  let newValue = currentLeft - 166;
  document.querySelector(".project-container").style.left = `${newValue}px`;
}

function clickLeft() {
  const currentLeft = parseInt(
    getComputedStyle(document.querySelector(".project-container")).left,
    10
  );
  if (currentLeft === 0) {
    return;
  }
  let newValue = currentLeft + 166;
  document.querySelector(".project-container").style.left = `${newValue}px`;
}

function showNotification() {
  document.querySelector(".notification").style.display = "flex";
  setTimeout(function() {
    document.querySelector(".notification").style.display = "none";
  }, 3000);
}

function openModal(e) {
    document
    .querySelector(".modal-container").style.display = "flex";
}

function closeModal(e) {
    if (e.target.className.includes("project") || e.target.className === "modal") {
        return
    } else {
        document.querySelector(".modal-container").style.display = "none";
    }
}
