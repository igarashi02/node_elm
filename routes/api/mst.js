const express = require('express');
const R = require('ramda');
const db = require('../../models/index.js');

const router = express.Router();

// GET Stages
router.get('/stages', function(req, res){
    db.mst_stage.findAll({}).then(function(instances){
        const json_data = R.map(function(item){
            return {
                id: item.dataValues.id,
                name: item.dataValues.name
            }
        }, instances);
        res.json({status: "OK", data: json_data});
    });
})

module.exports = router;
