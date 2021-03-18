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
    redes_sociais.belongsToMany(models.Usuarios, {
      through: 'Usuarios_redes',
      foreignKey: 'redes_id',
      as: 'usuarios'
    })
  }

  return redes_sociais
}