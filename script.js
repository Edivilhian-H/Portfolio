function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profileImg")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avater-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
