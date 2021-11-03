import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import { StaticRouter } from "react-router-dom";
import path from "path";
import fs from "fs";
import App from "./src/App";

// to fix error indow is not exist on server
global.window = {};

const app = express();

app.use(express.static("./build", { index: false }));

const articles = [
  { title: "Article 1", author: "Bob" },
  { title: "Article 2", author: "Betty" },
  { title: "Article 3", author: "Frank" },
];

app.get("/api/articles", (req, res) => {
  const loadedArticles = articles;
  res.json(loadedArticles);
});

app.get("/*", (req, res) => {
  const sheet = new ServerStyleSheet();

  const reactApp = renderToString(
    // add styles
    sheet.collectStyles(
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    )
  );

  const templateFile = path.resolve("./build/index.html");

  fs.readFile(templateFile, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).send(err);
    }

    const loadedArticles = articles;

    return res.send(
      data
        .replace(
          '<div id="root"></div>',
          // to be able get data with SSR insert data into window object
          `<script>window.preloadedArticles =
            ${JSON.stringify(
              loadedArticles
            )}</script>  <div id="root">${reactApp}</div>`
        )
        .replace(`{{ styles }}`, sheet.getStyleTags)
    );
  });
});

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
