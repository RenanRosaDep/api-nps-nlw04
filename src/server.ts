import 'reflect-metadata'
import express from "express"
import "./database/"
import { router } from "./routes"

const app = express()
/*
* Dia 2:
* yarn add typeorm reflect-metadata = instalar o ttypeorm
* yarn add sqlite3 = instalar o driver do banco de dados que vamos usar, no caso sqlite
*criando o arquivo ormconfig para configurar o banco de dados e a pasta de banco de dados
*/

/**
 * Métodos HTTP:
 * GET => busca uma informação
 * POST => salvar uma informação
 * PUT => alterar uma informação
 * DELETE => deletar uma informação
 * PATCH => alterar informação específica
 */

// // http://localhost:3333/users
// //app.get(rota, (request: tudo que estamos recebendo, response: tudo que estamos enviando))
// app.get("/", (resquest, response) => {
//   // return response.send('Hello World - NLW04')
//   return response.json({message: "Hello World - NLW04"})
// })

// // 1º param - Rota(recurso API)
// // 2º param - resquest, response
// app.post("/", (resquest, response) => {
//   return response.json({message: "Os dados foram salvos com sucesso!"})
// })
app.use(express.json())
app.use(router)

app.listen(3333, () => console.log("Server is running!"))