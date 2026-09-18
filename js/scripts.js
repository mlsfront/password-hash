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

    function showHashes(hashes) {
        Object.keys(outputs).forEach(function(name) {
            outputs[name].textContent = hashes[name];
            copyButtons[name].disabled = false;
        });
        setStatus('Hashes gerados localmente.', 'success');
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const password = passwordInput.value;
        if (password.trim() === '') {
            setStatus('Digite uma senha para continuar.', 'error');
            passwordInput.focus();
            return;
        }
        showHashes({
            md5: CryptoJS.MD5(password).toString(),
            sha1: CryptoJS.SHA1(password).toString(),
            bcrypt: dcodeIO.bcrypt.hashSync(password, 10)
        });
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