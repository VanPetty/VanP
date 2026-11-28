//General Javascript stuff
//Photo stuff carasell, made adapatable for future use
document.querySelectorAll("[data-carousel]").forEach(carousel => {
    const photos = carousel.dataset.photos.split(",").map(p => p.trim());
    const img = carousel.querySelector("img");
    let current = 0;

    function show(){
        const img = slide.querySelector("img");
        img.src = photos[current];
    }
    //Foward click (right)
    carousel.querySelector("[data-next]").addEventListener("click", () =>{
        current = (current + 1)%photos.length;
        show();
    });
    //Back Click (left)
    carousel.querySelector("[data-prev]").addEventListener("click", () => {
        current = (current - 1 + photos.length)%photo.lenght;
        show();
    });
});