/// <reference types="Cypress" />

import BuscaElements from '../elements/BuscaElements'
const buscaelements = new BuscaElements
const url = Cypress.config("baseUrl")

class BuscaPage {
    acessarSite() {
        cy.visit(url)
    }
    
    preencherCampoBusca(produto) {
        cy.get(buscaelements.inputBusca()).type(produto)
    }

    clicarBuscar() {
        cy.get(buscaelements.botaoBuscar()).click()
    }

    clicarPrimeiroProdutoEncontrado() {
        cy.get(buscaelements.primeiroProdutoBusca()).click()
    }
    visualizarValorAVista(precoAVista) {
        cy.get(buscaelements.valorAVista()).should('contain', precoAVista)
    }

    visualizarCashBack(cashBack){
        cy.get(buscaelements.valorCashBack()).should('contain', cashBack)
    }

    visualizarMensagemSemresultado(msg){
        cy.get(buscaelements.mensagemSemResultado()).should('contain', msg)
    }
}

export default BuscaPage