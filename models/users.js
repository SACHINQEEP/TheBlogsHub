

module.exports = (sequelize, DataTypes) => {
    let User = sequelize.define("User", {
        user_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        full_name:{
            type: DataTypes.STRING,
        },
        email_id:{
            type: DataTypes.STRING,
            unique: true
        }
    }) 
    return User
}