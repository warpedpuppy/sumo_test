"use strict";



module.exports = function(sequelize, DataTypes) {
    var answers_ew_test = sequelize.define("answers_ew_test", {
        question: DataTypes.STRING,
        answer: DataTypes.STRING
    });

    //answers_ew_test.sync();

    return answers_ew_test;
};