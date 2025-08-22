import html2pdf from 'html2pdf.js';

export const generatePDF = async (elementId: string, filename: string = 'resume.pdf') => {
  const element = document.getElementById(elementId);
  
  if (!element) {
    throw new Error('Element not found');
  }

  const options = {
    margin: [0.5, 0.5, 0.5, 0.5],
    filename: filename,
    image: { 
      type: 'jpeg', 
      quality: 0.98 
    },
    html2canvas: { 
      scale: 2,
      useCORS: true,
      letterRendering: true,
      allowTaint: false
    },
    jsPDF: { 
      unit: 'in', 
      format: 'letter', 
      orientation: 'portrait',
      compress: true
    },
    pagebreak: { 
      mode: ['avoid-all', 'css', 'legacy'] 
    }
  };

  try {
    await html2pdf().set(options).from(element).save();
    return true;
  } catch (error) {
    console.error('PDF generation failed:', error);
    throw error;
  }
};