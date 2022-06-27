import {listadevilao} from '../../api/vilao'
import { useEffect, useState, } from 'react';
import { Link } from 'react-router-dom';


export default function Index(){

    const [vilao, setVilao] = useState([]);


    async function carregarvilao(){
        const resp = await listadevilao();
        setVilao(resp);

    }

    useEffect(() =>{
        carregarvilao();
    }, [])


    return(
        <main >
            <Link to='/' >Voltar</Link>


                <div >
                    <table>
                        <thead>
                            <tr>
                                <th>Identificação</th>
                                <th>vilao</th>
                                <th>maldades</th>
                                <th>super poder</th>
                            </tr>
                        </thead>
                        <tbody>

                            {vilao.map(item => 
                                <tr>
                                    <td>#{item.id}</td>
                                    <td>{item.nome}</td>
                                    <td>{item.maldades}</td>
                                    <td>{item.super_poder ? 'Sim' : 'Não'}</td>
                                </tr>
                            )}


                        </tbody>
                    </table>
                </div>
        </main>
    );
}