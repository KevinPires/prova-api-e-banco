import { useState } from 'react'
import { Link } from 'react-router-dom'
import { clientePet } from '../api/petApi'


export default function Index(){
    const [nome, setNome] = useState('');
    
    async function salvarClick(){
        try {
            const r = await clientePet(nome)
            alert('Pet Cadastrado com sucesso')
        } catch (err) {
            alert(err.response.data.erro);
        }
    }

    return(
        <main>
             <label>Cadastrar Pet</label> 
        <br/>
        <input type='text' placeholder='nome do pet' value={nome} onChange={e=> setNome(e.target.value)}/>

        <div>
            <button onClick={salvarClick}>Registrar</button>
        </div>
            <button><Link to='/'>Ir Para Listas</Link></button>
        
        </main>
    )
}