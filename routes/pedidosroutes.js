import express from 'express';
import { enviarpedido } from '../controllers/pedidosController.js';

const router = express.Router();

router.post('/', enviarpedido);

export default router;