module.exports = (sequelize, DataTypes) => {
  const competencias = sequelize.define(
    'Competencias',
    {
      nome: DataTypes.STRING,
      usuarios_id: DataTypes.INTEGER,
    },
    {
      tableName: 'competencias',
      timestamps: false,
    }
  )

  competencias.associate = (models) => {
    competencias.belongsTo(models.Usuarios, {
      foreignKey: 'usuarios_id',
    })
  }

  return competencias
}
