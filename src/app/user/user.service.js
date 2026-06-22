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

        const payload = {
            id: id ?? null,
            name: name.trim(),
            email: email.trim(),
            senha
        }

        return await this.repository.create(payload)
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