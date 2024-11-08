     // Seleciona o ícone de hambúrguer e o menu
     const hamburgerIcon = document.getElementById('hamburger-icon');
     const menu = document.querySelector('.navbar ul');

     // Evento de clique para exibir/ocultar o menu
     hamburgerIcon.addEventListener('click', function() {
         menu.classList.toggle('active');
     });

     let lastScrollTop = 0;
     const header = document.querySelector('header');

     window.addEventListener('scroll', function() {
         const scrollTop = window.scrollY;

         if (scrollTop === 0) {
             // No topo da página
             header.classList.remove('scroll-up', 'scroll-down');
             header.style.backgroundColor = 'transparent'; // Mantém transparente no topo
         } else if (scrollTop > lastScrollTop) {
             // Rolando para baixo
             header.classList.add('scroll-down');
             header.classList.remove('scroll-up');
         } else {
             // Rolando para cima
             header.classList.add('scroll-up');
             header.classList.remove('scroll-down');
             header.style.backgroundColor = 'black'; // Fundo preto ao rolar para cima
         }

         lastScrollTop = scrollTop;
     });

         function updateVideoSource() {
         const videoSource = document.getElementById('video-source');
         const screenWidth = window.innerWidth;

             if (screenWidth <= 640) {
                 videoSource.src = './image/videomedio.mp4'; // vídeo para telas pequenas
             } else if (screenWidth <= 868) {
                 videoSource.src = './image/videomedium.mp4'; // vídeo para telas médias
             } else {
                 videoSource.src = './image/backvideo.mp4'; // vídeo para telas grandes
             }

             const video = document.getElementById('responsive-video');
             video.load(); // Carrega o novo vídeo
         }

        // Atualiza o vídeo ao carregar a página
        window.onload = updateVideoSource;
         
        // Atualiza o vídeo ao redimensionar a janela
        window.onresize = updateVideoSource;

        let currentIndex = 0;
        const slides = document.querySelectorAll(".carousel-slide");

        function showSlide(index) {
        const slidesContainer = document.querySelector(".carousel-slides");
        const slideWidth = slides[0].clientWidth;
        slidesContainer.style.transform = `translateX(${-slideWidth * index}px)`;
        }

        function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
        }

        function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
        }


        document.addEventListener('DOMContentLoaded', function() {
            const fadeElements = document.querySelectorAll('.fade-in');
            const scaleElements = document.querySelectorAll('.scale-up');
        
            function checkVisibility() {
                fadeElements.forEach(el => {
                    const rect = el.getBoundingClientRect();
                    if (rect.top < window.innerHeight - 100) {
                        el.classList.add('show');
                    }
                });
        
                scaleElements.forEach(el => {
                    const rect = el.getBoundingClientRect();
                    if (rect.top < window.innerHeight - 100) {
                        el.classList.add('show');
                    }
                });
            }
        
            window.addEventListener('scroll', checkVisibility);
            checkVisibility(); // Verifica a visibilidade inicial
        });


        
        
        
