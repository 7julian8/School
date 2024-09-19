const axios = require('axios');

exports.handler = async (event) => {
  const file = event.body;

  if (!file) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Keine Datei hochgeladen' }),
    };
  }

  const GITHUB_TOKEN = process.env.GITHUB_TOKEN; // GitHub Token hier speichern
  const REPO_OWNER = 'DEIN_GITHUB_NUTZERNAME';
  const REPO_NAME = 'DEIN_REPOSITORY_NAME';

  try {
    const fileContent = Buffer.from(file, 'binary').toString('base64');

    const response = await axios.put(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${Date.now()}.pdf`,
      {
        message: `Neue PDF hochgeladen`,
        content: fileContent,
      },
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ url: response.data.content.download_url }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
