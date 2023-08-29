const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333
 
function mostraMulher(request,response) {
    response.json({
        nome: 'Jeniffer Ribeiro',
        imagem: 'https://media.licdn.com/dms/image/D4D03AQEEzwZ9RTDAag/profile-displayphoto-shrink_200_200/0/1682138700268?e=1698883200&v=beta&t=Gnr8Zx9y4LxDXO_kpBCsZJ6WV3vhmeR4SKDeqzQndHU',
        minibio: ' Administradora em transição de carreira para a programação.'
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)