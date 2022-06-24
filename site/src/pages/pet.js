import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../pages/pet.scss'

import {  listarTodosPets  } from '../api/petApi'


export default function Index(){
    const [pets, setPets] = useState([]);

   async function carregarTodosPets(){
        const resp = await listarTodosPets();
        setPets(resp);
    }
    
    useEffect(()=> {
    carregarTodosPets();
    }, [])
    
   

    return(
       <main>
      

        <table>
                 <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Nome do pet</th>
                    </tr>
                </thead>
                <tbody>

                    {pets.map(item => 
                        
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                               
                        </tr>
                        )}
                   
                </tbody>
                        
        </table>
        <div>
        <button><Link to='/cadastrar'>Ir Para Cadastro</Link></button>
        </div>
       </main>
      
       
      
    )
}