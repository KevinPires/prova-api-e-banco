import { con } from './connection.js'

export async function clientePet (animal){

    const comando = `
    
    insert into tb_pet(id_pet, nm_pet)
        values (?,?)`
        const [resposta] = await con.query (comando, [animal.pet]);
        animal.id = resposta.inserId;
        return animal;
}
export async function listarTodos (){
    const comando =
    `select id_pet           id,
        nm_pet               nome
        fromt tb_pet;
        `
    const [linhas]= await con.query(comando);
    return linhas;
}