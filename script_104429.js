const testimonials = document.querySelectorAll(".card-wrapper");
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn')
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;

function showTestimonial(index){
    testimonials.forEach((testimonial) => {
        testimonial.classList.remove("active")
    })
    dots.forEach((dot)=>{
        dot.classList.remove('active-dot')
    })

     testimonials[index].classList.add("active");

    dots[index].classList.add("active-dot");
}

nextBtn.addEventListener("click",()=>{
    currentIndex++
    if(currentIndex >= testimonials.length){
        currentIndex=0
    }
     showTestimonial(currentIndex)
})

prevBtn.addEventListener("click",()=>{
    currentIndex--
    if(currentIndex  < 0){
        currentIndex= testimonials.length - 1
    }
     showTestimonial(currentIndex)
})

dots.forEach((dot) => {
    dot.addEventListener("click", () => {

        currentIndex = Number(dot.dataset.index);

        showTestimonial(currentIndex);
    });
});

showTestimonial(currentIndex);