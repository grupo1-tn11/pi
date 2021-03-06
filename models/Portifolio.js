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
      tableName: "portifolio",
      timestamps: false,
    }
  )

  portifolio.associate = (models) => {
    portifolio.belongsTo(models.Usuarios, {
      foreignKey: 'usuarios_id',
    })
  }

  return portifolio
}