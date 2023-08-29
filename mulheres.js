const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [ 
    {
        nome: 'Jeniffer Ribeiro',
        imagem: 'https://media.licdn.com/dms/image/D4D03AQEEzwZ9RTDAag/profile-displayphoto-shrink_200_200/0/1682138700268?e=1698883200&v=beta&t=Gnr8Zx9y4LxDXO_kpBCsZJ6WV3vhmeR4SKDeqzQndHU',
        minibio: 'Administradora em transição de carreira para a programação.'
    },
    {
        nome: 'Larissa Guimarães',
        imagem: 'https://media.licdn.com/dms/image/D4D35AQHmy3sly_Nn8Q/profile-framedphoto-shrink_200_200/0/1690907785619?e=1693854000&v=beta&t=95sU0-NrynV1DOWlGGASudmQUJZgzIzOl-nT8N1k--8',
        minibio: 'Estudante de Direito.'
    },
    {
        nome: 'Simara Conceição',
        imagem: 'https://media.licdn.com/dms/image/C4E03AQFAcqqo2WX_8A/profile-displayphoto-shrink_200_200/0/1563116714583?e=1698883200&v=beta&t=S2fy6zLVD9cdCq7qL6TM4faEB-KxH0wgNXmCV8-Q5KY',
        minibio: 'Desenvolvedora e Instrutora.'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)