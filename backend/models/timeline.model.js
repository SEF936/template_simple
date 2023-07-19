import db from "./db.js";

export const getAll = () => {
  return db.query("SELECT * FROM timeline");
}

export const getOne = (id) => {
  return db.query("SELECT * FROM timeline WHERE id = ?", [id])
}

export const createOne = ({ startDate, endDate, event }) => {
  return db.query("INSERT INTO timeline (start_date, end_date, event) VALUES (?, ?, ?)", [startDate, endDate, event])
}

export const editOne = ({ id, startDate, endDate, event }) => {
  return db.query("UPDATE timeline SET start_date = ?, end_date = ?, event = ? WHERE id = ?", [startDate, endDate, event, id])
}

export const deleteOne = (id) => {
  return db.query("DELETE FROM timeline WHERE id = ?", [id])
}