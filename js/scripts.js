document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('hashForm');
    const passwordInput = document.getElementById('password');
    const md5Output = document.getElementById('md5Hash');
    const sha1Output = document.getElementById('sha1Hash');
    const bcryptOutput = document.getElementById('bcryptHash');
    const passwordResult = document.getElementById('passwordResult');
    const copyMd5Button = document.getElementById('copyMd5Button');
    const copySha1Button = document.getElementById('copySha1Button');
    const copyBcryptButton = document.getElementById('copyBcryptButton');
    const clearButton = document.getElementById('clearButton');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const password = passwordInput.value.trim();

        if (password === '') {
            alert('Por favor, insira uma senha.');
            return;
        }

        // Gera os hashes direto no navegador
        const md5Hash = CryptoJS.MD5(password).toString();
        const sha1Hash = CryptoJS.SHA1(password).toString();
        const bcryptHash = dcodeIO.bcrypt.hashSync(password, 10);

        // Exibe os resultados
        passwordResult.textContent = `Senha: ${password}`;
        md5Output.textContent = md5Hash;
        sha1Output.textContent = sha1Hash;
        bcryptOutput.textContent = bcryptHash;
    });


    copyMd5Button.addEventListener('click', function() {
        navigator.clipboard.writeText(md5Output.textContent)
            .then(() => {
                alert('MD5 hash copiado para a área de transferência!');
            })
            .catch(err => {
                console.error('Erro ao copiar o hash MD5:', err);
            });
    });

    copySha1Button.addEventListener('click', function() {
        navigator.clipboard.writeText(sha1Output.textContent)
            .then(() => {
                alert('SHA1 hash copiado para a área de transferência!');
            })
            .catch(err => {
                console.error('Erro ao copiar o hash SHA1:', err);
            });
    });

    copyBcryptButton.addEventListener('click', function() {
        navigator.clipboard.writeText(bcryptOutput.textContent)
            .then(() => {
                alert('Bcrypt hash copiado para a área de transferência!');
            })
            .catch(err => {
                console.error('Erro ao copiar o hash Bcrypt:', err);
            });
    });

    // Função para limpar o formulário e os resultados
    clearButton.addEventListener('click', function() {
        passwordInput.value = '';
        passwordResult.textContent = '';
        md5Output.textContent = '';
        sha1Output.textContent = '';
    });
});
