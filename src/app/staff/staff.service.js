export class StaffService{
    constructor(staffRepository){
        this.repository = staffRepository
    }

    async findById(id){
        if(typeof id !== 'number' || !Number.isInteger(id)){
            throw new Error('O id fornecido deve ser um número inteiro válido')
        }

        return await this.repository.findOne(id);
    }

    async createStaff(name){
        if(typeof name !== 'string' || name.trim().length === 0){
            throw new Error('Campo "name" é obrigatório e deve ser um texto.')
        }

        return await this.repository.create(name)
    }

    async findStaff(){
        return await this.repository.find();
    }

    async removeStaff(id){
        if(typeof id !== 'number' || !Number.isInteger(id)){
            throw new Error('O id fornecido deve ser um número inteiro válido')
        }
        const staff = await this.repository.findOne(id)

        if(!staff){
            throw new Error('Staff não encontrado.')
        }

        return await this.repository.remove(id)
    }

    async updateStaff(id, name){
        if(typeof id !== 'number' || !Number.isInteger(id)){
            throw new Error('O id fornecido deve ser um número inteiro válido')
        }

        if(typeof name !== 'string' || name.trim().length === 0){
            throw new Error('Campo "name" é obrigatório e deve ser um texto.')
        }

        const staff = await this.repository.findOne(id)

        if(!staff){
            throw new Error('Staff não encontrado.')
        }

        return await this.repository.update(id, name)
    }
}