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
      tableName: "experiencia_pro",
      timestamps: false,
    }
  )

  experiencia_pro.associate = (models) => {
    experiencia_pro.belongsTo(models.Usuarios, {
      foreignKey: 'usuarios_id',
    })
  }


  return experiencia_pro
}