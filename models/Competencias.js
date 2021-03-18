module.exports = (sequelize, DataTypes) => {
  const competencias = sequelize.define(
    "Competencias",
    {
      nome: DataTypes.STRING,
    },
    {
      tablename: "competencias",
      timestamps: false,
    }
  )

  competencias.associate = (models) => {
    competencias.belongsToMany(models.Usuarios, {
      through: 'Usuarios_competencias',
      foreignKey: 'competencias_id',
      as: 'usuarios'
    })
  }

  return competencias
}