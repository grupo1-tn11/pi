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
    competencias.hasMany(models.Usuarios_competencias, {
      foreignKey: 'competencias_id',
    })
  }

  return competencias
}