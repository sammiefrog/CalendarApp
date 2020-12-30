module.exports = (sequelize, DataTypes) => {
  let Event = sequelize.define("Event", {
    title: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: [1],
      },
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
      validate: {
        len: [1],
      },
    },
    date: {
      allowNull: false,
      type: DataTypes.DATE
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
