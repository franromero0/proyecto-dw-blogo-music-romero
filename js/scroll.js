        // Función para manejar el evento de desplazamiento
        function handleScroll(event) {

            const delta = event.deltaY || event.detail || (-event.wheelDelta);
            const increment = 0.5; 
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            const newScroll = currentScroll + (delta * increment);
            window.scrollTo({
                top: newScroll,
                behavior: 'smooth'
            });
            event.preventDefault();
        }
        window.addEventListener('wheel', handleScroll, { passive: false });

