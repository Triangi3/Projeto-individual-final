import { db } from "../db.js";

export const getcelular = (_, res) => {
  const q = "SELECT * FROM celular";celular
  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addcelular = (req, res) => {
  const q =
    "INSERT INTO celular(`marca`, `modelo`, `cor`, `ano`) VALUES(?)";

  const values = [
    req.body.marca,
    req.body.modelo,
    req.body.cor,
    req.body.ano,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("celular criado com sucesso.");
  });
};

export const updatecelular = (req, res) => {
  const q =
    "UPDATE celular SET `marca` = ?, `modelo` = ?, `cor` = ?, `ano` = ? WHERE `id` = ?";

  const values = [
    req.body.marca,
    req.body.modelo,
    req.body.cor,
    req.body.ano,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("celular atualizado com sucesso.");
  });
};

export const deletecelular = (req, res) => {
  const q = "DELETE FROM celular WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("celular deletado com sucesso.");
  });
};