
module.exports = (sequelize, DataType) => {
    const UserLikes = sequelize.define("UserLikes", {
        like_id:{
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        blogs_id:{
            type: DataType.INTEGER,
            allowNull: false,
        },
        reader_user_id:{
            type: DataType.INTEGER,
            allowNull: false
        },
        writer_user_id:{
            type: DataType.INTEGER,
            allowNull: false
        }
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "UserLikes"
    })

    UserLikes.associate = (models)=> {
        UserLikes.belongsTo(models.Blogs, {
            sourceKey: "like_id",
            foreignKye: "like_id",
            as: "Blogs",
            constraints: false
        })
    }

    return UserLikes
}