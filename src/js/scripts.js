document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('hashForm');
    const passwordInput = document.getElementById('password');
    const md5Output = document.getElementById('md5Hash');
    const sha1Output = document.getElementById('sha1Hash');
    const passwordResult = document.getElementById('passwordResult');
    const copyMd5Button = document.getElementById('copyMd5Button');
    const copySha1Button = document.getElementById('copySha1Button');
    const clearButton = document.getElementById('clearButton');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const password = passwordInput.value.trim();

        if (password === '') {
            alert('Por favor, insira uma senha.');
            return;
        }

        fetch('php/hash_generator.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ password: password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert(data.error);
                return;
            }

            // Exibe a senha no resultado
            passwordResult.textContent = `Senha: ${data.password}`;
            md5Output.textContent = data.md5;
            sha1Output.textContent = data.sha1;
        })
        .catch(error => {
            console.error('Erro ao gerar hashes:', error);
        });
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

    // Função para limpar o formulário e os resultados
    clearButton.addEventListener('click', function() {
        passwordInput.value = '';
        passwordResult.textContent = '';
        md5Output.textContent = '';
        sha1Output.textContent = '';
    });
});