import { QueryInterface, DataTypes } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable(
      "scaapes",
      {
        id: {
          allowNull: false,
          type: DataTypes.UUID,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        description: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        event_start_datetime: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        event_end_datetime: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        scaape_event_id: {
          type: DataTypes.UUID,
          allowNull: false,
        },
        payment_method_id: {
          type: DataTypes.UUID,
          allowNull: true,
        },
        photo_library_setting: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        target_group: {
          type: DataTypes.ENUM("female_only", "male_only", "all"),
          allowNull: true,
        },
        lat: {
          type: DataTypes.FLOAT,
          allowNull: true,
        },
        long: {
          type: DataTypes.FLOAT,
          allowNull: true,
        },
        city: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        address_line: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        address_landmark: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        amount: {
          type: DataTypes.FLOAT,
          allowNull: true,
        },
        cost_breakup: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        hours_before_cancellation: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        attendee_count: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        number_of_seats: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        is_featured: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
        created_at: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW,
        },
        created_by: {
          type: DataTypes.UUID,
          allowNull: false,
        },
        updated_at: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        updated_by: {
          type: DataTypes.UUID,
          allowNull: true,
        },
        deleted_at: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        deleted_by: {
          type: DataTypes.UUID,
          allowNull: true,
        },
      },
      {
        engine: "InnoDB",
        charset: "utf8",
      }
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable("scaapes");
  },
};
