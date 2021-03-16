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

  linguagens.associate = (models) => {
    linguagens.hasMany(models.Usuarios_linguagens, {
      foreignKey: 'linguagens_id',
    })
  }

  return linguagens
}