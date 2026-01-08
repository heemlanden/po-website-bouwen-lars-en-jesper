var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

window.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("modus") === "dark") {
    document.body.classList.add("dark");
  }
});

function AndereModus() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("modus", "dark");
  } else {
    localStorage.setItem("modus", "light");
  }
}