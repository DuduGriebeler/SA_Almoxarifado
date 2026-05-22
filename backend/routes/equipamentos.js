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

router.post("/criar", (req, res) => {
    const { nome, marca, patrimonio } = req.body;
    const sql = "insert into equipamentos (nome, marca, patrimonio) values (?,?,?)";

    connection.query(sql, [nome, marca, patrimonio], (error) => {
        if (error) {
            return res.status(500).json(error);
        }

        res.status(201).json({ mensagem: "Equipamentos cadastrados com sucesso !" });
    });
});

router.put("/editar/:id", (req, res) => {
    const { id } = req.params;
    const { nome, marca, patrimonio } = req.body;

    // const sql = "update equipamentos set nome = ?, marca = ?, patrimonio = ? where id = ?";
    const sql = "update equipamentos set nome = ?, marca = ?, patrimonio = ? where id = ?";


    connection.query(sql, [nome, marca, patrimonio, id], (error) => {
        // console.log(sql, marca, patrimonio, id, nome);
        if (error) {
            res.status(500).json(error);
        }

        res.status(201).json({ mensagem: "Equipamento atualizado com sucesso !" });
    });
});

router.delete("/excluir/:id", (req, res) => {
    const { id } = req.params;
    const sql = "delete from equipamentos where id = ?";

    connection.query(sql, [id], (error, result) => {
        if (error) {
            return res.status(500).json(error);
        };

        res.status(201).json({ mensagem: "Equipamento deletado com sucesso !" });

    });
});

router.get("/buscar/:id", (req, res) => {
    const { id } = req.params;
    const sql = "select * from equipamentos where id = ?";

    connection.query(sql, [id], (error, result) => {
        if (error) {
            return res.status(500).json(error);
        };

        res.status(200).json(result)({ mensagem: "Equipamento encontrado com sucesso !" });

    });
});

module.exports = router;