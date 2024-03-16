var elements = document.querySelectorAll('.dm-hide');
for (var i = 0; i < elements.length; i++) {
  elements[i].hidden = true;
}
hideContent();
document.getElementById("dropdown-toggle").addEventListener("click", function (ev) {
  ev.preventDefault();
  if (document.getElementById("dropdown-menu").style.opacity === "1") {
    document.getElementById("dropdown-menu").style.opacity = "0";
    document.getElementById("dropdown").classList.remove("open")
    setTimeout(hideContent, 500);

    var elements = document.querySelectorAll('.dm-hide');
    for (var i = 0; i < elements.length; i++) {
      elements[i].hidden = true;
    }

  } else {
    document.getElementById("dropdown-menu").style.opacity = "1";
    showContent();
    document.getElementById("dropdown").classList.add("open")
    var elements = document.querySelectorAll('.dm-hide');
    for (var i = 0; i < elements.length; i++) {
      elements[i].hidden = false;
    }
  }
});
function showContent() {
  document.getElementById("dropdown-menu").hidden = false;
}
function hideContent() {
  document.getElementById("dropdown-menu").hidden = true;
}

const toggler =  document.getElementById("theme-toggle");
if (getCookie("dark") === "1") {
  document.body.classList.add('dark');
  toggler.checked = true;
}

//const toggler =  document.querySelector("#theme-toggle");
const label = document.querySelector('label[for="theme-toggle"]');

toggler.addEventListener('change', () => {
  //toggler.checked = !toggler.checked;
  if (toggler.checked) {
    document.body.classList.add('dark');
    document.cookie = "dark=1";
  } else {
    document.body.classList.remove('dark');
    document.cookie = "dark=0";
  }
});
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
