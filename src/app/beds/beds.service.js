export class BedsService {

    constructor(bedsRepository) {

        this.repository = bedsRepository
    }

    // Buscar leito por ID
    async findBedById(id) {

        if (
            typeof id !== 'number' ||
            !Number.isInteger(id)
        ) {

            throw new Error(
                'O id fornecido deve ser um número inteiro válido'
            )
        }

        const bed = await this.repository.findOne(id)

        if (!bed) {

            throw new Error(
                'Leito não encontrado.'
            )
        }

        return bed
    }

    // Criar leito
    async createBed(bedData) {

        const {
            bedscol,
            units_id,
            patients_id,
            rooms_id,
            beds_code,
            bed_status
        } = bedData

        // Validações simples
        if (
            typeof bedscol !== 'string' ||
            bedscol.trim().length === 0
        ) {

            throw new Error(
                'Campo "bedscol" é obrigatório.'
            )
        }

        if (
            typeof beds_code !== 'string' ||
            beds_code.trim().length === 0
        ) {

            throw new Error(
                'Campo "beds_code" é obrigatório.'
            )
        }

        if (
            typeof bed_status !== 'string' ||
            bed_status.trim().length === 0
        ) {

            throw new Error(
                'Campo "bed_status" é obrigatório.'
            )
        }

        return await this.repository.create(bedData)
    }

    // Buscar todos os leitos
    async findBeds() {

        return await this.repository.find()
    }

    // Deletar leito
    async removeBed(id) {

        if (
            typeof id !== 'number' ||
            !Number.isInteger(id)
        ) {

            throw new Error(
                'O id fornecido deve ser um número inteiro válido'
            )
        }

        const bed = await this.repository.findOne(id)

        if (!bed) {

            throw new Error(
                'Leito não encontrado.'
            )
        }

        return await this.repository.remove(id)
    }

    // Atualizar leito
    async updateBed(id, bedData) {

        if (
            typeof id !== 'number' ||
            !Number.isInteger(id)
        ) {

            throw new Error(
                'O id fornecido deve ser um número inteiro válido'
            )
        }

        const bed = await this.repository.findOne(id)

        if (!bed) {

            throw new Error(
                'Leito não encontrado.'
            )
        }

        return await this.repository.update(
            id,
            bedData
        )
    }
}