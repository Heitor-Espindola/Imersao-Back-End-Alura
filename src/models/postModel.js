import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export default async function getTodosPosts(){
    const db = conexao.db("instabytes") // tente instabytes se não der certo
    const colecao = db.collection("posts");
    return colecao.find().toArray();
}