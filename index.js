  function baixarPDF() {
    const link = document.createElement("a");
    link.href = "Isaias-Dev_Curriculo.pdf"; // Caminho do arquivo
    link.download = "Isaias-Dev_Curriculo.pdf"; // Nome do arquivo ao baixar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

   var typed = new Typed('.auto-type', {
      strings: ["Isaías Sousa", "Dev Full Stack", ""],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
