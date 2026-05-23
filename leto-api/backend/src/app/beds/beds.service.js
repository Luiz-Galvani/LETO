export class BedsService {

    constructor(bedsRepository) {

        this.repository = bedsRepository
    }

     // Buscar leito por ID
    async findBedById(id) {}

    // Criar leito
    async createBed(bedData) {}

    async findBeds() {}

    // Deletar leito
    async removeBed(id) {}

     // Atualizar leito
    async updateBed(id, bedData) {}
}