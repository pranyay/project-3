let questions= document.querySelectorAll("questions");

questions.forEach((question) => {
  question.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});