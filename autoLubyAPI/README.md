# AutoLuby

### Descrição da prova:

*Esta prova consiste na criação de um sistema para gerenciamento de uma loja que realiza venda de veículos.*
***
### Para os requisitos funcionais:

<p>
    CRUD de funcionários e de veículos funcionais. Autenticação requerida para todas as ações, exceto para cadastro.
    Na listagem de clientes é possível "paginar" com o método "paginate()", passado via "qs()": "page" e "limit" que se não definidos, assumem valor padrão (1, e 20 respectivamente).
    É possível também selecionar um único funcionario via "qs().id", que caso definido, retornará o funcionario com tal id e também suas possíveis rendas/reservas relacionadas.
    Em "listar veiculos" é possível filtrar pelo "qs().status" que pode ser "vendido" ou "reservado".
</p>

***

#### Para os requisitos não funcionais:

<p>    A aplicação é feita em AdonisJs v5, com typescript, utilizando Migrations e Models.
    A escolha do Adonis foi feita, apesar de nunca ter uilizado antes, também por esse motivo, visto que em minhas pesquisas para iniciar o projeto levei em consideração opniões de utlizadores na internet e a organização que o AdonisJs já tinha e também facilidade de criar uma aplicação do zero (opnião da internet) me fizeram levar adiante a idéia de usar Adonis e aprender o máximo possível nesses dias para poder minimamente terminar essa aplicação, inclusive gostaria de agradecer a vocês que foram de grande ajuda nesses dias com os videos no Youtube sobre adonis com o professor Manoel Fernandes Neto.
</p>

***

*Ps.: Deixei o arquivo de configurações do [Insomnia](./Insomnia_2021-12-28.json) junto com o projeto na raiz do diretório.

### To do :
 1. #README geral
 2. noPaginate
 3. processar arquivo (avatar)
 4. ##### 'RF02' - Perfil de acesso