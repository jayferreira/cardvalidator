# Validador de Cartão de Crédito 2.0.1
 

**Esta biblioteca se destina à validação de números de cartões de crédito para uso em aplicações web.**
Na versão atual é capaz de verificar se um número de cartão fornecido é válido ou não.
  

## [](https://github.com/jayferreira/cardvalidator-#como-instalar)Como instalar:

```
$ npm install cardValidatorjf
````
  

## [](https://github.com/jayferreira/cardvalidator#como-utilizar)Como utilizar:


Exemplo de retorno válido:
```javascript
const validator = require('cardvalidatorjf');
validator.cardValidator(5253193799067539) //true
````

Exemplo de retorno inválido:
```javascript
const validator = require('cardvalidatorjf');
validator.cardValidator(5253193799067538) //false
  ````

## [](https://github.com/jayferreira/cardvalidator#roadmap-oficial-do-projeto)Roadmap oficial do projeto

  

#### Versão 3.0.0 

- README traduzido para Inglês.

- Funções refatoradas.  

#### Versão 2.0.0 (released)
  
- Realiza o tratamento para entradas com letras.

- Mais testes incluídos.

  

#### Versão 1.0.0 (released) 
  

- Funcionalidades: Validação de número de cartão de crédito, classificando entre válido e inválido.

- Realiza o tratamento para entradas menores ou maiores de 15 dígitos.

- Realiza o tratamento para entradas com númerais idênticos.



