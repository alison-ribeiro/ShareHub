import React, { useState } from 'react';
import axios from 'axios';

function DownloadYoutub() {
  const [urls, setUrls] = useState('');
  const [zipFileUrl, setZipFileUrl] = useState('');

  const handleDownload = async () => {
    try {
      const response = await axios.post('http://localhost:3000/download', { urls: urls.split('\n') });
      setZipFileUrl(response.data);
    } catch (error) {
      console.error('Erro ao baixar os arquivos zipados:', error);
    }
  };

  return (
    <div>
      <textarea
        placeholder="Cole as URLs aqui (uma por linha)"
        rows="5"
        cols="40"
        value={urls}
        onChange={(e) => setUrls(e.target.value)}
      />
      <br />
      <button onClick={handleDownload}>Baixar</button>
      {zipFileUrl && (
        <div>
          <p>Arquivo ZIP gerado: <a href={`http://localhost:3000/${zipFileUrl}`} download>Download</a></p>
        </div>
      )}
    </div>
  );
}

export default DownloadYoutub;
