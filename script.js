const API = "http://localhost:3000";

async function comprar(valor) {
  document.getElementById("status").innerText =
    "⏳ Gerando Pix...";

  const res = await fetch(`${API}/pix`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ valor })
  });

  const data = await res.json();

  document.getElementById("status").innerHTML = `
    <p>Escaneie o Pix:</p>
    <img src="${data.qrcode}" width="200">
    <p>⏳ Aguardando pagamento...</p>
  `;
}
