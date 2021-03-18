module.exports = (sequelize, DataTypes) => {
  const usuarios_linguagens = sequelize.define(
    "Usuarios_linguagens",
    {
      usuarios_id: DataTypes.INTEGER,
      linguagens_id: DataTypes.INTEGER,
    },
    {
      tablename: "usuarios_linguagens",
      timestamps: false,
    }
  )

  return usuarios_linguagens
}
