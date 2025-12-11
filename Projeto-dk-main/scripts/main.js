document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       FUNDO ANIMADO (ATRÁS)
    ========================== */
    const canvas = document.createElement("canvas");
    canvas.id = "data-bg";
    document.documentElement.prepend(canvas);

    const ctx = canvas.getContext("2d");

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    const dots = Array.from({ length: 130 }).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.5,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
    }));

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "rgba(229,9,20,0.6)";

        dots.forEach(dot => {
            dot.x += dot.dx;
            dot.y += dot.dy;

            if (dot.x < 0 || dot.x > canvas.width) dot.dx *= -1;
            if (dot.y < 0 || dot.y > canvas.height) dot.dy *= -1;

            ctx.beginPath();
            ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
            ctx.fill();
        });

        requestAnimationFrame(animate);
    }

    animate();

    /* =========================
       EFEITO DIGITAÇÃO NO H1
    ========================== */
    /* =========================
      EFEITO DIGITAÇÃO CORRETO
   ========================= */
    /* =========================
   EFEITO DIGITAÇÃO (GLOBAL)
========================= */
    const h1 = document.querySelector("h1");

    if (h1) {
        const texto = h1.textContent.trim();
        h1.textContent = "";
        let i = 0;

        const escrever = setInterval(() => {
            if (i < texto.length) {
                h1.textContent += texto[i];
                i++;
            } else {
                clearInterval(escrever);
            }
        }, 45);
    }


    /* =========================
       HEADER REATIVO
    ========================== */
    window.addEventListener("scroll", () => {
        const header = document.querySelector(".header");
        if (!header) return;

        if (scrollY > 40) {
            header.classList.add("header-ativo");
        } else {
            header.classList.remove("header-ativo");
        }
    });

});
<script>
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
</script>
