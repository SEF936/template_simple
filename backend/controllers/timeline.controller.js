import {
  getAll,
  getOne,
  createOne,
  editOne,
  deleteOne
} from "../models/timeline.model.js";

export const create = async (req, res) => {

  try {
    const timeline = req.body;
    const [result] = await createOne(timeline);

    if (result.affectedRows) {
      res.status(201).json({ id: result.insertId, ...timeline })
    } else {
      res.sendStatus(400);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error with server" })
  }
}

export const read = async (req, res) => {

  try {
    const [result] = await getAll();

    res.json(result);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error with server" })
  }
}

export const readOne = async (req, res) => {

  try {
    const [result] = await getOne(req.params.id);

    if (result.length) {
      res.json(result[0]);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error with server" })
  }
}

export const update = async (req, res) => {

  try {
    const timeline = req.body;
    const { id } = req.params;
    const [result] = await editOne({ id, ...timeline });

    if (result.affectedRows) {
      res.json({ id, ...timeline });
    } else {
      res.sendStatus(400);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error with server" })
  }
}

export const destroy = async (req, res) => {

  try {
    const [result] = await deleteOne(req.params.id);

    if (result.affectedRows) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error with server" })
  }
}