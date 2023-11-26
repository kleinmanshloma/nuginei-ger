function createTableRows(
  insertTableRows,
  listOfSongNames,
  listOfSingers,
  listOfSongLength
) {
  console.log("from createTableRows page");
  for (let i = 0; i < listOfSongNames.length; i++) {
    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `
      <td><input type="text" name="column1" id="column1-${i}"></td>
      <td><input type="text" name="column2" id="column2-${i}"></td>
      <td>
        <select name="column3" id="column3-${i}">
          <option value="" disabled selected hidden>בחר נגן</option>
          <option value="אברהם פריד">אברהם פריד</option>
          <option value="יוסי גרין">יוסי גרין</option>
          <option value="דוד ווירדיגר">דוד ווירדיגר</option>
          <option value="יעאקב שוואקי">יעאקב שוואקי</option>
          <option value="מרדכי בן דוד">מרדכי בן דוד</option>
          <option value="יעקב תלמיד">יעקב תלמיד</option>
        </select>
      </td>
      <td><input type="text" name="song" class="song-${i}" value="${
      listOfSongNames[i % listOfSongNames.length]
    }"></td>
    `;
    insertTableRows.appendChild(tableRow);
  }
}

export default createTableRows;
