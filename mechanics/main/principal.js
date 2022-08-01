algumascoisinhas();

//    //  /// Olho No Fundo ///   ///       ///
 const eye = document.querySelector('#eyeIris');
 window.addEventListener('mousemove', (event) => {
 const x = -(window.innerWidth / 2 - event.pageX) / 7;
 const y = -(window.innerHeight / 2 - event.pageY) / 7;
 eye.style.transform = `translateY(${y}px) translateX(${x}px)`;         
}); 