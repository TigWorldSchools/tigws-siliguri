// Google Sheets integration utility
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbzBKJcFi_OdvGD__aoZjlWspShZUGevHrLUu3_NFce2G4lKMMIFiiMarGwQOEfCiYOs/exec';

// Fallback email service (using Formspree as example)
const FALLBACK_EMAIL_URL = 'https://formspree.io/f/YOUR_FORM_ID';

export const submitToGoogleSheets = async (formData) => {
  try {
    // Try Google Sheets first
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        timestamp: new Date().toLocaleString('en-IN', {
          timeZone: 'Asia/Kolkata',
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        }),
        source: 'TIGWS Application Form'
      })
    });

    // Since we're using no-cors mode, we can't read the response
    // but if no error is thrown, we assume success
    return { success: true, method: 'google-sheets' };
  } catch (error) {
    console.error('Google Sheets submission failed, trying fallback:', error);
    
    // Fallback to email service
    try {
      const fallbackResponse = await fetch(FALLBACK_EMAIL_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: 'TIGWS Application Form Submission',
          message: `
            New application form submission:
            
            Parent Name: ${formData.parentName}
            Student Name: ${formData.studentName}
            Phone: ${formData.phone}
            Email: ${formData.email}
            Grade: ${formData.grade}
            City: ${formData.city}
            Timestamp: ${new Date().toISOString()}
          `
        })
      });
      
      if (fallbackResponse.ok) {
        return { success: true, method: 'email-fallback' };
      }
    } catch (fallbackError) {
      console.error('Fallback email submission also failed:', fallbackError);
    }
    
    throw new Error('Failed to submit form data');
  }
};

// Alternative: Simple mailto fallback
export const createMailtoLink = (formData) => {
  const subject = encodeURIComponent('TIGWS Application Form Submission');
  const body = encodeURIComponent(`
New application form submission:

Parent Name: ${formData.parentName}
Student Name: ${formData.studentName}
Phone: ${formData.phone}
Email: ${formData.email}
Grade: ${formData.grade}
City: ${formData.city}
Timestamp: ${new Date().toISOString()}
  `);
  
  return `mailto:admissions@tigws.edu.in?subject=${subject}&body=${body}`;
};