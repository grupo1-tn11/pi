module.exports = (sequelize, DataTypes) => {
  const usuarios_redes = sequelize.define(
    "Usuarios_redes",
    {
      usuarios_id: DataTypes.INTEGER,
      redes_id: DataTypes.INTEGER,
      link: DataTypes.STRING,
    },
    {
      tableName: "usuarios_redes",
      timestamps: false,
    }
  )

  return usuarios_redes
}