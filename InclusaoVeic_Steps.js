///<reference types="cypress" />
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";


When('Eu digito a marca', () => {
    cy.get('.marca > .row-fluid > .select2-container > .select2-choice > div > b').click()
    cy.get(':nth-child(1) > .select2-result-sub > :nth-child(4) > .select2-result-label').click()
})

When('Eu digito o modelo', () => {
    //cy.get('.modelo > .row-fluid > .select2-container > .select2-choice > div > b').click()
    //cy.get(':nth-child(5) > .select2-result-label').click()
})

When('Eu digito o ano fabricacao', () => {
    //cy.get(':nth-child(1) > :nth-child(3) > .row-fluid > .select2-container > .select2-choice > div > b').click()
    //cy.get(':nth-child(3) > .select2-result-label').click()
})

When('Eu digito a versao', () => {
    //cy.get('.versao > .row-fluid > .select2-container > .select2-choice > div > b').click()
    //cy.get('.select2-highlighted > .select2-result-label').click()
})

When('Eu digito a quilometragem', () => {
    cy.get('#Km').type("41000")
})

When('Eu digito as portas', () => {
    cy.get('.portas > .row-fluid > .select2-container > .select2-choice > div > b').click()
    cy.get(':nth-child(3) > .select2-result-label').click()
})

When('Eu digito a cor', () => {
    cy.get('.cor > .row-fluid > .select2-container > .select2-choice > div > b').click()
    cy.get(':nth-child(2) > .select2-result-label').click()
})

When('Eu digito o combustivel', () => {
    cy.get('.combustivel > .row-fluid > .select2-container > .select2-choice > div > b').click()
    cy.get(':nth-child(4) > .select2-result-label').click()
})

When('Eu digito o cambio', () => {
    cy.get('.cambio > .row-fluid > .select2-container > .select2-choice > div > b').click()
    cy.get('.select2-highlighted > .select2-result-label').click()
})

When('Eu digito a placa', () => {
    cy.get('#Placa').type("USD2222")
})

When('Eu digito o chassi', () => {
    cy.get('#Chassi').type("9BD12547896354789")
})

When('Eu digito o preco', () => {
    cy.get('#Valor').type("3500000")
})

When('Eu marco as caracteristicas', () => {
    cy.get('.span11 > :nth-child(2) > label > .checker > span > .styled').click()
    cy.get('.span11 > :nth-child(8) > label > .checker > span > .styled').click()
    cy.get('.span11 > :nth-child(12) > label > .checker > span > .styled').click()
})

When('Eu digito as observacoes', () => {
    cy.get('#Informacoes').type("Lorem ipsum dolor sit amet. Ut magni vero At possimus similique aut autem ratione sed consequuntur deleniti et quibusdam culpa ut laborum harum nam voluptas unde!")
})

When('Eu digito o link do video', () => {
    cy.get('#Video').type("Z4XZgmujRkBW-8IA")
})

When('Eu marco os itens de serie e opcionais', () => {
    cy.get(':nth-child(1) > :nth-child(1) > label > .checker > span').click()
    cy.get(':nth-child(1) > :nth-child(25) > label > .checker > span > .styled').click()
    cy.get(':nth-child(39) > .span6 > .box > .content > :nth-child(1) > .form-campo > .row-fluid > :nth-child(2) > :nth-child(7) > label > .checker > span').click()
    cy.get(':nth-child(2) > :nth-child(27) > label > .checker > span > .styled').click()
    cy.get(':nth-child(3) > :nth-child(5) > label > .checker > span > .styled').click()
    cy.get(':nth-child(3) > :nth-child(28) > label > .checker > span').click()
})

When('Eu insiro as fotos', () => {
    cy.get('.button-file > .nostyle').selectFile('cypress/img/Foto1.jpg', {delay: 0})
    cy.get('.button-file > .nostyle').selectFile('cypress/img/Foto2.jpg', {force: true})
})

When('Eu clico no botao confirmar', () => {
    cy.get('.buttons-form > .btn-warning').click()
})

When('Eu marco 0km no campo condicao do veiculo', () => {
    cy.get(':nth-child(2) > label > #uniform-CondicaoVeiculo > span > #CondicaoVeiculo').click()
})

When('Eu digito a quilometragem com caracteres diferente de algarismos {string}', (Jhryh$$) => {
    cy.get('#Km').type("Jhryh$$")
})

When('Eu digito a placa com formato Invalido {string}', (A1H77KO) => {
    cy.get('#Placa').type("A1H77KO")
})

When('Eu digito o chassi com caracteres diferente de alfanumericos {string}', ($$_$_$) => {
    cy.get('#Chassi').type("$$_$_$")
})

When('Eu digito quantidade de caracteres superior ao maximo permitido', () => {
    cy.get('#Informacoes').type("Lorem ipsum dolor sit amet. Ut magni vero At possimus similique aut autem ratione sed consequuntur deleniti et quibusdam culpa ut laborum harum nam voluptas unde Lorem ipsum dolor sit amet. Ut magni vero At possimus similique aut autem ratione sed consequuntur deleniti et quibusdam culpa ut laborum harum nam voluptas unde Lorem ipsum dolor sit amet. Ut magni vero At possimus similique aut autem ratione sed consequuntur deleniti et quibusdam culpa ut laborum harum nam voluptas unde Lorem ipsum dolor sit amet. Ut magni vero At possimus similique aut autem ratione sed consequuntur deleniti et quibusdam culpa ut laborum harum nam voluptas unde Lorem ipsum dolor sit amet. Ut magni vero At possimus similique aut autem ratione sed consequuntur deleniti et quibusdam culpa ut laborum harum nam voluptas unde Lorem ipsum dolor sit amet. Ut magni vero At possimus similique aut autem ratione sed consequuntur deleniti et quibusdam culpa ut laborum harum nam voluptas unde Lorem ipsum dolor sit amet. Ut magni vero At possimus similique aut autem ratione sed consequuntur deleniti et quibusdam culpa ut laborum harum nam voluptas unde Lorem ipsum dolor sit amet. Ut magni vero At possimus similique aut autem ratione sed consequuntur deleniti et quibusdam culpa ut laborum harum nam voluptas unde Lorem ipsum dolor sit amet. Ut magni vero At possimus similique aut autem ratione sed consequuntur deleniti et quibusdam culpa ut laborum harum nam voluptas unde Lorem ipsum dolor sit amet. Ut magni vero At possimus similique aut autem ratione sed conseq")
})

