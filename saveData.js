function saveData(event, listOfSongNames, insertTableRows) {
  event.preventDefault();

  console.log("from saveData page");

  const data = [];
  for (let i = 0; i < listOfSongNames.length; i++) {
    const column1Element = document.querySelector(`#column1-${i}`);
    const column2Element = document.querySelector(`#column2-${i}`);
    const column3Element = document.querySelector(`#column3-${i}`);

    // Use querySelectorAll to select all elements matching the selector
    const songElements = document.querySelectorAll(`.song-${i}`);

    // Convert NodeList to an array and then map to get the values
    const songValues = Array.from(songElements).map((element) => element.value);

    if (column1Element && column2Element && column3Element) {
      const column1 = column1Element.value;
      const column2 = column2Element.value;
      const column3 = column3Element.value;
      const song = songValues.join(" ");

      data.push({
        column1,
        column2,
        column3,
        song,
      });
    }
  }

  console.log(data);

  localStorage.setItem("data", JSON.stringify(data));
}

export default saveData;
