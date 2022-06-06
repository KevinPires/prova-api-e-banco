import { clientePet, listarTodos } from "../repository/petRepository.js";

import { Router } from 'express';

const server =Router();

server.post('/pet', async (req, resp) => {
    try {
        const novoPet= req.body;
        if(!novoPet.nome)
    throw new Error('nome filme obrigatório')

    const petInserido = await clientePet (animal);
    resp.send(petInserido);
    } catch (err) {
        resp.status(400).send('deu erro')
        
    }
})

export default server;