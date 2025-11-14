// destination card hover functionality (dev_fidbi)
const cardWrappers = document.querySelectorAll('.card-wrapper');

cardWrappers.forEach((wrapper) => {
  const normalCard = wrapper.querySelector('.card-single');
  const hoverCard = wrapper.querySelector('.card-single-hover');

  wrapper.addEventListener('mouseenter', () => {
    normalCard.classList.add('hidden');
    hoverCard.classList.remove('hidden');
  });

  wrapper.addEventListener('mouseleave', () => {
    normalCard.classList.remove('hidden');
    hoverCard.classList.add('hidden');
  });
});