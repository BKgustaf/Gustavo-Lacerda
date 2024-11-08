Os códigos são testes automatizados desenvolvidos para verificar se a API SWAPI está funcionando corretamente. Cada teste faz uma requisição para um endpoint específico, como informações de personagens,
veículos ou planetas,e valida a resposta retornada pela API. O objetivo é garantir que a API forneça os dados esperados para recursos válidos, como a exibição correta das características de um personagem ou veículo,
e também que retorne um erro adequado (como o código 404) quando um recurso inexistente é solicitado, como um clone ou uma missão que não existe. Assim, os testes ajudam a garantir a integridade da API, verificando
se ela lida corretamente com diferentes cenários.

Além disso, há um arquivo de configuração de workflow do GitHub Actions, que automatiza o processo de execução dos testes sempre que o código é alterado. Esse arquivo define que, a cada push ou pull request na 
branch master, um ambiente de integração contínua será configurado, com a instalação das dependências necessárias e a execução dos testes. O workflow garante que os testes sejam rodados de forma consistente e
automatizada, sem a necessidade de execução manual. Com isso, é possível detectar falhas rapidamente, mantendo o código sempre atualizado e funcionando corretamente durante o processo de desenvolvimento.
