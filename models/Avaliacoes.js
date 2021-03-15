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
      tablename: "avaliacoes",
      timestamps: false,
    }
  )
  return avaliacoes
}
