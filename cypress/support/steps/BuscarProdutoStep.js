/* global Given, When, Then */

import BuscaPage from '../pages/BuscaPage'
const buscaPage = new BuscaPage

Given("que acesso o site", () => {
    buscaPage.acessarSite()
})

When ("eu pesquiso pelo o {}", (produto) => {
    buscaPage.preencherCampoBusca(produto)
    buscaPage.clicarBuscar()
})

When("seleciono o primeito item encontrado", () => {
    buscaPage.clicarPrimeiroProdutoEncontrado()
})

Then("vejo o {} à vista do produto", (valor) => {
    buscaPage.visualizarValorAVista(valor)
})


Then("vejo o valor do {} do produto", (cashBack) => {
    buscaPage.visualizarCashBack(cashBack)
})


Then("vejo a mensagem {}", (msg) => {
    buscaPage.visualizarMensagemSemresultado(msg)
})