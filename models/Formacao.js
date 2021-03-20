module.exports = (sequelize, DataTypes) => {
  const formacao = sequelize.define(
    'Formacao',
    {
      curso: DataTypes.STRING,
      instituicao: DataTypes.STRING,
      grau: DataTypes.STRING,
      inicio: DataTypes.DATE,
      termino: DataTypes.DATE,
      usuarios_id: DataTypes.INTEGER,
    },
    {
      tableName: 'formacao',
      timestamps: false,
    }
  )

  formacao.associate = (models) => {
    formacao.belongsTo(models.Usuarios, {
      foreignKey: 'usuarios_id',
    })
  }

  return formacao
}
