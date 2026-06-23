import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export class UserService {

    constructor(usersRepository) {

        this.repository = usersRepository
    }

    // Get USER por ID
    async findById(id) {

        if (
            typeof id !== 'number' ||
            !Number.isInteger(id)
        ) {

            throw new Error(
                'O id fornecido deve ser um número inteiro válido'
            )
        }

        const user = await this.repository.findOne(id)
        if (!user) {
            throw new Error('Usuário não encontrado.')
        }

        return user
    }

    // Post USER
    // Post USER
    async createUser(userData) {
        const { id, name, email, senha } = userData

        if (typeof name !== 'string' || name.trim().length === 0) {
            throw new Error('Campo "name" é obrigatório.')
        }

        if (typeof email !== 'string' || email.trim().length === 0) {
            throw new Error('Campo "email" é obrigatório.')
        }

        if (typeof senha !== 'string' || senha.trim().length === 0) {
            throw new Error('Campo "senha" é obrigatório.')
        }

        // Hash da senha
        const senhaHash = await bcrypt.hash(senha, 10)

        const payload = {
            id: id ?? null,
            name: name.trim(),
            email: email.trim(),
            senha: senhaHash
        }

        return await this.repository.create(payload)
    }

    // Login USER
    async login(email, senha) {
        if (typeof email !== 'string' || email.trim().length === 0) {
            throw new Error('Email é obrigatório.')
        }

        if (typeof senha !== 'string' || senha.trim().length === 0) {
            throw new Error('Senha é obrigatória.')
        }

        // Buscar usuário por email
        const user = await this.repository.findByEmail(email.trim())
        if (!user) {
            throw new Error('Email ou senha inválidos.')
        }

        // Comparar senha
        const senhaValida = await bcrypt.compare(senha, user.senha)
        if (!senhaValida) {
            throw new Error('Email ou senha inválidos.')
        }

        // Gerar token JWT
        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET || 'sua_chave_secreta_aqui',
            { expiresIn: '24h' }
        )

        // Retornar usuário sem a senha e com token
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            token
        }
    }

    // Get USERS
    async findUser() {
        return await this.repository.find()
    }

    // Delete USER
    async removeUser(id) {

        if (
            typeof id !== 'number' ||!Number.isInteger(id)
        ) {
            throw new Error(
                'O id fornecido deve ser um número inteiro válido'
            )
        }

        const user = await this.repository.findOne(id) //

        if (!user) {
            throw new Error(
                'Usuário não encontrado.'
            )
        }
        return await this.repository.remove(id)
    }

    // Update USER
    async updateUser(id, userData) {

        if (
            typeof id !== 'number' || !Number.isInteger(id)
        ) {

            throw new Error(
                'O id fornecido deve ser um número inteiro válido'
            )
        }

        const user = await this.repository.findOne(id)

        if (!user) {
            throw new Error(
                'Usuário não encontrado.'
            )
        }
        return await this.repository.update(
            id,
            userData
        )
    }
}

//await: espera a resolução antes de continuar a execução do código