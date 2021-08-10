/// <reference types="cypress" />

beforeEach(() => {
  cy.visit('/')
  cy.get('[data-cy="pokemon-list"]', {timeout: 10000})
})

describe('Procurando Pokemons com valores válidos', () => {
  it('Procurar pokemon apertando "Procurar"', () => {
    if ( cy.get('[data-cy="pokemon-list"]', {timeout: 10000}) ){
      cy.get('[data-cy="pokemon-search"]').type('bulba')
      cy.get('[data-cy="pokemon-search-button"]').click()
    }
  });
  it('Procurar com número 11 apertando "Enter"', () => {
    if ( cy.get('[data-cy="pokemon-list"]', {timeout: 10000}) ){
      cy.get('[data-cy="pokemon-search"]').type('11')
      cy.get('[data-cy="pokemon-search"]').type('{enter}')
    }
  });
});

describe('Procurando Pokemons com valores inválidos', () => {
  it('Não responder quando o usuário usa caracteres especiais ao apertar o botão procurar', () => {
    if ( cy.get('[data-cy="pokemon-list"]', {timeout: 10000}) ){
      cy.get('[data-cy="pokemon-search"]').type('#')
      cy.get('[data-cy="pokemon-search-button"]').click()
    }
  });
  it('Não responder quando o usuário usa caracteres especiais ao apertar enter', () => {
    if ( cy.get('[data-cy="pokemon-list"]', {timeout: 10000}) ){
      cy.get('[data-cy="pokemon-search"]').type('*')
      cy.get('[data-cy="pokemon-search"]').type('{enter}')
    }
  });
});