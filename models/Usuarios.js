module.exports = (sequelize, DataTypes) => {
  const usuarios = sequelize.define(
    'Usuarios',
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
      foto: {
        type: DataTypes.STRING,
        allowNull: true
      },
      telefone: DataTypes.STRING,
      cidade: DataTypes.STRING,
      estado: DataTypes.STRING,
      curriculo: DataTypes.STRING,
      repositorio_link: DataTypes.STRING,
      admin: DataTypes.BOOLEAN,
    },
    {
      tableName: 'usuarios',
      timestamps: false,
    }
  )

  usuarios.associate = (models) => {
    usuarios.hasMany(models.Avaliacoes, {
      foreignKey: 'avaliador',
    }),
      usuarios.hasMany(models.Avaliacoes, {
        foreignKey: 'avaliado',
        as: 'avaliacoes',
      }),
      usuarios.hasMany(models.Experiencia_pro, {
        foreignKey: 'usuarios_id',
        as: 'experiencia_pro',
      }),
      usuarios.hasMany(models.Formacao, {
        foreignKey: 'usuarios_id',
        as: 'formacao',
      }),
      usuarios.hasMany(models.Portifolio, {
        foreignKey: 'usuarios_id',
        as: 'portifolio',
      }),
      usuarios.hasMany(models.Competencias, {
        foreignKey: 'usuarios_id',
        as: 'competencias',
      }),
      
      // many to many
      usuarios.belongsToMany(models.Linguagens, {
        through: 'Usuarios_linguagens',
        foreignKey: 'usuarios_id',
        as: 'linguagens',
      }),
      usuarios.belongsToMany(models.Redes_sociais, {
        through: 'Usuarios_redes',
        foreignKey: 'usuarios_id',
        as: 'redes_sociais',
      })
  }

  return usuarios
}
