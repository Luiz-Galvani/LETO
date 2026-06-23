import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import { neon } from '@neondatabase/serverless'

dotenv.config()

const url = process.env.DATABASE_URL || process.env.DB_HOST
if (!url) {
  console.error('Defina DATABASE_URL ou DB_HOST no arquivo .env')
  process.exit(1)
}

const [email, password] = process.argv.slice(2)

if (!email || !password) {
  console.error('Uso: node scripts/reset-user-password.js <email> <nova-senha>')
  process.exit(1)
}

const sql = neon(url)

async function run() {
  try {
    const senhaHash = await bcrypt.hash(password, 10)
    const result = await sql`
      UPDATE "user"
      SET senha = ${senhaHash}
      WHERE email = ${email}
      RETURNING id, email
    `

    if (!result[0]) {
      console.error('Usuário não encontrado:', email)
      process.exit(1)
    }

    console.log('Senha redefinida com sucesso para:', result[0].email)
    process.exit(0)
  } catch (error) {
    console.error('Erro ao redefinir a senha:', error.message || error)
    process.exit(1)
  }
}

run()
