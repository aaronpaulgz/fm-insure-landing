let $hamburger = document.getElementById("hamburger");
let $close = document.getElementById("close");
let $mobModal = document.getElementById("mobModal");

const showModal = () => {
  $mobModal.style.display = "block";
  $close.style.display = "block";
  $hamburger.style.display = "none";
};

const hideModal = () => {
  $mobModal.style.display = "none";
  $close.style.display = "none";
  $hamburger.style.display = "block";
};
