import { clientePet, listarTodos } from "../repository/petRepository.js";

import { Router } from 'express';

const server = Router();

server.post('/pet', async (req, resp) => {
    try {
        const { novoPet }  = req.body;
        if(!novoPet.nome)
    throw new Error('nome do pet obrigatório')

    const petInserido = await clientePet (animal);
    resp.send(petInserido);
    } catch (err) {
        resp.status(400).send({erro:'Deu erro!'})
        
    }
})


server.get('/pet', async (req, resp) => {
    try {
        const checarTodos = await listarTodos();
        resp.send(checarTodos);
    } catch (err) {
        resp.status(400).send({erro: 'Deu erro!'});
    }
})
export default server;