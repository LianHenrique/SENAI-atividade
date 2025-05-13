import { createContext, useEffect, useState } from "react"

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [userName, setUserName] = useState("")

    useEffect(() => {
        const nome = localStorage.getItem("userName") || "Visitante"
        setUserName(nome)
    }, [])

    const login = (data) => {
        console.log("Usuario:",data)
        localStorage.setItem("userName",data.nome)
        localStorage.setItem("email",data.email)
        setUserName(data.nome)
    }

    const logout = () => {
        localStorage.removeItem("userName")
        localStorage.removeItem("email")
        setUserName("Visitante")
    }

    return (
        <AuthContext.Provider value={{userName, login, logout}}>
          {children}
        </AuthContext.Provider>
      )

}