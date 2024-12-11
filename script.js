// Alternar para Modo Escuro
document.getElementById('toggleDarkMode').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

// Função para converter as bases numéricas
document.getElementById("convertButton").addEventListener("click", function () {
    const value = document.getElementById("inputValue").value.trim(); // Remove espaços extras
    const inputBase = parseInt(document.getElementById("inputBase").value);
    const outputBase = parseInt(document.getElementById("outputBase").value);

    if (!value) {
        alert("Por favor, insira um valor a converter.");
        return;
    }

    try {
        // Converte para decimal a partir da base de origem
        const decimalValue = parseInt(value, inputBase);

        // Verifica se o valor é válido na base fornecida
        if (isNaN(decimalValue)) {
            throw new Error("Valor inválido para a base de origem.");
        }

        // Converte o valor decimal para a base de destino
        const convertedValue = decimalValue.toString(outputBase).toUpperCase();
        document.getElementById("conversionResult").innerText = `Resultado: ${convertedValue}`;
        document.getElementById("conversionResult").style.display = "block";
    } catch (error) {
        alert(error.message);
        document.getElementById("conversionResult").style.display = "none";
    }
});

// Função para calcular complemento para 2
document.getElementById("complementButton").addEventListener("click", function () {
    const binary = document.getElementById("binaryInput").value.trim(); // Remove espaços extras

    if (!/^[01]{1,8}$/.test(binary)) {
        alert("Por favor, insira um número binário válido com até 8 bits.");
        document.getElementById("complementResult").style.display = "none";
        return;
    }

    // Calcula o complemento para 2
    const complement = (~parseInt(binary, 2) & 0xff).toString(2).padStart(8, "0");
    document.getElementById("complementResult").innerText = `Complemento para 2: ${complement}`;
    document.getElementById("complementResult").style.display = "block";
});
