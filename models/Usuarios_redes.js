module.exports = (sequelize, DataTypes) => {
  const usuarios_redes = sequelize.define(
    "Usuarios_redes",
    {
      usuarios_id: DataTypes.INTEGER,
      redes_id: DataTypes.INTEGER,
      link: DataTypes.STRING,
    },
    {
      tablename: "usuarios_redes",
      timestamps: false,
    }
  )

  usuarios_redes.associate = (models) => {
    usuarios_redes.belongsTo(models.Usuarios, {
      foreignKey: 'usuarios_id',
    }),
    usuarios_redes.belongsTo(models.Redes_sociais, {
      foreignKey: 'redes_id',
    })
  }

  return usuarios_redes
}