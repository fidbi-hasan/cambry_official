
  const pages = document.querySelectorAll(".carousel_page");
  const upBtn = document.querySelector(".up_btn");
  const downBtn = document.querySelector(".down_btn");
  let current = 0;

  function showPage(index) {
    pages.forEach((page, i) => {
      page.classList.add("hidden");
      page.classList.remove("active");
      if (i === index) {
        page.classList.remove("hidden");
        // Force reflow for smooth animation restart
        void page.offsetWidth;
        page.classList.add("active");
      }
    });
  }

  upBtn.addEventListener("click", () => {
    current = (current - 1 + pages.length) % pages.length;
    showPage(current);
  });

  downBtn.addEventListener("click", () => {
    current = (current + 1) % pages.length;
    showPage(current);
  });

  // Initialize
  showPage(current);


// // destination card hover functionality (dev_fidbi)
// const cardWrappers = document.querySelectorAll('.card-wrapper');

// cardWrappers.forEach((wrapper) => {
//   const normalCard = wrapper.querySelector('.card-single');
//   const hoverCard = wrapper.querySelector('.card-single-hover');

//   wrapper.addEventListener('mouseenter', () => {
//     normalCard.classList.add('hidden', 'transition-all', 'duration-300');
//     hoverCard.classList.remove('hidden', 'transition-all', 'duration-300');
//   });

//   wrapper.addEventListener('mouseleave', () => {
//     normalCard.classList.remove('hidden');
//     hoverCard.classList.add('hidden');
//   });
// });

document.querySelectorAll('.card-wrapper').forEach((wrapper) => {
    const normal = wrapper.querySelector('.card-single');
    const hover = wrapper.querySelector('.card-single-hover');

    // ensure initial classes
    normal.classList.add('opacity-100', 'scale-100');
    hover.classList.add('opacity-0', 'scale-95', 'pointer-events-none');

    const showHover = () => {
      normal.classList.remove('opacity-100', 'scale-100');
      normal.classList.add('opacity-0', 'scale-95');

      hover.classList.remove('opacity-0', 'scale-95', 'pointer-events-none');
      hover.classList.add('opacity-100', 'scale-100');
    };

    const hideHover = () => {
      normal.classList.remove('opacity-0', 'scale-95');
      normal.classList.add('opacity-100', 'scale-100');

      hover.classList.remove('opacity-100', 'scale-100');
      hover.classList.add('opacity-0', 'scale-95', 'pointer-events-none');
    };

    // mouse
    wrapper.addEventListener('mouseenter', showHover);
    wrapper.addEventListener('mouseleave', hideHover);

    // keyboard accessibility (focus inside/out)
    wrapper.addEventListener('focusin', showHover);
    wrapper.addEventListener('focusout', (e) => {
      if (!wrapper.contains(e.relatedTarget)) hideHover();
    });
  });

