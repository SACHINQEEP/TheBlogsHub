
module.exports = (sequelize, DataTypes) => {
    let UserFollowing = sequelize.define("UserFollowing", {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,   
        },
        user_followed_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        status:{
            type: DataTypes.INTEGER,
            defaultValue: 1,
            comment: `1=> follow, 2=>unfollow, 3=>blocked`
        }
    },{
        paranoid: true,
        deletedAt: "deletedAt",
        timeStamps:true,
        tableName: "UserFollowing"
    })

    UserFollowing.associate =(module) => {
        UserFollowing.belongsTo(module.User, {
            sourceKey: "id",
            foreignKey: "id",
            as: "users",
            constraints: false
        })
    }

    return UserFollowing
}