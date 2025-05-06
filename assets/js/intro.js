setTimeout(() => {
    const intro = document.getElementById('intro');
    const content = document.getElementById('site-content');
  
    // Inicia o fade-out da intro
    intro.style.opacity = '0';
  
    // Após o fade-out (1s), esconde a intro e mostra o conteúdo com fade-in
    setTimeout(() => {
      intro.style.display = 'none';
      content.style.display = 'block';
  
      // Dá um pequeno delay para o fade-in funcionar
      setTimeout(() => {
        content.classList.add('visible');
      }, 50);
    }, 500); // Tempo do fade-out
  }, 3000); // Tempo da intro antes da transição
  