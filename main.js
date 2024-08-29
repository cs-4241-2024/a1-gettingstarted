function rainbow() {
  const text_elements = Array.from(document.querySelectorAll("*")).filter(
    (element) => element.innerText?.length > 0,
  );

  text_elements.forEach((element, index) => {
    let hue = (index * 10) % 360;
    const interval = setInterval(() => {
      element.style.color = `hsl(${hue}, 100%, 50%)`;
      hue = (hue + 50) % 360;
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      element.style.color = "";
    }, 2000);
  });
}

document.querySelector("#rainbow").addEventListener("click", rainbow);
