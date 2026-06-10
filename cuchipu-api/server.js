require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
// Solo permite peticiones que vengan desde tu dominio principal
app.use(cors({
    origin: 'https://cuchipu.cloud' 
}));
app.use(express.json());

// Diccionario para enrutar el correo según el área seleccionada
// Diccionario temporal para pruebas locales
const directoryEmails = {
  "Cotización de Proyecto": "cuchinetworks@gmail.com", 
  "Consultoría": "cuchinetworks@gmail.com",         
  "Recursos Humanos": "cuchinetworks@gmail.com",            
  "Marketing": "cuchinetworks@gmail.com",              
  "Soporte Técnico": "cuchinetworks@gmail.com",
  "Otro": "cuchinetworks@gmail.com"
};

// Configuración del transportador SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true, // true para puerto 465, false para otros
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, email, area, message } = req.body;

  // Determinar el destinatario
  const targetEmail = directoryEmails[area] || directoryEmails["Otro"];

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`, // El remitente debe ser tu propio correo autenticado
      replyTo: email, // Para poder responderle directamente al cliente
      to: targetEmail,
      subject: `Nuevo mensaje de la web: ${area}`,
      html: `
        <h3>Nuevo contacto desde Cuchipu Entertainment</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Área solicitada:</strong> ${area}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `
    });

    res.status(200).json({ success: true, message: 'Correo enviado correctamente' });
  } catch (error) {
    console.error('Error enviando correo:', error);
    res.status(500).json({ success: false, message: 'Error al enviar el correo' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor de correos corriendo en el puerto ${PORT}`);
});