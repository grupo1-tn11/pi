module.exports = (sequelize, DataTypes) => {
  const avaliacoes = sequelize.define(
    "Avaliacoes",
    {
      texto: DataTypes.STRING,
      created_at: DataTypes.DATE,
      avaliador: DataTypes.INTEGER,
      avaliado: DataTypes.INTEGER,
    },
    {
      tableName: "avaliacoes",
      timestamps: false,
    } 
  )

  avaliacoes.associate = (models) => {
    avaliacoes.belongsTo(models.Usuarios, {
      foreignKey: 'avaliador',
    }),
    avaliacoes.belongsTo(models.Usuarios, {
      foreignKey: 'avaliado',
    })
  }

  return avaliacoes
}
