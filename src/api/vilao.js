import axios from 'axios'

const api = axios.create({ 
    baseURL: 'http://localhost:5000/'
}) 

export async function cadastravilao(nome, maldades, super_poder){
    const resposta = await api.post('/vilao',{
        nome: nome,
        maldades: maldades,
        super_poder: super_poder

    })
    return resposta.data;
}


export async function listadevilao(){
    const resposta = await api.get('/vilao')
    return resposta.data
}