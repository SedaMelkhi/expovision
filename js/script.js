const btn = document.getElementById('application');
const form = document.getElementById('form');

btn.addEventListener('click', () => {
  form.style.display = 'flex';
});

form.addEventListener('click', (e) => {
  if (e.target.classList.contains('form')) {
    form.style.display = 'none';
  }
});

function Marquee(selector, speed) {
  const parentSelector = document.querySelector(selector);
  const clone = parentSelector.innerHTML;
  const firstElement = parentSelector.children[0];
  let i = 0;
  console.log(firstElement);
  parentSelector.insertAdjacentHTML('beforeend', clone);
  parentSelector.insertAdjacentHTML('beforeend', clone);

  setInterval(function () {
    firstElement.style.marginLeft = "-" + i + "px";
    if (i > firstElement.clientWidth) {
      i = 0;
    }
    i = i + speed;
  }, 0);
}
window.addEventListener('load', Marquee('.marquee', 0.2));