import Users from "../models/Users.js"

let users = [] // armazena os users enquanto não criamos um banco de dados

// cria user
const createUser = (req, res) => {

    const {
        id,
        cpf,
        email,
        phone,
        password,
        first_name,
        last_name,
        birthday,
        gender
    } = req.body

    const user = new Users( // cria um novo user com os dados passados no body da requisição
        id,
        cpf,
        email,
        phone,
        password,
        first_name,
        last_name,
        birthday,
        gender
    )

    users.push(user) // push adiciona um elemento no final do array

    res.json(user)
}

// get em todos os users
const getUsers = (req, res) => {
    res.json(users)
}

// get user por id
const getUserById = (req, res) => {
    const user = users.find(u => u.id == req.params.id) // find retorna o primeiro elemento que responde a condição
    res.json(user)
}

// da update em user
const updateUser = (req, res) => {
    const user = users.find(u => u.id == req.params.id)

    if (!user) {
        return res.json({
            message: "Usuário não encontrado"
        })
    }

    Object.assign(user, req.body) // assign atualiza os dados automaticamente, sem precisar atualizar um por um
    res.json(user)
}

// deleta user
const deleteUser = (req, res) => {
    users = users.filter(u => u.id != req.params.id) // se o id do user for diferente do id passado, ele mantém o user, caso contrário, ele deleta o user
    res.json({
        message: "Usuário deletado"
    })
}

export {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
}
