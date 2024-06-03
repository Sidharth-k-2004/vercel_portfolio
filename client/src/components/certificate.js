import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import resumePDF from '../screens/Resume_sidharth.pdf'; // Replace with your PDF file paths
import certificatePDF from '../screens/certificate1.pdf'; // Replace with your PDF file paths
import './certificate.css'; 

const PDFViewer = () => {
  const [pdfVisible, setPdfVisible] = useState(false);
  const [selectedPDF, setSelectedPDF] = useState('');

  const handleBoxClick = (pdf) => {
    setSelectedPDF(pdf);
    setPdfVisible(true);
  };

  const handleClosePdfViewer = () => {
    setPdfVisible(false);
  };

  return (
    <div className="pdf-viewer">
      <div className="box" onClick={() => handleBoxClick(resumePDF)}>
        <div className="box-content">
          <h2>Resume</h2>
        </div>
      </div>
      <div className="box" onClick={() => handleBoxClick(certificatePDF)}>
        <div className="box-content">
          <h2>Certificate</h2>
        </div>
      </div>

      {pdfVisible && (
        <div className="pdf-overlay" onClick={handleClosePdfViewer}>
          <div className="pdf-wrapper">
            <Document file={selectedPDF}>
              <Page pageNumber={1} />
            </Document>
          </div>
        </div>
      )}
    </div>
  );
};

export default PDFViewer;
