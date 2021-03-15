module.exports = (sequelize, DataTypes) => {
  const competencias = sequelize.define(
    "Competencias",
    {
      nome: DataTypes.STRING,
    },
    {
      tablename: "competencias",
      timestamps: false,
    }
  )
  return competencias
}