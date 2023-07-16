// const { Client } = require("@notionhq/client");

import { notion_secret, strom_db } from "./notion_datas.js";

// print(notion_secret);

// const notion = new Client({ auth: process.env.NOTION_API_KEY });

// async function get_data() {
//   const pageId = strom_db;
//   const response = await notion.pages.retrieve({ page_id: pageId });
//   console.log(response);
// }

function get_data() {
  const NOTION_DATABASE_ID = strom_db;

  return fetch(
    `https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${notion_secret}`,
        "Content-Type": "application/json",
        "Notion-Version": "2021-08-16",
      },
      body: JSON.stringify({}),
    }
  )
    .then((response) => response.json())
    .then((data) => data.results);
}

export { get_data };
