 function criarMensagem() {
    const msg = document.createElement('div');
    msg.classList.add('amor');
    msg.innerText = 'Eu te amo pretinha ❤️';

    // Posição aleatória
    msg.style.left = Math.random() * window.innerWidth + 'px';
    msg.style.top = Math.random() * window.innerHeight + 'px';

    // Tamanho aleatório
    msg.style.fontSize = (20 + Math.random() * 30) + 'px';

    document.body.appendChild(msg);

    // Remover depois de um tempo
    setTimeout(() => {
      msg.remove();
    }, 5000);
  }

  // Criar várias mensagens a cada 300ms
  setInterval(criarMensagem, 300);