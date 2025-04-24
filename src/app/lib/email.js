import emailjs from 'emailjs-com';

export const sendEmail = async (formData) => {
  try {
    // Debug: Log env variables
    console.log("Service ID:", process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
    console.log("Template ID:", process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
    console.log("User ID:", process.env.NEXT_PUBLIC_EMAILJS_USER_ID);

    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, // Service ID
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, // Template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        topic: formData.topic,
        message: formData.message,
      },
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID // User ID
    );

    console.log('Email sent successfully', response);
    return response;
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('There was a problem sending your message. Please try again later.');
  }
};
