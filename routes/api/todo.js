const express = require('express');
const R = require('ramda');
const db = require('../../models/index.js');

const router = express.Router();

// GET
router.get('/', function(req, res){
    db.todo.findAll({}).then(function(instances){
        const json_data = R.map(function(item){
            return {
                id: item.dataValues.id,
                title: item.dataValues.title,
                description: item.dataValues.description,
                flg: item.dataValues.flg
            }
        }, instances);
        res.json({status: "OK", data: json_data});
    });
});

// GET :id
router.get('/:id', function(req, res){
    db.todo.findById(req.params.id).then(function(instances){
        if(instances){
            const json_data = R.map(function(item){
                return {
                    id: item.dataValues.id,
                    title: item.dataValues.title,
                    description: item.dataValues.description,
                    flg: item.dataValues.flg
                }
            }, instances);
            res.json({status: "OK", data: json_data});
        }else{
            res.json({status: "NG"});
        }
    });
});

// POST
router.post('/', function(req, res){
    if( req.params.title && req.params.description && req.params.flg ){
        const param = {
            title: req.params.title,
            description: req.params.description,
            flg: req.params.flg
        };

        db.todo.create(param).then(function(instances){
            if(instances){
                const json_data = R.map(function(item){
                    return {
                        id: item.dataValues.id,
                        title: item.dataValues.title,
                        description: item.dataValues.description,
                        flg: item.dataValues.flg
                    }
                }, instances);
                res.json({status: "OK", data: json_data});
            }else{
                res.json({status: "NG"});
            }
        });
    }else{
        res.json({status: "NG"});
    }
});

// PUT :id
router.put('/:id', function(req, res){
    if( req.params.title && req.params.description && req.params.flg ){
        const param = {
            title: req.params.title,
            description: req.params.description,
            flg: req.params.flg
        };

        const selector = { where: { id: req.params.id } };

        db.todo.update(param, selector).then(function(instances){
            if(instances){
                const json_data = R.map(function(item){
                    return {
                        id: item.dataValues.id,
                        title: item.dataValues.title,
                        description: item.dataValues.description,
                        flg: item.dataValues.flg
                    }
                }, instances);
                res.json({status: "OK", data: json_data});
            }else{
                res.json({status: "NG"});
            }
        });
    }else{
        res.json({status: "NG"});
    }
});

// DELETE :id
router.delete('/:id', function(req, res){
    const selector = { where: { id: req.params.id } };

    db.todo.destroy(selector).then(function(instances){
        if(instances){
            const json_data = R.map(function(item){
                return {
                    id: item.dataValues.id,
                    title: item.dataValues.title,
                    description: item.dataValues.description,
                    flg: item.dataValues.flg
                }
            }, instances);
            res.json({status: "OK", data: json_data});
        }else{
            res.json({status: "NG"});
        }
    });
});

module.exports = router;
