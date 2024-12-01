import { QueryInterface } from 'sequelize';

export default {
  up: (queryInterface: QueryInterface, Sequelize: any) => {
    return queryInterface.createTable(
      'pto_approval',
      {
        id: {
          allowNull: false,
          type: Sequelize.TEXT,
          primaryKey: true,
        },
        company_id: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        country_id: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        category: {
          type: Sequelize.ENUM('working _away', 'time_off'),
          allowNull: false,
        },
        approval_required: {
          type: Sequelize.BOOLEAN,
          allowNull: true,
          defaultValue: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW,
        },
        updated_at: {
          type: Sequelize.DATE,
        },
      },
      {
        engine: 'MYISAM', // default: 'InnoDB'
        charset: 'latin1', // default: null
      },
    );
  },

  down: (queryInterface: QueryInterface) => {
    return queryInterface.dropTable('pto_approval');
  },
};
