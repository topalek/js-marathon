const slides = document.querySelectorAll('.slide')

slides.forEach(slide=>{
  slide.addEventListener('click',(e)=>{
      clearActiveClasses()
      slide.classList.add('active')
  })
})

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}