import { DataTypes, Sequelize } from "sequelize";
import { Actor } from "../@types/types";

export default (sequelize: Sequelize) => {
    const actor = sequelize.define<Actor>('actor', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        firstName: { type: DataTypes.STRING, allowNull: false },
        lastName: { type: DataTypes.STRING, allowNull: false },
        birthDate: { type: DataTypes.DATE, allowNull: true }
    }, {
        timestamps: false,
        tableName: 'actors'
    })
    return actor;
} 