module.exports = (sequelize, DataTypes) => {
  const redes_sociais = sequelize.define(
    "Redes_sociais",
    {
      nome: DataTypes.STRING,
    },
    {
      tablename: "redes_sociais",
      timestamps: false,
    }
  )

  redes_sociais.associate = (models) => {
    redes_sociais.hasMany(models.Usuarios_redes, {
      foreignKey: 'redes_id',
    })
  }

  return redes_sociais
}