// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite',
    connection: {
      filename: './src/database/db.sqlite',  // diretório da criação do banco
      host : '',
    user : 'carlossts',
    password : '12345678',
    database : 'SemanaOmniStack09'
    },
    migrations: {
      directory: './src/database/tabela' // diretório das tabelas "MIGRATIONS"
    },
    useNullAsDefault: true,  //para suportar valores padrões 'NULOS'
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
