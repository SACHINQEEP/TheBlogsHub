

module.exports = (sequelize, DataTypes) => {
    let User = sequelize.define("User", {
        user_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        full_name:{
            type: DataTypes.STRING,
            defaultValue: null
        },
        first_name:{
            type: DataTypes.STRING,
            defaultValue: null
        },
        last_name:{
            type: DataTypes.STRING
        },
        phone_number:{
            type: DataTypes.STRING,
            defaultValue:null
        },
        email_id:{
            type: DataTypes.STRING,
            unique: true
        },
        password:{
            type: DataTypes.STRING
        },
        user_type:{
            type: DataTypes.INTEGER,
            comment: "1=>admin, 2=>writer, 3=>reader"
        },
        email_verify:{
            type: DataTypes.INTEGER,
            defaultValue: 2,
            comment: "1=>yes 2=>no"
        },
        otp:{
            type:DataTypes.STRING,
            defaultValue:null
        },
        status:{
            type: DataTypes.INTEGER,
            defaultValue:1,
            comment: "1=>active, 2=>inactive, 3=>blocked"
        },
        signup_type:{
            type: DataTypes.INTEGER,
            defaultValue : 3,
            comment: "1=>email & pass, 2=>mobile, 3=>guest"
        }
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timestamps: true,
        tableName: "users"
    }) 

    User.associate = (models)=> {
        User.hasMany(models.Blogs, {
            sourceKey: "user_id",
            foreignKey:"user_id",
            as: "Blogs",
            constraints: false
        })

        User.hasMany(models.UserFollowing, {
            sourceKey: "user_id",
            foreignKey: "user_id",
            as: "UserFollowing",
            constraints: false
        })
    }
    return User
}