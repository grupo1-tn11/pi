module.exports = (sequelize, DataTypes) => {
  const experiencia_pro = sequelize.define(
    "Experiencia_pro",
    {
      funcao: DataTypes.STRING,
      descricao: DataTypes.STRING,
      cargo: DataTypes.STRING,
      empresa: DataTypes.STRING,
      inicio: DataTypes.DATE,
      termino: DataTypes.DATE,
      usuarios_id: DataTypes.INTEGER,
    },
    {
      tablename: "experiencia_pro",
      timestamps: false,
    }
  )
  return experiencia_pro
}