function configurarBotaoWhatsApp({ telefone, mensagem, seletorBotao = "#btn-whatsapp" }) {
  const botao = document.querySelector(seletorBotao);
  if (!botao) return;

  const numeroLimpo = telefone.replace(/\D/g, "");
  const url = `https://wa.me/${numeroLimpo}?text=${encodeURIComponent(mensagem)}`;
  botao.setAttribute("href", url);
}