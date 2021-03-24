module.exports = (sequelize, DataTypes) => {
  const usuarios_redes = sequelize.define(
    "Usuarios_redes",
    {
      usuarios_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Usuarios',
          key: 'id'
        }
      },
      redes_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Redes_sociais',
          key: 'id'
        }
      },
      link: DataTypes.STRING,
    },
    {
      tableName: "usuarios_redes",
      timestamps: false,
    }
  )

  return usuarios_redes
}