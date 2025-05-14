import { useNavigate } from "react-router"
import styles from "../Components.module.css"
import { useForm } from "react-hook-form"
import { useInserirUsuario } from "../../Hook/useAPI"

const CadastroBody = () => {

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm()

    const { inserirUsuario } = useInserirUsuario()

    const onSubmit = (data) => {
        console.log(data)
        inserirUsuario(data)
        navigate("/home")
    }

    const onError = (errors) => {
        console.log(errors)
    }

  return (
    <div 
    className={styles.CadastroBody}>
        <form action="" onSubmit={handleSubmit(onSubmit, onError)}>
            <h1>Cadastro</h1>
            <input 
            type="text" 
            placeholder="Nome completo"
            {...register("nome", {
                required: "Nome obrigatorio",
                minLength: {
                    value: 4,
                    message: "Nome deve ter pelo menos 4 caracteres"
                }
            })}/>
            {errors.nome && <p className="error">{errors.nome.message}</p>}
            
            <input 
            type="text" 
            placeholder="E-mail"
            {...register("email", {
                required: "Email obrigatorio",
                pattern: {
                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                    message: "Email invalido"
            },
                validate: (value) => value.includes("@") || "Email invalido"
            })}/>
            {errors.email && <p className="error">{errors.email.message}</p>}
            
            <input 
            type="password" 
            placeholder="Senha"
            {...register("senha", {
                required: "Senha é obrigatório",
                minLength: {
                  value: 4,
                  message: "Senha deve ter pelo menos 4 caracteres",
                },
                maxLength: {
                  value: 20,
                  message: "Senha deve ter ate 20 caracteres",
                },
            })}/>
            {errors.senha && <p className="error">{errors.senha.message}</p>}
            
            <input 
            type="password" 
            placeholder="Confirmar senha"
            {...register("confirmaSenha", {
                required: "Confirmação senha é obrigatório",
                validate: (value) => value === getValues("senha") || "Senha incorreta"
            })}/>
            {errors.confirmaSenha && <p className="error">{errors.confirmaSenha.message}</p>}
        
            <input 
            className={styles.telefone} 
            type="number" 
            placeholder="Telefone"
            {...register("telefone", {
                required: "Telefone é obrigatório",
                maxLength: {
                    value: 11,
                    message: "Telefone invalido"
                }
            })} />
            {errors.telefone && <p className="error">{errors.telefone.message}</p>}

            <button
            className={styles.cadastrar}>
                Cadastrar
            </button>
            <button
            className={styles.cancelar}
            onClick={() => {
                navigate("/home")
            }}>
                Cancelar
            </button>
        </form>
    </div>
  )
}

export default CadastroBody