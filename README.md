# HashLab

Ferramenta web para estudar e comparar hashes de senha em um ambiente de desenvolvimento. O projeto mostra MD5, SHA-1 e bcrypt e permite copiar cada resultado.

> **Atenção:** MD5 e SHA-1 são algoritmos legados e não devem ser usados para armazenar senhas. Para aplicações reais, use `password_hash()` com bcrypt ou Argon2id e valide com `password_verify()`.

## Versões disponíveis

O repositório contém duas versões com a mesma interface:

- **Raiz (`index.html`)**: gera os três hashes no navegador. A senha não é enviada para um servidor. Depende de CryptoJS e bcryptjs carregados via CDN.
- **`src/`**: gera os hashes através de `src/php/hash_generator.php`. A senha é enviada ao endpoint PHP, mas não é devolvida na resposta.

## Como executar

### Versão local

Abra `index.html` no navegador ou sirva a pasta raiz com um servidor HTTP local:

```bash
php -S localhost:8000
```

Acesse <http://localhost:8000>.

### Versão PHP

É necessário ter PHP instalado. Na raiz do projeto, execute:

```bash
php -S localhost:8000 -t src
```

Acesse <http://localhost:8000>.

## Funcionalidades

- Geração de MD5, SHA-1 e bcrypt.
- Preservação do valor digitado, incluindo espaços significativos.
- Cópia individual dos hashes para a área de transferência.
- Limpeza completa dos resultados e da senha digitada.
- Mensagens de estado sem uso de `alert()`.
- Layout responsivo e suporte a navegação por teclado.

## Limitações

- A versão local depende de serviços CDN para carregar as bibliotecas criptográficas.
- A API PHP não deve ser publicada sem HTTPS, controle de acesso e limites de requisição.
- Este projeto é educacional e não substitui o fluxo de autenticação de uma aplicação real.

## Estrutura

```text
.
├── index.html
├── css/styles.css
├── js/crypt-js.js
├── js/scripts.js
└── src/
    ├── index.html
    ├── css/styles.css
    ├── js/scripts.js
    └── php/hash_generator.php
```

## Contribuição

Issues e pull requests são bem-vindos. Ao propor mudanças, inclua o comportamento esperado e uma forma de reproduzir o problema.