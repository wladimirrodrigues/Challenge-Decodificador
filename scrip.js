//Adciona um evento que recarrega a pagina ao clicar no logo
document.getElementById("logo").addEventListener("click", function () {
  // Recarrega a página ao clicar no logo
  location.reload();
});
function limparFrase() {
  var textarea = document.getElementById("frase");
  if (textarea.value === "Digite uma frase") {
    textarea.value = ""; // Limpa a frase padrão apenas se ela ainda estiver presente
  }
}

function restaurarFrase() {
  var textarea = document.getElementById("frase");
  if (textarea.value === "") {
    textarea.value = "Digite uma frase"; // Restaura a frase padrão apenas se o campo estiver vazio
  }
}

function criptografar() {
  // Obtém a frase do textarea e converte para minúsculas e sem acentos
  var fraseOriginal = document.getElementById("frase").value.toLowerCase();
  fraseOriginal = removerAcentos(fraseOriginal);

  // Criptografa a frase (substitui algumas letras, por exemplo)
  var fraseCriptografada = criptografarFrase(fraseOriginal);

  // Limpa tudo dentro da div com a classe "fraseCripotografada"
  var divFraseCriptografada = document.querySelector(".fraseCripotografada");
  divFraseCriptografada.innerHTML = "";

  // Cria um novo elemento h2 para exibir a mensagem criptografada
  var novoH2 = document.createElement("h2");
  novoH2.textContent = fraseCriptografada;

  // Adiciona o novo elemento h2 à div
  divFraseCriptografada.appendChild(novoH2);

  var botaoCopiar = document.createElement("button");
  botaoCopiar.textContent = "Copiar";
  botaoCopiar.id = "botaoCopiar"; // Adiciona um ID ao botão Copiar
  botaoCopiar.addEventListener("click", function () {
    // Copia o texto criptografado para a área de transferência
    navigator.clipboard
      .writeText(fraseCriptografada)
      .then(function () {
        alert("Texto copiado com sucesso!");
      })
      .catch(function (err) {
        console.error("Erro ao copiar texto: ", err);
      });
  });

  // Adiciona o botão "Copiar" à div
  divFraseCriptografada.appendChild(botaoCopiar);

  // Limpa a frase no textarea
  document.getElementById("frase").value = "";
}

function criptografarFrase(frase) {
  var resultado = "";

  for (var i = 0; i < frase.length; i++) {
    var char = frase[i];

    // Lógica de substituição conforme especificado
    switch (char) {
      case "e":
        resultado += "enter";
        break;
      case "i":
        resultado += "imes";
        break;
      case "a":
        resultado += "ai";
        break;
      case "o":
        resultado += "ober";
        break;
      case "u":
        resultado += "ufat";
        break;
      default:
        resultado += char;
    }
  }

  return resultado;
}

function removerAcentos(str) {
  // Remove acentos utilizando expressão regular
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function descriptografar() {
  // Obtém a frase criptografada do elemento h2
  var h2MensagemCriptografada = document.querySelector(
    ".fraseCripotografada h2"
  );
  var fraseCriptografada = h2MensagemCriptografada.textContent;

  // Descriptografa a frase
  var fraseDescriptografada = descriptografarFrase(fraseCriptografada);

  // Atualiza a mensagem na div com a classe "fraseCripotografada"
  h2MensagemCriptografada.textContent = fraseDescriptografada;
}

function descriptografarFrase(fraseCriptografada) {
  // Lógica para reverter as substituições
  // Inverta as substituições feitas durante a criptografia
  var resultado = fraseCriptografada
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  return resultado;
}

function removerAcentos(str) {
  // Remove acentos utilizando expressão regular
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Função para colar mensagem criptografada no textarea
function colarMensagemCriptografada() {
  // Obtém a mensagem criptografada da área de transferência
  navigator.clipboard
    .readText()
    .then(function (mensagemCriptografada) {
      // Define a mensagem criptografada no textarea
      document.getElementById("frase").value = mensagemCriptografada;
    })
    .catch(function (err) {
      console.error("Erro ao colar mensagem criptografada: ", err);
    });
}

// Adiciona um evento de clique ao botão "Descriptografar"
document
  .getElementById("botaoDescriptografar")
  .addEventListener("click", descriptografar);

// Modifica a função descriptografar para ser chamada sem parâmetros
function descriptografar() {
  // Obtém a frase criptografada do elemento h2
  var h2MensagemCriptografada = document.querySelector(
    ".fraseCripotografada h2"
  );
  var fraseCriptografada = h2MensagemCriptografada.textContent;

  // Descriptografa a frase
  var fraseDescriptografada = descriptografarFrase(fraseCriptografada);

  // Atualiza a mensagem no textarea
  document.getElementById("frase").value = fraseDescriptografada;

  // Atualiza a mensagem na div com a classe "fraseCripotografada"
  h2MensagemCriptografada.textContent = fraseDescriptografada;
}
