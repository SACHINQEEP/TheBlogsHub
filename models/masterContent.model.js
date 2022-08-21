

module.exports = (sequelize, DataTypes) => {
    const MasterContent = sequelize.define("MasterContent", {
        content_id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        title:{
            type: DataTypes.STRING,
            allowNull: true
        },
        content:{
            type: DataTypes.TEXT("long"),
            allowNull: true
        },
        status:{
            type: DataTypes.INTEGER,
            defaultValue: 1,
            comment: `1=>Active, 2=>InActive, 3=>Deleted`
        },
        content_type:{
            type: DataTypes.INTEGER,
            defaultValue: 1,
            comment:`1=>ContactUs, 2=>privacy_policy, 3=>term&conditions`
        }
    }, {
        paranoid: true,
        deletedAt: "deletedAt",
        timeStamp: true,
        tableName: "MasterContent"
    })

    return MasterContent
}