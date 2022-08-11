

module.exports = (sequelize, DataTypes) => {
    let Blogs = sequelize.define("Blogs", {
        blog_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        discription:{
            type: DataTypes.TEXT("long"),
            allowNull: false
        },
        approved:{
            type: DataTypes.STRING,
            Comment: `1 => Approved, 2 => NotApproved`,
            defaultValue: "1"
        },
        blog_status: {
            type: DataTypes.STRING,
            defaultValue: 1,
            comment: "1 => Draft, 2=>published"
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: 1,
            comment: `1 => Active, 2=>Inactive, 3=>Deleted`
        }
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timeStamps: true,
        tableName: "Blogs"
    })

    Blogs.associate = (models)=> {
        Blogs.belongsTo(models.User, {
            sourceKey: "blog_id",
            foreignKey: "blog_id",
            as: "users",
            constraints: false
        })

        Blogs.hasMany(models.UserLikes, {
            sourceKey: "blog_id",
            foreignKey: {
                name:"blog_id"
            },
            as:"UserLikes",
            constraints: false
        })
    }

    return Blogs
}