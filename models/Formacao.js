module.exports = (sequelize, DataTypes) => {
  const formacao = sequelize.define(
    "Formacao",
    {
      curso: DataTypes.STRING,
      instituicao: DataTypes.STRING,
      grau: DataTypes.STRING,
      inicio: DataTypes.DATE,
      termino: DataTypes.DATE,
      usuarios_id: DataTypes.INTEGER,
    },
    {
      tablename: "formacao",
      timestamps: false,
    }
  )
  return formacao
}
