//  todo Router
const Router = require('express').Router();
const {todo} = require("../controllers");


function adaptControllers(controller){
    return  (req, res) => {
        // readOnly Object 
        const httpRequest = Object.freeze({
            body: req.body,
            params: req.paramq,
            query: req.query,
        })
        controller(httpRequest).then(data => {
            res.json(data)
        })
        .catch((err) => {
            res.json(err)
        })
    
    }
} 

Router.post("/", adaptControllers(todo))

module.exports = Router 