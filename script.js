function toggleMode() {
  // 1. Pegar o elemento HTML (o documento inteiro)
  const html = document.documentElement;
  
  // 2. A Lógica: Se tem a classe "light", tira. Se não tem, coloca.
  
  /* MODO "HARD" (Explicativo):
  if(html.classList.contains('light')) {
    html.classList.remove('light');
  } else {
    html.classList.add('light');
  }
  */

  // MODO SÊNIOR (Simplificado):
  html.classList.toggle('light');
}