import nodemailer from 'nodemailer';

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
        to: 'inversionesjm2314@gmail.com',
        subject: 'Nuevo Pedido',
        text: 'Nuevo Pedido',
        html: `
        <p>Nuevo pedido</p>
        <p>Cliente: ${cliente}</p>
        <p>Total: ${total}</p>

        <p>Pedido</p>
        `
    })

}

export default emailcheckout;