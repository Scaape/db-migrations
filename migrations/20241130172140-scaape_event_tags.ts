import { QueryInterface, DataTypes } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable("scaape_event_tags", {
      id: {
        allowNull: false,
        type: DataTypes.UUID,
        primaryKey: true,
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
      scaape_tags_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "scaape_tags", // Table name
          key: "id", // Column in the referenced table
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      created_by: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "users", // Table name
          key: "id", // Column in the referenced table
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
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
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable("scaape_event_tags");
  },
};
