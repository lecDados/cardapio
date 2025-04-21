
const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.conteudo');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove ativo de todos
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.add('hidden'));

      // Ativa o clicado
      tab.classList.add('active');
      const targetId = tab.getAttribute('data-target');
      document.getElementById(targetId).classList.remove('hidden');
    });
  });
