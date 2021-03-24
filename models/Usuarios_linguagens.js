//const Usuarios = require("./Usuarios")

module.exports = (sequelize, DataTypes) => {
  const usuarios_linguagens = sequelize.define(
    "Usuarios_linguagens",
    {
      usuarios_id: {
        type: DataTypes.INTEGER,
      },
      linguagens_id: {
        type: DataTypes.INTEGER,
      }
    },
    {
      tableName: "usuarios_linguagens",
      timestamps: false,
    }
  )

  return usuarios_linguagens
}
