module.exports = (sequelize, DataTypes) => {
  const usuarios_linguagens = sequelize.define(
    "Usuarios_linguagens",
    {
      usuarios_id: DataTypes.INTEGER,
      linguagens_id: DataTypes.INTEGER,
    },
    {
      tablename: "usuarios_linguagens",
      timestamps: false,
    }
  )

  usuarios_linguagens.associate = (models) => {
    usuarios_linguagens.belongsTo(models.Usuarios, {
      foreignKey: 'usuarios_id',
    })
    usuarios_linguagens.belongsTo(models.Linguagens, {
      foreignKey: 'linguagens_id',
    })
  }

  return usuarios_linguagens
}
