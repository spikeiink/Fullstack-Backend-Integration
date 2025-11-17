#Sistema de Monitoramento e Processamento de Logs (Node.js)

Este projeto contém dois serviços:

---

##API - Responsável por:

Receber logs via HTTP

Salvar no banco

Fornecer endpoints para dashboard e métricas

---

##Worker - Responsável por:

Processar logs em background

Normalizar e classificar

Gerar estatísticas

Atualizar métricas no banco

Tecnologias

Node.js

Express

Docker

Redis

BullMQ

MongoDB ou PostgreSQL

Arquitetura em módulos (controllers, services, repositories)