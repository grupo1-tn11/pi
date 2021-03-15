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
  return usuarios_competencias
}