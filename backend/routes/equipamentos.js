const express = require("express");
const router = express.Router();

const connection = require("../database/connection");

router.get("/listarTodos", (req, res) => {
    const sql = "select * from equipamentos";

    connection.query(sql, (error, result) => {
        if (error) {
            return res.status(500).json(error);
        };

        res.status(200).json(result);

    });

});

router.post("/criar", (req, res)=> {
    const {nome, marca, patrimonio} = req.body;
    const sql = "insert into equipamentos (nome, marca, patrimonio) values (?,?,?)";

    connection.query(sql, [nome, marca, patrimonio], (error)=>{
        if(error){
            return res.status(500).json(error);
        }

        res.status(201).json({mensagem: "Equipamentos cadastrados com sucesso !"});
    });
});

module.exports = router;