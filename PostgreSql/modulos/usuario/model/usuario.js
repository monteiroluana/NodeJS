module.exports = (sequelize, DataTypes) => {
    const usuario = sequelize.define('usuario', {
        nome: { type: DataTypes.STRING},
        login: { type: DataTypes.STRING},
        funcao: {type: DataTypes.STRING},
        senha: {type: DataTypes.STRING}
    }, {
        freezeTableName: true,
        schema: 'monteiro',
        tableName: 'usuario',
        timestamps: false
    })
    return usuario
}