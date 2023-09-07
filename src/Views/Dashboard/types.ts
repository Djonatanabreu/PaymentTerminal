export interface IProductUnit {
  prevendaproduto_id: string;
  prevenda_id: string;
  produto_id: string;
  quantidade: number;
  valorunitario: number;
  aliquotadesconto: number;
  valordesconto: number;
  aliquotaacrescimo: number;
  valoracrescimo: number;
  valortotal: number;
  flagcancelado: number;
  codigoproduto: number;
  nomeproduto: string;
  valorunitariotabela: null;
  numeroitem: null;
  promocaorelampago_id: null;
  produtounidademedida_id: null;
  integracao_id: string;
  quantidade_conferida: null;
  imagem_url: string;
  quantidade_conferida_usuario_id: null;
  flagexecutado: null;
  datahoraexecutado: null;
  url_consentimento: null;
  cupomdescontoproduto_id: null;
  valordescontoitem: null;
  dataalterado: null;
  flagexcluido: number;
  valortotalproduto: number;
  tabelapreco_id: null;
  valortotalcmv: null;
  participacao_venda: number;
  pesobruto: null;
  integracao_key: null;
  flagprodutokit: number;
  valorfrete: null;
  aliquotadescontoitem: null;
}

export interface IproductList {
  data: IProductUnit[];
}
