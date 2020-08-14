document.getElementById("footer-text").addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("footer-text").innerHTML = "Rahul Shinde";
}

function bigImg(x) {
    x.style.height = "300px";
    x.style.width = "300px";
  }
  
  function normalImg(x) {
    x.style.height = "200px";
    x.style.width = "200px";
  }