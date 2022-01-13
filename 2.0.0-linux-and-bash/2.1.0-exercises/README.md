### Exercicios de Linux e Bash  
---  
#### Utlização dos comandos Linux. 
> Instruções iniciais:
* Para cada comando que realizar você deve tirar tirar um "printscreen" do seu terminal e salvar a imagem (A imagem deve ser apenas do TERMINAL).  
* Salvar o nome da imagem com o seu comando no formato: img-01.jpg.  
* O 01 indica por exemplo, que a imagem é dos comandos do exercício 01. 
* você deve estar logado no seu usuário do linux, o nome desse usuário não pode ser igual a nenhum dos seus colegas.  
* para cada exercicio a seguir, 1, 2, 3... deve ser feito um git commit.  
* o commit deve ter o numero do exercicio que voce ta salvando "snapshot", com o seu nome nesse formato. exemplo:
```
git commit -m 'exercicio-01 | josé'
```
> Caso esteja utilizando o Windows, você deve instalar o Git. https://git-scm.com/downloads
* Após instalado, abrir o programa chamado "Git Bash"
* Para cada computador, você precisa configurar no Github sua chave SSH daquele computador, caso seja sua primeira vez usando Git no novo computador, criar e adicionar ao gthub a chave publica: .
#### Gerar chave SSH
* https://docs.github.com/pt/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
#### Adicionar chave SSH ao Github
* https://docs.github.com/pt/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account
---
## Aula 3
> Exercicíos:
- Formar um squad (equipe) de 3 integrantes.
* Para aulas online, vocês devem ficar disponíveis em um canal de voz, para isso utilizaremos o Discord.
* Quem não possui discord, criar uma conta e instalar. https://discord.com/
* Entrar no servidor recém criado, PADOLabs: https://discord.gg/ShMftfxd
* Entrar em uma sala de voz junto com sua equipe para realizar o exercício. Qualquer dúvida, estarei no canal "General".
- Deletem o repositório cópia de vocês (Fork) do repositório original padolabs/web-development-101 (Apenas para que não haja confusão com os repositórios).
- Escolher ou sortear um dos(as) integrantes do grupo para criar um novo Fork do repositório padolabs/web-development-101
* Lembrando que o repositório que foi bifurcado (Forked) com a cópia do repositório original padolabs/web-development-101 é um repositório que pertence ao novo usuário, dessa forma você pode adicionar outros desenvolvedores a esse repositório.  
* O dono do novo Fork deve Adicionar os(as) outros(as) dois(uas) integrantes ao repositório.
- Todos os(as) integrantes devem fazer o clone desse novo Fork os quais foram adicionados (Checar o convite para participar do repositório em seu email).  
* O dono do Fork deve criar uma pasta dentro do diretório web-development-101/2.0.0-linux-and-bash/2.1.0-exercises/2.1.1-2022/
* O nome da pasta é o primeiro nome de cada integrante do grupo "e.g. joao-jose-maria" tudo em minusculo e separado por "-" e em ordem alfabética.
* A partir de agora vocês devem completar esse exercício em conjunto, cada um dos integrantes irá fazer um dos exercicios a seguir em ordem alfabética, por exemplo se o nome da pasta é joao-jose-maria.
```
exercicio 1. quem deve fazer é o joao.
exercicio 2. quem deve fazer é o jose.
exercicio 3. quem deve fazer é a maria.
exercicio 4. quem deve fazer é o joao.
exercicio 5. quem deve fazer é ...
E assim por diante...
```
> OBS: Nos exercícios a seguir vocês não utilizaram branches para realizar o exercicio. Falaremos sobre Branches nas próximas aulas. É possível que ocorra conflitos onde vocês não consiguiram enviar o "push" com suas alterações para o Github, vocês devem fazer o possível para contornar essa situação por hora, avaliando o porque dos conflitos ocorrerem.
1. MKDIR - Detro dessa pasta do grupo, crie uma outra pasta com o nome imagens.
* Faça o PULL para checar por alterações remotas. Se houver alterações remotas elas serão baixadas localmente em seu computador.
```
git pull
```
* Coloque dentro da pasta imagens a foto do terminal do comando de criação da pasta. Exemplo: img-01.jpg
* Faça o PUSH para mandar suas alterações para o Github.
2. ECHO - Crie um arquivo README.md dentro da pasta do grupo.
* O README.md deve ter em sua primeira linha o texto: ### Exercicios do Grupo Joao-Jose-Maria (Substituir pelos integrantes do seu grupo)
* Faça o PULL para checar por alterações remotas. Se houver alterações remotas elas serão baixadas localmente em seu computador.
```
git pull
```
* Coloque dentro da pasta imagens a foto do terminal do comando utilizado. Exemplo: img-02.jpg 
* Faça o PUSH para mandar suas alterações para o Github.
3. CP - COPIE esse README.md de exercícios para um novo arquivo markdown chamado EXERCISES.md dentro da pasta do grupo.
* Faça o PULL para checar por alterações remotas. Se houver alterações remotas elas serão baixadas localmente em seu computador.
```
git pull
```
* Coloque dentro da pasta imagens a foto do terminal do comando utilizado. 
* Faça o PUSH para mandar suas alterações para o Github.
4. LS - Liste os aquivos da pasta do seu grupo.
* Faça o PULL para checar por alterações remotas.
* Coloque dentro da pasta imagens a foto do terminal do comando utilizado. 
* Faça o PUSH para mandar suas alterações para o Github.
5. PWD - Verifique o seu diretório de trabalho atual.
* Faça o PULL para checar por alterações remotas.
* Coloque dentro da pasta imagens a foto do terminal do comando utilizado. 
* Faça o PUSH para mandar suas alterações para o Github.
6. CD - Acesse a pasta imagens do terminal e retorne para a pasta do grupo.
* Faça o PULL para checar por alterações remotas.
* Coloque dentro da pasta imagens a foto do terminal do comando utilizado. 
* Faça o PUSH para mandar suas alterações para o Github.
7. CAT - Exiba o conteúdo do arquivo EXERCISES.md no terminal.
* Faça o PULL para checar por alterações remotas.
* Coloque dentro da pasta imagens a foto do terminal do comando utilizado. 
* Faça o PUSH para mandar suas alterações para o Github.
8. HEAD - Exiba as duas primeiras linhas do conteúdo do arquivo EXERCISES.md no terminal.
* Faça o PULL para checar por alterações remotas.
* Coloque dentro da pasta imagens a foto do terminal do comando utilizado. 
* Faça o PUSH para mandar suas alterações para o Github.
9. TAIL - Exiba as duas ultimas linhas do conteúdo do arquivo EXERCISES.md no terminal.
* Faça o PULL para checar por alterações remotas.
* Coloque dentro da pasta imagens a foto do terminal do comando utilizado. 
* Faça o PUSH para mandar suas alterações para o Github.
10. Adicionar as imagens dos exercícios que você fez no aquivo README.md
* Faça o PULL para checar por alterações remotas.
```
### Exercicios do Grupo Joao-Jose-Maria 
---  

Exercicio 01 - Joao
* Descrever sobre qual comando linux utilizou e o que ele faz.
IMG apontando para a imagem do exercicio na pasta imagens.

Exercicio 02 - Jose
* Descrever sobre qual comando linux utilizou e o que ele faz.
IMG apontando para a imagem do exercicio na pasta imagens.

E assim por diante...
Caso não saiba colocar a Imagem para aparecer no markdown, consultar a seção 1.0.0-introduction-to-web/1.2.0-markdown
```
* Faça o PUSH para mandar suas alterações para o Github.
---
11. Adicionar as imagens dos exercícios que você fez no aquivo README.md
* Faça o PULL para checar por alterações remotas.
```
### Exercicios do Grupo Joao-Jose-Maria 
---  

Exercicio 01 - Joao
* Descrever sobre qual comando linux utilizou e o que ele faz.
IMG apontando para a imagem do exercicio na pasta imagens.

Exercicio 02 - Jose
* Descrever sobre qual comando linux utilizou e o que ele faz.
IMG apontando para a imagem do exercicio na pasta imagens.

E assim por diante...
Caso não saiba colocar a Imagem para aparecer no markdown, consultar a seção 1.0.0-introduction-to-web/1.2.0-markdown
```
* Faça o PUSH para mandar suas alterações para o Github.
---
12. Adicionar as imagens dos exercícios que você fez no aquivo README.md
* Faça o PULL para checar por alterações remotas.
```
### Exercicios do Grupo Joao-Jose-Maria 
---  

Exercicio 01 - Joao
* Descrever sobre qual comando linux utilizou e o que ele faz.
IMG apontando para a imagem do exercicio na pasta imagens.

Exercicio 02 - Jose
* Descrever sobre qual comando linux utilizou e o que ele faz.
IMG apontando para a imagem do exercicio na pasta imagens.

E assim por diante...
Caso não saiba colocar a Imagem para aparecer no markdown, consultar a seção 1.0.0-introduction-to-web/1.2.0-markdown
```
* Faça o PUSH para mandar suas alterações para o Github. 
---
13. O dono do Fork deve então realizar um PR no repositório original com todos os exercícios feitos pelos membros do grupo. Caso o PR seja aceito, o resultado satisfatório foi alcançado, e dessa forma os requisitos foram atingidos.

14. Todos os integrantes devem treinar a utilização desses comandos. Será necessário nas aulas futuras os comandos:  
```
pwd
ls
cd
cat
echo
cp
mv
```
---  
