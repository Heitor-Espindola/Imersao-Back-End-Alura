import express from "express";
import conectarAoBanco from "./src/config/dbConfig.js";

await conectarAoBanco(process.env.STRING_CONEXAO);

const posts = [
    {
        id: 1,
        descrição: "Uma foto teste",
        imagem: "https://placecats.com/millie/200/300",
    },
    {
        id: 2,
        descrição: "Gatinho brincando",
        imagem: "https://placecats.com/400/500",
    },
    {
        id: 3,
        descrição: "Gatinho deitado",
        imagem: "https://placecats.com/600/700",
    },
    {
        id: 4,
        descrição: "Gatinho Curioso",
        imagem: "https://placecats.com/700/499",
    },
]

const app = express();
app.use(express.json());
app.listen(3000, () => {
    console.log("Servidor escutando...");
    })

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});
// acesse HTTP.cat para encontrar todos os status

function buscarPostPorID(id){
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id);
    res.status(200).json(posts[index]);
});