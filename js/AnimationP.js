//Wave animation for Text
document.querySelectorAll("[data-wave]").forEach((el) => {
    const text = el.textContent.trim();

    el.setAttribute("aria-label", text);
    el.textContent = "";

    [...text].forEach((char, i) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char;
        span.style.animationDelay = `${i * 0.1}s`;
        span.setAttribute("aria-hidden", "true");
        el.appendChild(span);
    });
});

//Wave animation for tansitions
document.querySelectorAll("[data-wave-edge]").forEach((el) => {
    const NS = "http://www.w3.org/2000/svg";

    const svg = document.createElementNS(NS, "svg");
    svg.setAttribute("class", "wave-edge");
    svg.setAttribute("viewBox", "0 0 1500 150")
    svg.setAttribute("preserveAspectRatio", "none");
    svg.setAttribute("aria-hidden", "true");

    const fill = document.createElementNS(NS, "path");
    fill.setAttribute("class", "wave-fill");
    const line = document.createElementNS(NS, "path");
    line.setAttribute("class", "wave-line");

    svg.append(fill, line);
    el.appendChild(svg);

    // Attributes for sin or cos wave
    const amplitude = 5;
    const waves = 2.5;
    const speed = 0.005;
    const still = window.matchMedia("(perfers-reduced-motion: reduce)").matches;

    function draw(time){
        let d = ""
        for (let x =0; x <= 1500; x+= 20){
            const y = 60 + Math.cos((x/1500)*waves*Math.PI*2+time*speed)*amplitude;
            d += (x === 0 ? "M" : "L") + x + "," +y.toFixed(1)+" ";
        }
        line.setAttribute("d", d);
        fill.setAttribute("d", d + "L1500, 150, L0, 150 z");
        if (!still) requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
});
