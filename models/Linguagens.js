module.exports = (sequelize, DataTypes) => {
  const linguagens = sequelize.define(
    "Linguagens",
    {
      nome: DataTypes.STRING,
    },
    {
      tablename: "linguagens",
      timestamps: false,
    }
  )
  return linguagens
}