module.exports = (sequelize, DataTypes) => {
  const portifolio = sequelize.define(
    "Portifolio",
    {
      titulo: DataTypes.STRING,
      descricao: DataTypes.STRING,
      data: DataTypes.DATE,
      foto: DataTypes.STRING,
      repositorio: DataTypes.STRING,
      link: DataTypes.STRING,
      usuarios_id: DataTypes.INTEGER,
    },
    {
      tablename: "portifolio",
      timestamps: false,
    }
  )
  return portifolio
}