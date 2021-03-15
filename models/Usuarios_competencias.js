module.exports = (sequelize, DataTypes) => {
  const usuarios_competencias = sequelize.define(
    "Usuarios_competencias",
    {
      usuarios_id: DataTypes.INTEGER,
      competencias_id: DataTypes.INTEGER,
    },
    {
      tablename: "usuarios_competencias",
      timestamps: false,
    }
  )

  usuarios_competencias.associate = (models) => {
    usuarios_competencias.belongsTo(models.Usuarios, {
      foreignKey: 'usuarios_id',
    })
  }

  usuarios_competencias.associate = (models) => {
    usuarios_competencias.belongsTo(models.Competencias, {
      foreignKey: 'competencias_id',
    })
  }

  return usuarios_competencias
}