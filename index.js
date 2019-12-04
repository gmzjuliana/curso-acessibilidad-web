window.onload = () => {
  document.querySelector(".arrow-right").addEventListener("click", clickRight);
  document.querySelector(".arrow-left").addEventListener("click", clickLeft);
  document
    .querySelector(".send-button")
    .addEventListener("click", validateForm);
  document.querySelectorAll(".project").forEach(element => {
    element.addEventListener("click", e => openModal(e));
    element.addEventListener("keyup", e => openModal(e, true));
  });
  document.body.addEventListener("click", e => closeModal(e));
  document.body.addEventListener("keyup", e => listenForEsc(e));
  document
    .querySelector(".close-modal")
    .addEventListener("click", e => closeModal(e));
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
  switch (newValue) {
    case -166:
      document.querySelector(".project1").removeAttribute("tabindex");
      document.querySelector(".project1").setAttribute("aria-hidden", true);
      document.querySelector(".project4").removeAttribute("aria-hidden");
      document.querySelector(".project4").setAttribute("tabindex", "0");
      break;
    case -332:
      document.querySelector(".project2").removeAttribute("tabindex");
      document.querySelector(".project2").setAttribute("aria-hidden", true);
      document.querySelector(".project5").removeAttribute("aria-hidden");
      document.querySelector(".project5").setAttribute("tabindex", "0");
      break;
    default:
      break;
  }
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
  switch (newValue) {
    case -166:
      document.querySelector(".project5").removeAttribute("tabindex");
      document.querySelector(".project5").setAttribute("aria-hidden", true);
      document.querySelector(".project2").removeAttribute("aria-hidden");
      document.querySelector(".project2").setAttribute("tabindex", "0");
      break;
    case 0:
      document.querySelector(".project4").removeAttribute("tabindex");
      document.querySelector(".project4").setAttribute("aria-hidden", true);
      document.querySelector(".project1").removeAttribute("aria-hidden");
      document.querySelector(".project1").setAttribute("tabindex", "0");
      break;
    default:
      break;
  }
}

function validateForm() {
  const nameField = document.getElementById("name");
  if (nameField.value === "") {
    document.getElementById("name-error").innerHTML = "! Para enviar el form, se necesita un nombre";
  } else {
    showNotification();
  }
}

function showNotification() {
  document.getElementById("name-error").innerHTML = "";
  document.querySelector(".form-container").reset();
  document.querySelector(".notification").style.display = "flex";
  document.querySelector(".notification").innerHTML = "El formulario fue enviado sin errores"
  setTimeout(function() {
    document.querySelector(".notification").style.display = "none";
  }, 3000);
}

function openModal(e, isKeyUp) {
  if (isKeyUp && e.keyCode !== 13) {
    return;
  }
  document.querySelector(".modal-container").style.display = "flex";
  document.querySelector(".modal-header").focus();
}

function listenForEsc(e) {
  if (e.keyCode === 27) {
    closeModal(e);
  }
}

function closeModal(e) {
  if (
    e.target.className.includes("project") ||
    e.target.className === "modal"
  ) {
    return;
  } else {
    document.querySelector(".modal-container").style.display = "none";
  }
}
