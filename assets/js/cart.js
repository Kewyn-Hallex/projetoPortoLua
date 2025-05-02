// Atualiza o contador no carrinho e o banner com total
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartCountElement = document.getElementById('cart-count');
  const badge = document.getElementById('cart-count-badge');
  const totalElement = document.getElementById('cart-total');
  const banner = document.getElementById('cart-banner');

  // Atualiza quantidade no ícone
  if (cartCountElement) {
    cartCountElement.textContent = cart.length;
  }

  // Atualiza badge
  if (badge) {
    badge.textContent = cart.length;
  }

  // Atualiza total do carrinho
  if (totalElement) {
    const total = cart.reduce((sum, item) => {
      const valor = parseFloat(item.price.replace('R$', '').replace(',', '.')) || 0;
      return sum + valor;
    }, 0);
    totalElement.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
  }

  // Exibe o banner somente se houver itens
  if (banner) {
    banner.style.display = cart.length > 0 ? 'flex' : 'none';
  }
}

// Chamada inicial ao carregar a página
updateCartCount();

const buttons = document.querySelectorAll('.card-button');

// Notificação de sucesso
const notyf = new Notyf({
  position: {
    x: 'center',
    y: 'top',
  },
  duration: 2500,
  types: [
    {
      type: 'success',
      background: '#4BB543',
      icon: {
        className: 'fas fa-check-circle',
        tagName: 'i',
        color: '#fff'
      }
    },
    {
      type: 'error',
      background: '#FF4C4C',
      icon: {
        className: 'fas fa-times-circle',
        tagName: 'i',
        color: '#fff'
      }
    }
  ]
});

// Evento de clique nos botões de reserva
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.card');
    const title = card.querySelector('.card-title').textContent;
    const price = card.querySelector('.card-price').textContent;
    const image = card.querySelector('.card-image').getAttribute('src');

    const adultos = document.getElementById('adult-count').textContent;
    const criancas = document.getElementById('child-count').textContent;

    // Verifica se a variável roomCount existe
    if (typeof roomCount === 'undefined') {
      notyf.error('Erro: número de quartos selecionados não encontrado.');
      return;
    }

    const quartosSelecionados = roomCount;

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Limita número de quartos
    if (cart.length >= quartosSelecionados) {
      notyf.error('Você já adicionou o número máximo de quartos selecionados!');
      return;
    }

    const room = { title, price, image, adultos, criancas, quartos: 1 };
    cart.push(room);
    localStorage.setItem('cart', JSON.stringify(cart));

    // Atualiza contador e banner
    updateCartCount();

    // Notifica sucesso
    notyf.success(`"${title}" adicionado à sua reserva!`);
  });
});
