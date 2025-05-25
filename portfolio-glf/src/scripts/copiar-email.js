function copiarEmail() {
    navigator.clipboard.writeText("gustavo.lopesfrancisco.pfn@gmail.com")
        .then(() => alert("Email copiado para a área de transferência!"))
        .catch(() => alert("Erro ao copiar o email."));
}