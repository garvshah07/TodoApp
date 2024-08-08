const addNoteBtn = document.querySelector(".addBtn");
const noteCantainer = document.querySelector(".note");
const card = document.querySelector(".card");

// input text field
const noteInput = document.createElement("input");
noteInput.type = "text";
noteInput.name = "inputNote";
noteInput.placeholder = "Please enter a task...";
noteInput.classList.add("textEdit");

noteCantainer.insertAdjacentElement("afterbegin", noteInput);

// array that store the notes
let notes = [];

// Function to load notes from localStorage
const loadNotes = () => {
  const storedNotes = localStorage.getItem("notes");
  if (storedNotes) {
    notes = JSON.parse(storedNotes);

    // Render existing notes on the page
    notes.forEach((note) => {
      cardContainer(note);
    });
  }
};

// Card Creation Function
const cardContainer = (note) => {
  const cardContent = `
    <div class="notesList" >
      <div>
        <h3>${note}</h3>
      </div>
      <div>
        <button class="dltBtn" onclick="editHandler(event)">Edit</button>
        <button class="dltBtn" onclick="cutHandler(event)">Delete</button>
      </div>
    </div>
  `;

  card.insertAdjacentHTML("afterbegin", cardContent);
};

// Task add handler
const noteAddHandler = () => {
  if (noteInput.value === "") {
    return;
  } else {
    cardContainer(noteInput.value);
    notes.push(noteInput.value);

    // Save notes to localStorage
    localStorage.setItem("notes", JSON.stringify(notes));

    noteInput.value = "";
  }
};

addNoteBtn.addEventListener("click", noteAddHandler);

// Task delete handler
const cutHandler = (event) => {
  const cardElement = event.target.closest(".notesList");
  const deletedNote = cardElement.querySelector("h3").innerText;
  const noteIndex = notes.indexOf(deletedNote);

  if (noteIndex !== -1) {
    notes.splice(noteIndex, 1);

    // Save updated notes to localStorage
    localStorage.setItem("notes", JSON.stringify(notes));
  }

  cardElement.remove();
};

// Task edit handler
const editHandler = (event) => {
  const cardElement = event.target.closest(".notesList");
  const noteElement = cardElement.querySelector("h3");

  if (!noteElement) {
    console.error("Note element not found!");
    return;
  }

  const editNote = noteElement.innerText;
  const editNoteIndex = notes.indexOf(editNote);

  // Create an input field for editing
  const editInput = document.createElement("input");
  editInput.type = "text";
  editInput.value = editNote;
  editInput.classList.add("textEdit");

  // Get the parent of the noteElement
  const parentElement = noteElement.parentElement;

  // Replace the note with the input field
  parentElement.replaceChild(editInput, noteElement);

  // Save changes when the user presses Enter
  editInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      const updatedNote = editInput.value;

      // Update the note in the array and localStorage
      notes[editNoteIndex] = updatedNote;
      localStorage.setItem("notes", JSON.stringify(notes));

      // Replace the input field with the updated note
      const updatedNoteElement = document.createElement("h3");
      updatedNoteElement.textContent = updatedNote;
      parentElement.replaceChild(updatedNoteElement, editInput);
    }
  });

  // Save changes when the input loses focus
  editInput.addEventListener("blur", () => {
    const updatedNote = editInput.value;

    // Update the note in the array and localStorage
    notes[editNoteIndex] = updatedNote;
    localStorage.setItem("notes", JSON.stringify(notes));

    // Replace the input field with the updated note
    const updatedNoteElement = document.createElement("h3");
    updatedNoteElement.textContent = updatedNote;
    parentElement.replaceChild(updatedNoteElement, editInput);
  });const addNoteBtn = document.querySelector(".addBtn");
const noteCantainer = document.querySelector(".note");
const card = document.querySelector(".card");

// input text field
const noteInput = document.createElement("input");
noteInput.type = "text";
noteInput.name = "inputNote";
noteInput.placeholder = "Please enter a task...";
noteInput.classList.add("textEdit");

noteCantainer.insertAdjacentElement("afterbegin", noteInput);

// array that store the notes
let notes = [];

// Function to load notes from localStorage
const loadNotes = () => {
  const storedNotes = localStorage.getItem("notes");
  if (storedNotes) {
    notes = JSON.parse(storedNotes);

    // Render existing notes on the page
    notes.forEach((note) => {
      cardContainer(note);
    });
  }
};

// Card Creation Function
const cardContainer = (note) => {
  const cardContent = `
    <div class="notesList" >
      <div>
        <h3>${note}</h3>
      </div>
      <div>
        <button class="dltBtn" onclick="editHandler(event)">Edit</button>
        <button class="dltBtn" onclick="cutHandler(event)">Delete</button>
      </div>
    </div>
  `;

  card.insertAdjacentHTML("afterbegin", cardContent);
};

// Task add handler
const noteAddHandler = () => {
  if (noteInput.value === "") {
    return;
  } else {
    cardContainer(noteInput.value);
    notes.push(noteInput.value);

    // Save notes to localStorage
    localStorage.setItem("notes", JSON.stringify(notes));

    noteInput.value = "";
  }
};

addNoteBtn.addEventListener("click", noteAddHandler);

// Task delete handler
const cutHandler = (event) => {
  const cardElement = event.target.closest('.notesList');
  const deletedNote = cardElement.querySelector("h3").innerText;
  const noteIndex = notes.indexOf(deletedNote);

  if (noteIndex !== -1) {
    notes.splice(noteIndex, 1);

    // Save updated notes to localStorage
    localStorage.setItem("notes", JSON.stringify(notes));
  }

  cardElement.remove();
};

// Task edit handler
const editHandler = (event) => {
  const cardElement = event.target.closest('.notesList');
  const noteElement = cardElement.querySelector("h3");

  if (!noteElement) {
    console.error("Note element not found!");
    return;
  }

  const editNote = noteElement.innerText;
  const editNoteIndex = notes.indexOf(editNote);

  // Create an input field for editing
  const editInput = document.createElement("input");
  editInput.type = "text";
  editInput.value = editNote;
  editInput.classList.add("textEdit");

  // Get the parent of the noteElement
  const parentElement = noteElement.parentElement;

  // Replace the note with the input field
  parentElement.replaceChild(editInput, noteElement);

  // Save changes when the user presses Enter
  editInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      const updatedNote = editInput.value;

      // Update the note in the array and localStorage
      notes[editNoteIndex] = updatedNote;
      localStorage.setItem("notes", JSON.stringify(notes));

      // Replace the input field with the updated note
      const updatedNoteElement = document.createElement("h3");
      updatedNoteElement.textContent = updatedNote;
      parentElement.replaceChild(updatedNoteElement, editInput);
    }
  });

  // Save changes when the input loses focus
  editInput.addEventListener("blur", () => {
    const updatedNote = editInput.value;

    // Update the note in the array and localStorage
    notes[editNoteIndex] = updatedNote;
    localStorage.setItem("notes", JSON.stringify(notes));

    // Replace the input field with the updated note
    const updatedNoteElement = document.createElement("h3");
    updatedNoteElement.textContent = updatedNote;
    parentElement.replaceChild(updatedNoteElement, editInput);
  });

  // Focus on the input field
  editInput.focus();
};

// Load notes on page refresh
loadNotes();


  // Focus on the input field
  editInput.focus();
};

// Load notes on page refresh
loadNotes();
