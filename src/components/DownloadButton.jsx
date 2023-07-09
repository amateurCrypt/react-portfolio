import React from 'react';
import pdfFile from '../assets/resume.pdf';

const DownloadButton = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = 'resume.pdf';
    link.target = '_blank';
    link.click();
  };

  return (
    <button onClick={handleDownload}>
      Download Resume      <i class="fa-regular fa-file-pdf fa-xl"></i>
    </button>
  );
};

export default DownloadButton;