export class TasksService {
    constructor(tasksRepository) {
        this.repository = tasksRepository
    }

    async findById(id) {
        if (typeof id !== 'number' || !Number.isInteger(id)) {
            throw new Error('O id fornecido deve ser um número inteiro válido')
        }

        const task = await this.repository.findOne(id);
        if (!task) {
            throw new Error('Task não encontrado.')
        }
        return task;
    }

    async createTask(roomsId, bedsId, unitsId, usersId, statusId) {
        this._validateIds(roomsId, bedsId, unitsId, usersId, statusId)

        return await this.repository.create(roomsId, bedsId, unitsId, usersId, statusId)
    }

    async findTasks() {
        return await this.repository.find();
    }

    async removeTask(id) {
        if (typeof id !== 'number' || !Number.isInteger(id)) {
            throw new Error('O id fornecido deve ser um número inteiro válido')
        }
        const task = await this.repository.findOne(id)

        if (!task) {
            throw new Error('Task não encontrado.')
        }

        return await this.repository.remove(id)
    }

    async updateTask(id, roomsId, bedsId, unitsId, usersId, statusId, acceptedAt = null, completedAt = null) {
        if (typeof id !== 'number' || !Number.isInteger(id)) {
            throw new Error('O id fornecido deve ser um número inteiro válido')
        }

        this._validateIds(roomsId, bedsId, unitsId, usersId, statusId)

        if (acceptedAt !== null && !(acceptedAt instanceof Date) && typeof acceptedAt !== 'string') {
            throw new Error('Campo "acceptedAt" deve ser uma data válida ou null')
        }

        if (completedAt !== null && !(completedAt instanceof Date) && typeof completedAt !== 'string') {
            throw new Error('Campo "completedAt" deve ser uma data válida ou null')
        }

        const task = await this.repository.findOne(id)

        if (!task) {
            throw new Error('Task não encontrado.')
        }

        return await this.repository.update(id, roomsId, bedsId, unitsId, usersId, statusId, acceptedAt, completedAt)
    }

    _validateIds(roomsId, bedsId, unitsId, usersId, statusId) {
        const ids = { roomsId, bedsId, unitsId, usersId, statusId };

        for (const [key, value] of Object.entries(ids)) {
            if (typeof value !== 'number' || !Number.isInteger(value)) {
                throw new Error(`Campo "${key}" deve ser um número inteiro válido`)
            }
        }
    }
}
