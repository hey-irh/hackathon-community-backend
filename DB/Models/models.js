const { query } = require("../index");

async function getData() {
  const sqlstatement = `SELECT * FROM notesTable`;
  const result = await query(sqlstatement);
  return result;
}

async function addNote(noteObject) {
  const sqlstatement = `INSERT INTO notesTable(
first_name,
last_name,
title, 
content
) VALUE ($1, $2, $3, $4) RETURNING *`;
  let values = [
    noteObject.firstname,
    noteObject.lastname,
    noteObject.title,
    noteObject.content,
  ];
  const result = await query(sqlstatement, values);
  console.log(result);
}

module.exports = {
  getData,
  addNote,
};
