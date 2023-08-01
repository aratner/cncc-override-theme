import { readFileSync, writeFileSync } from "fs";
import { load } from "cheerio";
import pkg from "shelljs";
const { ls } = pkg;
import { basename, resolve } from "path";
var folderName = basename(resolve(process.cwd()));
console.log(folderName);

//This script will remove html, head, meta and body tags. Simply set the path to your index.html below.
const PATH_TO_INDEX_FILE = `../../public/${folderName}/index.html`;

ls(PATH_TO_INDEX_FILE).map(function (file) {
  console.log("Unwrapping elements from " + file);
  const $outer = load(readFileSync(file).toString());
  const $ = load($outer("html").html());
  $("html").each(function (i, elem) {
    var contents = $(this).contents();
    $(this).replaceWith(contents);
  });
  $("head").each(function (i, elem) {
    var contents = $(this).contents();
    $(this).replaceWith(contents);
  });
  $("meta").each(function (i, elem) {
    var contents = $(this).contents();
    $(this).replaceWith(contents);
  });
  $("title").each(function (i, elem) {
    var contents = $(this).contents();
    $(this).replaceWith(contents);
  });
  $("body").each(function (i, elem) {
    var contents = $(this).contents();
    $(this).replaceWith(contents);
  });
  writeFileSync(file, $.html());
});
