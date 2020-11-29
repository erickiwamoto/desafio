class BuscaElements {

    inputBusca = () => { return '#h_search-input' }

    botaoBuscar = () => { return '#h_search-btn'}

    primeiroProdutoBusca = () => { return 'div[class^="grid"] div:nth-child(1) div a[to^="/produto"]' }

    valorAVista = () => { return '.priceSales' }

    valorCashBack = () => { return 'p span[class*="cashback"]' }

    mensagemSemResultado = () => { return '#root'}
}

export default BuscaElements