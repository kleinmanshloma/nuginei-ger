const addNewSong = (listOfSongNames, insertTableRows) => {
  console.log("from addNewSong page");

  // Pop up window with a form to add a new song name and save it to the list of song names
  const newSongName = prompt("Please enter the name of the new song");

  // Check if the user provided a new song name
  if (newSongName !== null) {
    if (newSongName.trim() !== "") {
      // Add the new song name to the list
      listOfSongNames.push(newSongName);

      // Get the index of the last added song
      const newIndex = listOfSongNames.length - 1;

      // Append a new row for the new song
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
  <td><input type="text" name="column1" id="column1-${newIndex}"></td>
  <td><input type="text" name="column2" id="column2-${newIndex}"></td>
  <td>
    <select name="column3" id="column3-${newIndex}">
      <option value="" disabled selected hidden>בחר נגן</option>
      <option value="אברהם פריד">אברהם פריד</option>
      <option value="יוסי גרין">יוסי גרין</option>
      <option value="דוד ווירדיגר">דוד ווירדיגר</option>
      <option value="יעאקב שוואקי">יעאקב שוואקי</option>
      <option value="מרדכי בן דוד">מרדכי בן דוד</option>
      <option value="יעקב תלמיד">יעקב תלמיד</option>
    </select>
  </td>
  <td><input type="text" name="song" class="song-${newIndex}" value="${newSongName}"></td>
`;

      // Append the new row to the table body
      const tableBody = document.getElementById("insertTableRow");
      tableBody.appendChild(newRow);
    } else {
      // User entered an empty string, handle this case if needed
      alert("Please enter a valid song name.");
    }
  } else {
    // User canceled the prompt, do nothing or handle it as needed
    console.log("User canceled adding a new song.");
  }
};

export default addNewSong;
