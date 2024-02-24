import emailcheckout from "../helpers/emailcheckout.js"

const enviarpedido = async (req, res) => {

    const { email, cliente, direccion } = req.body;
    
    try {
        await emailcheckout(req.body);
        res.json({msg: "Enviando pedido por email..."});
    } catch (error) {
        console.log(error)
    }

    

    
}

export {
    enviarpedido
}