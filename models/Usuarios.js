module.exports = (sequelize, DataTypes) => {
  const usuarios = sequelize.define(
    "Usuarios",
    {
      nome: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      senha: DataTypes.STRING,
      cpf: {
        type: DataTypes.STRING,
        unique: true,
      },
      resumo: DataTypes.STRING,
      foto: DataTypes.STRING,
      telefone: DataTypes.STRING,
      cidade: DataTypes.STRING,
      estado: DataTypes.STRING,
      curriculo: DataTypes.STRING,
      repositorio_link: DataTypes.STRING,
      admin: DataTypes.BOOLEAN
    },
    {
      tablename: "usuarios",
      timestamps: false,
    }
  )
  return usuarios
}
