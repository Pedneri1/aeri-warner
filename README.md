# AERI Warner

## Sobre

Este script foi desenvolvido para que você não precise ficar atualizando o site da AERI buscando o edital que você tanto espera. Assim que o arquivo estiver online, este script tocará uma agradável música (Créditos a https://www.bensound.com).

## Como utilizar

1. Clone este repositório

```bash
    $ git clone https://github.com/Pedneri1/aeri-warner.git
```

2. Instale as dependências

```bash
    $ npm install
```

3. Modifique no arquivo index.js a URL do edital que você está esperando

4. Execute o arquivo index.js

```bash
    $ node index.js
```

5. Agora é só aguardar a música tocar

## Escolhendo a URL correta

A AERI utiliza um sistema de numeração sequencial para hospedar os seus arquivos em seu site, de modo que o edital seguinte é sempre o número seguinte ao último edital.

Por exemplo:

O edital PPGM 2019 - Mestrado Acadêmico do dia 06 de Setembro de 2018 possui a seguinte URL: http://aeri.uefs.br/editais/95.pdf.
Enquanto que o edital seguinte Errata do edital 04/2018 do dia 11 de Setembro de 2018 possui a seguinte URL: http://aeri.uefs.br/editais/96.pdf

Ou seja, o edital que você está esperando provavelmente será o número (no fim da URL) seguinte ao edital anterior.