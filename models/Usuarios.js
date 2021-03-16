module.exports = (sequelize, DataTypes) => {
  const usuarios = sequelize.define(
    "Usuarios",
    {
      nome: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      senha: DataTypes.STRING,
      cpf: {
        type: DataTypes.STRING,
        unique: true,
      },
      resumo: DataTypes.STRING,
      foto: DataTypes.STRING,
      telefone: DataTypes.STRING,
      cidade: DataTypes.STRING,
      estado: DataTypes.STRING,
      curriculo: DataTypes.STRING,
      repositorio_link: DataTypes.STRING,
      admin: DataTypes.BOOLEAN
    },
    {
      tablename: "usuarios",
      timestamps: false,
    }
  )

  usuarios.associate = (models) => {
    usuarios.hasMany(models.Avaliacoes, {
      foreignKey: 'avaliador',
    })
  }

  usuarios.associate = (models) => {
    usuarios.hasMany(models.Avaliacoes, {
      foreignKey: 'avaliado',
    })
  }

  usuarios.associate = (models) => {
    usuarios.hasMany(models.Experiencia_pro, {
      foreignKey: 'usuarios_id',
    })
  }

  usuarios.associate = (models) => {
    usuarios.hasMany(models.Formacao, {
      foreignKey: 'usuarios_id',
    })
  }

  usuarios.associate = (models) => {
    usuarios.hasMany(models.Portifolio, {
      foreignKey: 'usuarios_id',
    })
  }

  usuarios.associate = (models) => {
    usuarios.hasMany(models.Usuarios_competencias, {
      foreignKey: 'usuarios_id',
    })
  }

  usuarios.associate = (models) => {
    usuarios.hasMany(models.Usuarios_linguagens, {
      foreignKey: 'usuarios_id',
    })
  }

  usuarios.associate = (models) => {
    usuarios.hasMany(models.Usuarios_redes, {
      foreignKey: 'usuarios_id',
    })
  }

  return usuarios
}
