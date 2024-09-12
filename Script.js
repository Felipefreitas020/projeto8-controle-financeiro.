let currentMoney = parseInt(prompt("Digite o valor que você tem em dinheiro:"));
while (true) {
  alert(`Você tem R$ ${currentMoney} disponível.\n\nO que você deseja fazer?\n1. Adicionar dinheiro\n2. Remover dinheiro\n3. Sair`);
  let choice = prompt("Digite o número da opção desejada:");
  if (choice === "1") {
    let amountToAdd = parseInt(prompt("Digite a quantia a ser adicionada:"));
    currentMoney += amountToAdd;
  } else if (choice === "2") {
    let amountToRemove = parseInt(prompt("Digite a quantia a ser removida:"));
    if (currentMoney - amountToRemove < 0) {
      alert("Saldo insuficiente. A remoção não pode ser realizada.");
    } else {
      currentMoney -= amountToRemove;
    }
  } else if (choice === "3") {
    alert("Saindo do programa...");
    break; 
  } else {
    alert("Opção inválida. Tente novamente.");
  }
}

