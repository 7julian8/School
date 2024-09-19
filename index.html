<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PDF Upload zu GitHub</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f9;
      margin: 0;
      padding: 0;
    }
    header {
      display: flex;
      justify-content: flex-end;
      padding: 10px;
      background-color: #007BFF;
    }
    button {
      background-color: #007BFF;
      color: white;
      border: none;
      padding: 10px 20px;
      cursor: pointer;
    }
    button:hover {
      background-color: #0056b3;
    }
    .hidden {
      display: none;
    }
  </style>
</head>
<body>
  <header>
    <button id="upload-btn" onclick="document.getElementById('pdf-upload').click()">PDF hochladen</button>
    <input type="file" id="pdf-upload" accept=".pdf" style="display:none;" onchange="uploadPDF()">
  </header>

  <section>
    <h1>Hochgeladene PDFs</h1>
    <ul id="pdf-list"></ul>
  </section>

  <script>
    async function uploadPDF() {
      const fileInput = document.getElementById('pdf-upload');
      const file = fileInput.files[0];

      if (file && file.type === 'application/pdf') {
        const formData = new FormData();
        formData.append('file', file);

        try {
          const response = await fetch('/.netlify/functions/upload', {
            method: 'POST',
            body: formData
          });

          const result = await response.json();
          if (response.ok) {
            alert('PDF erfolgreich hochgeladen!');
            const listItem = document.createElement('li');
            listItem.innerHTML = `<a href="${result.url}" target="_blank">${file.name}</a>`;
            document.getElementById('pdf-list').appendChild(listItem);
          } else {
            alert('Fehler beim Hochladen: ' + result.error);
          }
        } catch (error) {
          alert('Fehler beim Hochladen: ' + error.message);
        }
      } else {
        alert('Bitte eine PDF-Datei hochladen');
      }
    }
  </script>
</body>
</html>
