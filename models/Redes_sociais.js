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
  return redes_sociais
}