<img id="header" src="https://capsule-render.vercel.app/api?type=waving&color=0:0d9488,100:111827&height=150&section=header" width="100%"/>

# Site com formulário interativo para captação de investidores


Um site para captação de novos clientes para a empresa ImprintingDAO construído em Vite React, 
com navegação entre páginas, animações e formulário de interesse com prevenção de spam.

<br>

## Tecnologias Utilizadas

|                                                                                                                                                     |               |
|:---------------------------------------------------------------------------------------------------------------------------------------------------:|---------------|
| <img src="https://vitejs.dev/logo.svg" width="24px"/>                                                                                               | Vite          |
| <img src="https://reactrouter.com/favicon-dark.png" width="24px"/>                                                                                  | React Router  |
| <img src="https://github.com/Delgado-tech/imprinting-landing-page/assets/60985347/01b581b9-e47d-44cc-87b0-2b7a2189324d" width="24px"/>              | Framer Motion |
| <img src="https://www.emailjs.com/favicon/favicon-32x32.png" width="24px"/>                                                                         | EmailJs       |
| <img src="https://www.typescriptlang.org/icons/icon-96x96.png" width="24px"/>                                                                       | Typescript    |
| <img src="https://tailwindcss.com/favicons/favicon-32x32.png" width="24px"/>                                                                        | TailwindCSS   |
| <img src="https://lucide.dev/logo.dark.svg" width="24px"/>                                                                                          | LucideIcons   |

<br>

## Funcionalidades

### 1. Navegação entre páginas
   
Foi implementado um sistema de navegação entre páginas com animações.

<br/>

![anim1](https://github.com/Delgado-tech/imprinting-landing-page/assets/60985347/f1bd87bf-e4aa-47a8-9527-d4bda9cac5e3)


### 2. Responsividade
   
Foi implementado responsividade no projeto inteiro fazendo ele se adequar em diversas telas diferentes

<br/>

![anim2](https://github.com/Delgado-tech/imprinting-landing-page/assets/60985347/9ffdbd34-0f9f-4ab7-bfde-9ba0ffcf6214)


### 3. Formulário

Foi implementado um formulário de envio de contato com controle de envio para evitar spam, utilizando a biblioteca emailJS foi possível criar um email personalizado

<br/>

![image](https://github.com/Delgado-tech/imprinting-landing-page/assets/60985347/27cf705d-9ea6-4a0f-9b59-84bdd01ac482)
![image](https://github.com/Delgado-tech/imprinting-landing-page/assets/60985347/50f6d627-d72a-44cc-84ac-24a9d6da25c9)


### 4. Interface amigável com animações

Foi desenvolvido uma interface 100% amigável e animada

<br>

## Instalação

1. Clone o repositório
```bash
git clone https://github.com/Delgado-tech/imprinting-landing-page.git
cd imprinting-landing-page
```

2. Instale as dependências
```bash
npm install
```

<br>

## Uso

1. Crie na pasta raiz um arquivo `.env`, colocando as seguintes variáveis e preenchendo elas de acordo com a necessidade:
```env
VITE_EMAIL_ATTEMPTS="3" #número de envio de formulários no periodo de 1 hora
VITE_EMAILJS_SERVICE_ID="" #configuração do emailjs
VITE_EMAILJS_TEMPLATE_ID="" #configuração do emailjs
VITE_EMAILJS_PUBLIC_KEY="" #configuração do emailjs
VITE_IMPRINTING_COIN_PRE_VENDA_LINK="#"
VITE_SOCIAL_INSTAGRAM_LINK="#"
VITE_SOCIAL_LINKEDIN_LINK="#"
VITE_SOCIAL_YOUTUBE_LINK="#"
VITE_NUMERO_TELEFONE_PAIS="55"
VITE_NUMERO_TELEFONE_DDD="XX"
VITE_NUMERO_TELEFONE="XXXXXXXX"
VITE_EMAIL="contact@email.com.br"
```

2. Configurando o emailJS:
Para poder relacionar o formulário com seu email é necessário um intermediador, no caso o utilizado nesse projeto foi o emailJS, para realizar o vinculo
entre no site e realize seu cadastro (https://dashboard.emailjs.com/sign-up).

<br><br>

Apos o cadastro, na página de dashboard na aba `Email Services` clique no botão `Add New Service`, selecione o serviço de email desejado,
feito isso clique no botão de `Connect Account` e vincule seu e-mail, clique na caixa escrito `Service ID`, 
copie e cole na váriavel do arquivo `.env` chamada VITE_EMAILJS_SERVICE_ID, feito tudo isso clique em `Create Service`

<br>

![image](https://github.com/Delgado-tech/imprinting-landing-page/assets/60985347/0fb19514-0ae9-4ba0-86af-d1b4fc13e748)

<br>

Agora vá para a aba `Email Templates`

<br>

![image](https://github.com/Delgado-tech/imprinting-landing-page/assets/60985347/d1ec67e1-fce7-4b86-9333-a2a13d365f0f)

<br>

Clique no botão `Edit content` e selecione a opção `Code Editor`

<br>

![image](https://github.com/Delgado-tech/imprinting-landing-page/assets/60985347/4f9160aa-1077-4b3a-8f63-6bc4088a546c)

<br>

Irá abrir um editor de código na sua tela, antes de prosseguir dentro desse repositório vá na pasta `emailjs-template`

<br>

![image](https://github.com/Delgado-tech/imprinting-landing-page/assets/60985347/ffbb9e91-ea22-420f-8263-34b540df88e3)

<br>

Clique no arquivo `template.html`, dentro dele copie seu conteúdo.
Voltando para o site do EmailJS na tela de edição de código, apague o conteúdo da esquerda e cole o conteúdo copiado, após isso clique no botão `Apply Changes`

<br>

![image](https://github.com/Delgado-tech/imprinting-landing-page/assets/60985347/db467a22-7d04-4fe5-96b5-289d8bf3706a)

<br>

Escolha um título para o email

<br>

![image](https://github.com/Delgado-tech/imprinting-landing-page/assets/60985347/f52cd12a-ffdc-4310-bde1-db4b7550d126)

<br>

Feito isso clique na aba `Settings` e copie o conteúdo da caixa de texto `Template ID`, e cole esse valor em seu arquivo `.env` na variável chamada VITE_EMAILJS_TEMPLATE_ID, 
concluído essa etapa no site do EmailJS clique no botão do canto superior esquerdo `Save`

<br>

![image](https://github.com/Delgado-tech/imprinting-landing-page/assets/60985347/c6bc60b3-62f8-48d5-9718-e5fc1627c07d)

<br>

Agora clique na aba `Account` e copie o valor da caixa de texto `Public Key`, e cole esse valor em seu arquivo `.env` na variável chamada VITE_EMAILJS_PUBLIC_KEY

<br>

![image](https://github.com/Delgado-tech/imprinting-landing-page/assets/60985347/2406d78f-dd53-49b7-bc6e-675b27e01258)

<br>

Feito essas etapas seu emailJS está configurado!

<br>

3. Inicie o servidor de desenvolvimento
```bash
npm run start
```

4. Abra o navegador e vá para `http://localhost:5173`.

5. Após isso divirta-se!!!

<br>

## 📜 Licença

Este projeto está licenciado sob a [Licença MIT](https://github.com/Delgado-tech/tic-tac-toe-with-ia/blob/main/LICENSE).


## Contribuidores
| Nome | Github | Linkedin |
|---------------------------------------------------------------------------------------------------------------------------------------------------|---------------|---------------|
| Leonardo Delgado | <a href="https://github.com/Delgado-tech/" target="_blank"><img src="https://img.shields.io/badge/-GitHub-303030?style=for-the-badge&logo=github&logoColor=white" target="_blank"></a> | <a href="https://www.linkedin.com/in/leonardo-delgado-1808891b7" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> |
| Felipe Destro | <a href="https://github.com/felipedestro" target="_blank"><img src="https://img.shields.io/badge/-GitHub-303030?style=for-the-badge&logo=github&logoColor=white" target="_blank"></a>     | <a href="https://www.linkedin.com/in/felipe-destro/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>  |
| João Braga | <a href="https://github.com/JoaoPedroBraga" target="_blank"><img src="https://img.shields.io/badge/-GitHub-303030?style=for-the-badge&logo=github&logoColor=white" target="_blank"></a>      | <a href="https://www.linkedin.com/in/joao-pedro-costa-braga-65462321a/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>  |


## ☎️ Contato

Se você tiver alguma dúvida ou sugestão, entre em contato clicando [aqui](mailto:leonardo.delgadosp2014@gmail.com).

## 🔗 Links

### Deploy: XXXXXX

 <img src="https://capsule-render.vercel.app/api?type=waving&color=0:00000080,50:161b2280,100:30363D9d&height=150&section=footer" width="100%">
