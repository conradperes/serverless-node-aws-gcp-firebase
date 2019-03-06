# Projeto Serverless que usa Node como framework backend, AWS Lambda como Function as a Service, API Gateway para expor as apis e como trigger da função Lambda, integrando ao BD NOSQL Firebase deployado em projeto no Google Cloud



Esse projeto é excepcionalmente simples, e por isso fantástico, porque ele é completamente Serverless, atuando acessando a Aws Lambda, e o Node.js acessa um BD Firebase deployado da Google Cloud.


Todo o deploy é realizado pelo framework Serverless, o que facilita incrivelmente o deploy, e manutenção do Function as a service:


https://serverless.com


Deverá ser instalado o Serverless, para que possamos aproveitar dessas facilidades de deploy e throbleshooting dessa ferramenta maravilhosa, tanto na AWS, Azure, GCP, as demais favor consultar documentação acima.


Comando para fazer o deploy do projeto usando S3, e adicionando endpoint apigateway e a função Lambda no AWs Lambda:


serverless deploy


As regras de deploy definição da assinatura da operação estão contidas no arquivo serverless.yml.

Comando get do webservice REST criado no Node e exposto pelo api gateway

http GET https://mesx25omj0.execute-api.sa-east-1.amazonaws.com/dev/messages

Fazer post de mensagem em banco de dados Firebase no GCP(Tirado do ar por razões óbvias):



http POST https://mesx25omj0.execute-api.sa-east-1.amazonaws.com/dev/messages username=conrad text="Dominando Firebase - GCP e AWS"




Instalação de ferramenta para fazer chamadas nas apis em linha de comando usando todos os verbos http:
https://httpie.org


Checar log da função que foi deployada no AWS Lambda:



serverless logs --function createMessage









