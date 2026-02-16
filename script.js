const API = "http://localhost:3000";

async function salvar() {
  const nome = document.getElementById("nome").value;
  const preco = document.getElementById("preco").value;
  const foto = document.getElementById("foto").value;

  await fetch(`${API}/produtos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, preco, foto })
  });

  carregarProdutos();
}

async function carregarProdutos() {
  const res = await fetch(`${API}/produtos`);
  const produtos = await res.json();

  const lista = document.getElementById("lista");
  const vitrine = document.getElementById("produtos");

  if (lista) lista.innerHTML = "";
  if (vitrine) vitrine.innerHTML = "";

  produtos.forEach(p => {
    if (lista) {
      const li = document.createElement("li");
      li.innerText = `${p.nome} - R$ ${p.preco}`;
      lista.appendChild(li);
    }

    if (vitrine) {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
        <img src="${p.foto}">
        <h3>${p.nome}</h3>
        <p>R$ ${p.preco}</p>
        <button>Comprar</button>
      `;
      vitrine.appendChild(div);
    }
  });
}

carregarProdutos();
