const { query } = require("../index");

const SQLstatement = `CREATE TABLE IF NOT EXISTS notesTable (
    note_id SERIAL PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    title TEXT,
    content TEXT,
    date TIMESTAMPTZ NOT NULL DEFAULT NOW()
)`;

async function createTable() {
  const result = await query(SQLstatement);
  console.log(result);
}

createTable();
