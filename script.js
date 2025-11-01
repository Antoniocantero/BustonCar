let currentSlide = 0;
      const slides = document.querySelectorAll(".carousel-item");
      const dots = document.querySelectorAll(".dot");
      const totalSlides = slides.length;

      function showSlide(n) {
        if (n >= totalSlides) currentSlide = 0;
        if (n < 0) currentSlide = totalSlides - 1;

        const carouselInner = document.querySelector(".carousel-inner");
        carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;

        dots.forEach((dot) => dot.classList.remove("active"));
        dots[currentSlide].classList.add("active");
      }

      function moveCarousel(n) {
        currentSlide += n;
        showSlide(currentSlide);
      }

      function goToSlide(n) {
        currentSlide = n;
        showSlide(currentSlide);
      }

      const feedbacks = {
        feedback1: {
          img: "feedback1.jpg",
          text: `
        <h3>Vanessa S. – Rio de Janeiro (RJ)</h3>
        <p>⭐⭐⭐⭐⭐</p>
        <p>Aluguei um carro para um evento de trabalho e tudo correu perfeitamente.
        A empresa foi rápida, eficiente e muito profissional. Já indiquei para vários colegas!</p>
      `,
        },
        feedback2: {
          img: "feedback2.jpg",
          text: `
        <h3>Ricardo M. – São Paulo (SP)</h3>
        <p>⭐⭐⭐⭐⭐</p>
        <p>Excelente atendimento! O carro estava impecável e a equipe foi super atenciosa do início ao fim.</p>
      `,
        },
        feedback3: {
          img: "feedback3.jpg",
          text: `
        <h3>Fernanda A. – Curitiba (PR)</h3>
        <p>⭐⭐⭐⭐⭐</p>
        <p>Serviço de primeira. A entrega foi rápida e o veículo estava em ótimas condições.</p>
      `,
        },
      };

      function openFeedback(id) {
        const modal = document.getElementById("feedbackModal");
        const img = document.getElementById("modalImg");
        const text = document.getElementById("modalText");

        img.src = feedbacks[id].img;
        text.innerHTML = feedbacks[id].text;

        modal.style.display = "flex";
      }

      function closeFeedback() {
        document.getElementById("feedbackModal").style.display = "none";
      }

      window.onclick = function (event) {
        const modal = document.getElementById("feedbackModal");
        if (event.target === modal) {
          modal.style.display = "none";
        }
      };

      // Auto-play
      setInterval(() => {
        currentSlide++;
        showSlide(currentSlide);
      }, 5000);

      // Smooth scroll
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        });
      });

      // Form submission
      document
        .querySelector(".contact-form")
        .addEventListener("submit", (e) => {
          e.preventDefault();
          alert(
            "Mensagem enviada com sucesso! Entraremos em contato em breve."
          );
          e.target.reset();
        });
