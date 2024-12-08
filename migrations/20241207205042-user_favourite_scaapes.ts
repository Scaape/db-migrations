import { QueryInterface, DataTypes } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable(
      "user_favourite_scaapes",
      {
        id: {
          allowNull: false,
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
        },
        user_id: {
          type: DataTypes.UUID,
          allowNull: false,
          references: {
            model: "users", // Table name
            key: "id", // Column in the referenced table
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
        scaape_id: {
          type: DataTypes.UUID,
          allowNull: false,
          references: {
            model: "scaapes", // Table name
            key: "id", // Column in the referenced table
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
        is_favourite: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: true,
        },
        created_at: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW,
        },
        created_by: {
          type: DataTypes.UUID,
          allowNull: true,
          references: {
            model: "users", // Table name
            key: "id", // Column in the referenced table
          },
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
        },
        updated_at: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        updated_by: {
          type: DataTypes.UUID,
          allowNull: true,
          references: {
            model: "users", // Table name
            key: "id", // Column in the referenced table
          },
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
        },
        deleted_at: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        deleted_by: {
          type: DataTypes.UUID,
          allowNull: true,
          references: {
            model: "users", // Table name
            key: "id", // Column in the referenced table
          },
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
        },
      },
      {
        engine: "InnoDB",
        charset: "utf8",
      }
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable("user_favourite_scaapes");
  },
};
