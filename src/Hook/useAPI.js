import { useContext, useEffect } from "react"
import { useState } from "react"

import { AuthContext } from "../Context/UserContext"

const url = import.meta.env.VITE_API_URL

export function useVerificaLogin () {
    const [usuarios, setUsuarios] = useState([])

    const { login } = useContext(AuthContext)

    useEffect(() => {
        async function fetchData () {
            try{
                const req = await fetch(`${url}usuarios`)
                console.log(req)
                setUsuarios(await req.json())
            }
            catch(error){
                console.log(error.message)
            }
        }
        fetchData()
    },[])

    const verificaLogin = (data) => {
        const userToFind = usuarios.find((user) => {
            return user.email === data.email
        })

        if(userToFind != undefined && userToFind.senha == data.senha){
            login(userToFind)
            console.log(userToFind.nome, "logado")
            return "Login bem sucedido"
        }
        else{
            console.log(userToFind)
            return "Usuario ou senha invalidos"
        }
    }

    return { verificaLogin }

}

export function useInserirUsuario(){
    const inserirUsuario = async (data) => {
        const req = await fetch(`${url}usuarios`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        const res = await req.json()
        return res
    }
    return { inserirUsuario }
}