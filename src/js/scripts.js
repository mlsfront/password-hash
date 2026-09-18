document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('hashForm');
    const passwordInput = document.getElementById('password');
    const status = document.getElementById('status');
    const outputs = {
        md5: document.getElementById('md5Hash'),
        sha1: document.getElementById('sha1Hash'),
        bcrypt: document.getElementById('bcryptHash')
    };
    const copyButtons = {
        md5: document.getElementById('copyMd5Button'),
        sha1: document.getElementById('copySha1Button'),
        bcrypt: document.getElementById('copyBcryptButton')
    };

    function setStatus(message, type) {
        status.textContent = message;
        status.className = `status ${type || ''}`;
    }

    form.addEventListener('submit', async function(event) {
        event.preventDefault();
        const password = passwordInput.value;
        if (password.trim() === '') {
            setStatus('Digite uma senha para continuar.', 'error');
            passwordInput.focus();
            return;
        }
        setStatus('Gerando hashes...');
        try {
            const response = await fetch('php/hash_generator.php', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ password: password }) });
            if (!response.ok) throw new Error('Resposta invalida do servidor.');
            const data = await response.json();
            if (data.error) throw new Error(data.error);
            Object.keys(outputs).forEach(function(name) {
                outputs[name].textContent = data[name];
                copyButtons[name].disabled = false;
            });
            setStatus('Hashes gerados com sucesso.', 'success');
        } catch (error) {
            setStatus(error.message || 'Nao foi possivel gerar os hashes.', 'error');
        }
    });

    Object.keys(copyButtons).forEach(function(name) {
        copyButtons[name].addEventListener('click', async function() {
            try {
                await navigator.clipboard.writeText(outputs[name].textContent);
                setStatus(`${name.toUpperCase()} copiado para a area de transferencia.`, 'success');
            } catch (error) {
                setStatus('Nao foi possivel copiar este hash.', 'error');
            }
        });
    });

    document.getElementById('clearButton').addEventListener('click', function() {
        passwordInput.value = '';
        Object.keys(outputs).forEach(function(name) {
            outputs[name].textContent = '-';
            copyButtons[name].disabled = true;
        });
        setStatus('Nenhum hash gerado ainda.');
        passwordInput.focus();
    });
});