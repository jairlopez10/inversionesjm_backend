import nodemailer from 'nodemailer';
import { google } from 'googleapis'

const emailcheckout = async (datos) => {


    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const {cliente, pedido, total} = datos

    const info = await transporter.sendMail({
        from: '"Distribuciones JM " <correo@correo.com>',
        to: 'inversionesjm2314@gmail.com, cliente@cliente.com',
        subject: 'Nuevo Pedido',
        text: 'Nuevo Pedido',
        html: `
        <p>Nuevo pedido</p>
        <p>Cliente: ${cliente}</p>
        <p>Total: ${total}</p>

        <p>Pedido</p>
        `
    })


    const auth = await google.auth.getClient({
        scopes: ['https://www.googleapis.com/auth/spreadsheets']
    });

    const sheets = google.sheets({version: 'v4', auth})

    const range = `Sheet1!C10`;

    const response = await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.SHEET_ID,
        range,
        valueInputOption: 'USER_ENTERED',
        resource: {
            values: [['Otro']],
        },
    })


}

export default emailcheckout;