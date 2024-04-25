#Pass.in

Pass.in é uma aplicação para gestão de participantes em eventos presenciais. Esta ferramenta permite que o organizador cadastre um evento e abra uma página pública de inscrição. Os participantes inscritos podem emitir uma credencial para check-in no dia do evento, e o sistema realiza o check-in através de um scan do QRCode presente na credencial.

#Requisitos

##Requisitos Funcionais
 O organizador deve poder cadastrar um novo evento.
 O organizador deve poder visualizar dados de um evento.
 O organizador deve poder visualizar a lista de participantes.
 O organizador deve poder se inscrever em um evento.
 O organizador deve poder visualizar seu crachá de inscrição.
 O organizador deve poder realizar check-in no evento.
 
##Regras de Negócio
 O participante só pode se inscrever em um evento uma única vez.
 O participante só pode se inscrever em eventos com vagas disponíveis.
 O participante só pode realizar check-in em um evento uma única vez.
 
##Requisitos Não-Funcionais
 O check-in no evento será realizado através de um QRCode.
 
#Comandos de Execução

##Seed
npx prisma seed

##Executar em modo de desenvolvimento
npm run dev

##Executar em modo de produção
01 - npm run build (Para gerar a aplicação e converter para Javascript)
02 - npm start (Para rodar a aplicação gerada)
Executar migrations
npm run db:migrate

##Executar o Prisma Studio
npm run db:studio
