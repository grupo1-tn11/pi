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
    }),
    usuarios.hasMany(models.Avaliacoes, {
      foreignKey: 'avaliado',
    }),
    usuarios.hasMany(models.Experiencia_pro, {
      foreignKey: 'usuarios_id',
    }),
    usuarios.hasMany(models.Formacao, {
      foreignKey: 'usuarios_id',
    }),
    usuarios.hasMany(models.Portifolio, {
      foreignKey: 'usuarios_id',
    }),
    usuarios.belongsToMany(models.Competencias, {
      through: 'Usuarios_competencias',
      foreignKey: 'competencias_id',
      as: 'competencias'
    }),
    usuarios.belongsToMany(models.Linguagens, {
      through: 'Usuarios_linguagens',
      foreignKey: 'linguagens_id',
      as: 'linguagens'
    }),
    usuarios.belongsToMany(models.Redes_sociais, {
      through: 'Usuarios_redes',
      foreignKey: 'redes_id',
      as: 'redes_sociais'
    })
  }

  return usuarios
}
