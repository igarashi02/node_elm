const express = require('express');
const R = require('ramda');
const db = require('../../models/index.js');

const router = express.Router();

// GET Stages
// router.get('/stages', function(req, res){
//     db.mst_stage.findAll({}).then(function(instances){
//         const json_data = R.map(function(item){
//             return {
//                 id: item.dataValues.id,
//                 name: item.dataValues.name
//             }
//         }, instances);
//         res.json({status: "OK", data: json_data});
//     });
// })

router.get('/', function(req, res){
    getStageData().then(function(stage_data){
        getLightData().then(function(light_data){
            getHeavyMainData().then(function(heavy_main_data){
                getHeavySubData().then(function(heavy_sub_data){
                    getPracticeMainData().then(function(practice_main_data){
                        getPracticeSubData().then(function(practice_sub_data){
                            getTypeData().then(function(type_data){
                                const res_json = {
                                    status: "OK",
                                    stages: stage_data,
                                    light: light_data,
                                    heavy_main: heavy_main_data,
                                    heavy_sub: heavy_sub_data,
                                    practice_main: practice_main_data,
                                    practice_sub: practice_sub_data,
                                    types: type_data
                                }
                                res.json(res_json);
                            });
                        });
                    });
                });
            });
        });
    });
})

const getStageData = () => {
    return new Promise((resolve) => {
        db.mst_stage.findAll({}).then(function(instances){
            const json_data = R.map(function(item){
                return {
                    id: item.dataValues.id,
                    name: item.dataValues.name
                }
            }, instances);
            resolve(json_data);
        });
    });
}

const getTypeData = () => {
    return new Promise((resolve) => {
        db.mst_type.findAll({}).then(function(instances){
            const json_data = R.map(function(item){
                return {
                    id: item.dataValues.id,
                    name: item.dataValues.name
                }
            }, instances);
            resolve(json_data);
        });
    });
}

const getLightData = () => {
    return new Promise((resolve) => {
        db.mst_training_light.findAll({}).then(function(instances){
            const json_data = R.map(function(item){
                return {
                    id: item.dataValues.id,
                    stage_id: item.dataValues.stage_id,
                    e: item.dataValues.e,
                    d: item.dataValues.d,
                    c: item.dataValues.c,
                    b: item.dataValues.b,
                    a: item.dataValues.a
                }
            }, instances);
            resolve(json_data);
        });
    });
}

const getHeavyMainData = () => {
    return new Promise((resolve) => {
        db.mst_training_heavy_main.findAll({}).then(function(instances){
            const json_data = R.map(function(item){
                return {
                    id: item.dataValues.id,
                    stage_id: item.dataValues.stage_id,
                    e: item.dataValues.e,
                    d: item.dataValues.d,
                    c: item.dataValues.c,
                    b: item.dataValues.b,
                    a: item.dataValues.a
                }
            }, instances);
            resolve(json_data);
        });
    });
}

const getHeavySubData = () => {
    return new Promise((resolve) => {
        db.mst_training_heavy_sub.findAll({}).then(function(instances){
            const json_data = R.map(function(item){
                return {
                    id: item.dataValues.id,
                    stage_id: item.dataValues.stage_id,
                    e: item.dataValues.e,
                    d: item.dataValues.d,
                    c: item.dataValues.c,
                    b: item.dataValues.b,
                    a: item.dataValues.a
                }
            }, instances);
            resolve(json_data);
        });
    });
}

const getPracticeMainData = () => {
    return new Promise((resolve) => {
        db.mst_training_practice_main.findAll({}).then(function(instances){
            const json_data = R.map(function(item){
                return {
                    id: item.dataValues.id,
                    stage_id: item.dataValues.stage_id,
                    e: item.dataValues.e,
                    d: item.dataValues.d,
                    c: item.dataValues.c,
                    b: item.dataValues.b,
                    a: item.dataValues.a
                }
            }, instances);
            resolve(json_data);
        });
    });
}

const getPracticeSubData = () => {
    return new Promise((resolve) => {
        db.mst_training_practice_sub.findAll({}).then(function(instances){
            const json_data = R.map(function(item){
                return {
                    id: item.dataValues.id,
                    stage_id: item.dataValues.stage_id,
                    value: item.dataValues.value
                }
            }, instances);
            resolve(json_data);
        });
    });
}

module.exports = router;
