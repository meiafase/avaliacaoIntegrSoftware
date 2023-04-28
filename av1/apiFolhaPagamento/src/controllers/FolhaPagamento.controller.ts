import { FolhaPagamentoRepository } from '../data/FolhaPagamento.repository';
import { Request, Response } from 'express';
import { FolhaPagamento } from '../models/FolhaPagamento.models';
import Axios from 'axios';
import { Funcionario } from '../models/Funcionario';

const folhaPagamentoRepository = new FolhaPagamentoRepository();

export class FolhaPagamentoController {
    async cadastrar(request: Request, response: Response) {
        let funcionario: Funcionario = {}
        let folhaPagamento: FolhaPagamento = request.body
        const pessoas = await folhaPagamentoRepository.cadastrar(folhaPagamento);

        if (folhaPagamento) {
            return response.json({
                status: 'ok',
                content: 'folha cadastrada com sucesso!'
            })
        } else {
            return response.json({
                status: 'error',
                content: 'Algo deu errado ao cadastrar folha!'
            })
        }

    }

    async calcular() {
        const pessoas = await folhaPagamentoRepository.calcular();
    }
    
}