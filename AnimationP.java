document.querySelectorAll("[data-wave]").forEach((el) => {
    const text = el.textContent.trim();

    el.setAttribute("aria-label", text); 
    el.textContent = "";

    [...text].forEach((char,1){
        const span = document.createElement("span");
        span.textContent = char === " "?"\u00A0": char;
        span.style.animationDelay = '${i*0.1}s';
        span.setAttribute("aria-hidden", "true");
        el.appendChild(span)
    });
});