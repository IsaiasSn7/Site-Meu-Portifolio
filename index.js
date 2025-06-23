  function baixarPDF() {
    const link = document.createElement("a");
    link.href = "isaias sousa.pdf"; // Caminho do arquivo
    link.download = "isaias sousa.pdf"; // Nome do arquivo ao baixar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }