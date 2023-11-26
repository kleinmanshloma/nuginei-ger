console.log("from index page");

import createTableRows from "./createSongsTableForm.js";
import addNewSong from "./addSong.js";
import saveData from "./saveData.js";

const insertTableRows = document.getElementById("insertTableRow");

const listOfSongNames = ["לכו דודו", "קדיש"];

const listOfSingers = [
  "אברהם פריד",
  "יוסי גרין",
  "דוד ווירדיגר",
  "יעאקב שוואקי",
  "מרדכי בן דוד",
  "יעקב תלמיד",
];

const listOfSongLength = ["1:00", "1:30", "2:00", "2:30", "3:00"];

createTableRows(
  insertTableRows,
  listOfSongNames,
  listOfSingers,
  listOfSongLength
);
document.addEventListener("DOMContentLoaded", function () {
  const addSongButton = document.getElementById("addSongButton");
  addSongButton.addEventListener("click", function () {
    addNewSong(listOfSongNames, insertTableRows);
  });

  const saveDataButton = document.getElementById("saveDataButton");
  saveDataButton.addEventListener("click", function (event) {
    saveData(event, listOfSongNames, insertTableRows);
  });
});
