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

function AndereModus() {
  document.body.classList.toggle("dark");
  var isDark = document.body.classList.contains("dark");
  
  console.log(isDark);
  //if(localStorage.getItem("mode") == null)
  //{
  //  window.alert("help mij asebief");
  //  localStorage.setItem("mode", document.body.classList.item('dark'));
  //}
  //window.alert(localStorage.getItem("mode"));
  //localStorage.setItem("mode", document.body.classList.item('dark'));
} 