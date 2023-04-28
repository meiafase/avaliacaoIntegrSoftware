import { FolhaPagamento } from "../models/FolhaPagamento.models";
import FolhaPagamentoModelsTable from './../models/tables/FolhaPagamento.models.tables';

let folhaPagamentos: FolhaPagamento[] = [];

export class FolhaPagamentoRepository {
    async cadastrar(folhaPagamento): Promise<FolhaPagamento> {
        const insert = await FolhaPagamentoModelsTable.create({
            mes: folhaPagamento.mes,
            ano: folhaPagamento.ano,
            horas: folhaPagamento.horas,
            valor: folhaPagamento.valor,
            bruto: folhaPagamento.salarioBruto,
            irrf: folhaPagamento.irrf,
            inss: folhaPagamento.inss,
            fgts: folhaPagamento.fgts,
            liquido: folhaPagamento.salarioLiquido,
            nome: folhaPagamento.nome,
            cpf: folhaPagamento.cpf
        })
        return folhaPagamento
    }

    async listar() {
        const dados = await FolhaPagamentoModelsTable.findAll();

        let folhas = []
        for (let d in dados) {
            folhas.push(dados[d].dataValues)
        }
        return folhas
    }
}
