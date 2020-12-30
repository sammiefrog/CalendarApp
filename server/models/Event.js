module.exports = (sequelize, DataTypes) => {
  let Event = sequelize.define("Event", {
    title: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: [1],
      },
    },
    start: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    end: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    allDay: {
      type: DataTypes.BOOLEAN,
    },
    resource: {
      type: DataTypes.STRING,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  //association to the events
  Event.associate = function (models) {
    models.Event.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false,
      },
    });
  };

  Event.sync();

  return Event;
};
