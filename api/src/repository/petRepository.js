import { con } from './connection.js'

export async function clientePet (animal){

    const comando = `
    insert into tb_pet (nm_pet)
	values(?)`
        const [linhas] = await con.query (comando, animal);
        return linhas;
}
export async function listarTodos (){
    const comando =
    `select  id_pet   id,
     nm_pet			  nome
            from tb_pet`;
    const [linhas]= await con.query(comando);
    return linhas;
}