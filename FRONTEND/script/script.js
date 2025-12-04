document.addEventListener('DOMContentLoaded', () => {
    const emblaNode = document.querySelector('.embla__viewport');

    if (emblaNode && typeof EmblaCarousel !== 'undefined' && typeof EmblaCarouselAutoplay !== 'undefined') {
        
        // Opções do Autoplay: avanço automático a cada 3 segundos
        const AUTOPLAY_OPTIONS = { 
            delay: 3000, 
            stopOnInteraction: true, 
        };
        
        // Opções principais do Embla: loop e centralização
        const EMBLA_OPTIONS = {
            loop: true, 
            align: 'center', 
        };

        // Inicializa o Embla Carousel, incluindo o plugin Autoplay
        const emblaApi = EmblaCarousel(
            emblaNode, 
            EMBLA_OPTIONS, 
            [EmblaCarouselAutoplay(AUTOPLAY_OPTIONS)]
        );

        console.log("Embla Carousel pronto: Loop, Centralização e Autoplay ativos!");
        
    } else {
        console.error("Erro: Verifique se as bibliotecas Embla Carousel e Autoplay foram importadas corretamente no HTML.");
    }
});






