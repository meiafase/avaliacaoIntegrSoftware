import express from 'express';
import { router } from './configs/Routes';

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
    console.log(`Aplicação Folha Pagamento Calculada rodando na porta ${PORT}`);
})