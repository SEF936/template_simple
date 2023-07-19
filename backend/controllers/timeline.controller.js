import {
  getAll,
  getOne,
  createOne,
  editOne,
  deleteOne
} from "../models/timeline.model";

export const create = async (req, res) => {
  res.json(await createOne());
}

export const read = async (req, res) => {
  res.json(await getAll());
}

export const readOne = async (req, res) => {
  res.json(await getOne());
}

export const update = async (req, res) => {
  res.json(await editOne());
}

export const destroy = async (req, res) => {
  res.json(await deleteOne());
}