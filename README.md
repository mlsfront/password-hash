# Password Hash Generator

Este projeto é uma aplicação web que permite aos usuários gerar senhas com hashes MD5 e SHA1. A aplicação é construída utilizando HTML, CSS, JavaScript e PHP.

## Estrutura do Projeto para Rodar com PHP

```
password-hash-generator
├── src
│   ├── css
│   │   └── styles.css        # Estilos CSS para a aplicação
│   ├── js
│   │   └── scripts.js        # Lógica JavaScript para geração de hashes e validação
│   ├── php
│   │   └── hash_generator.php # Lógica PHP para gerar hashes a partir das senhas
│   └── index.html            # Página principal da aplicação
└── README.md                 # Documentação do projeto
```

## Como Usar com PHP

1. **Configuração do Ambiente**: Certifique-se de que você tem um servidor PHP em funcionamento. Você pode usar o XAMPP, WAMP ou qualquer outro servidor que suporte PHP.

2. **Instalação**: Baixe ou clone este repositório em seu ambiente local.

3. **Acessando a Aplicação**: Navegue até o diretório do projeto e abra o arquivo `index.html` em seu navegador.

4. **Gerando Hashes**:
   - Insira uma senha no campo fornecido.
   - Clique no botão para gerar o hash.
   - O hash MD5 e SHA1 será exibido na tela.
   - Você pode copiar os hashes gerados usando o botão de copiar.

## Estrutura do Projeto Usando Biblioteca CryptJS

```
password-hash-generator
├── css
│   └── styles.css        # Estilos CSS para a aplicação
│   js
│   └── scripts.js        # Lógica JavaScript para geração de hashes e validação
│   index.html            # Página principal da aplicação
└── README.md                 # Documentação do projeto
```

## Como Usar sem o PHP

1. **Instalação**: Baixe ou clone este repositório em seu ambiente local.

2. **Acessando a Aplicação**: Navegue até o diretório do projeto e abra o arquivo `index.html` em seu navegador.

3. **Gerando Hashes**:
   - Insira uma senha no campo fornecido.
   - Clique no botão para gerar o hash.
   - O hash MD5 e SHA1 será exibido na tela.
   - Você pode copiar os hashes gerados usando o botão de copiar.
   
## Funcionalidades

- Geração de hashes MD5 e SHA1 a partir de senhas fornecidas pelo usuário.
- Validação dos dados de entrada para garantir que a senha não esteja vazia.
- Opção para copiar os hashes gerados para a área de transferência.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests para melhorias e correções.