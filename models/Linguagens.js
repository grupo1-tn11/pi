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
    linguagens.belongsToMany(models.Usuarios, {
      through: 'Usuarios_linguagens',
      foreignKey: 'linguagens_id',
      as: 'usuarios'
    })
  }

  return linguagens
}