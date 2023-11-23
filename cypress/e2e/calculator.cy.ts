// cypress/integration/e2e/calculator_spec.js

describe('Calculator', () => {
  it('calculates compound interest correctly', () => {
    cy.visit('http://localhost:5173/');

    // Interaja com os elementos da interface (botões, campos de entrada, etc.)
    cy.get('#input-valor-inicial').type('4000');
    cy.get('#input-taxa-de-juros').type('0.4');
    cy.get('#input-tempo').type('5');
    

    // Clique no botão de calcular
    cy.get('button').contains('Calcular').click();

    // Verifique se o resultado é exibido corretamente
    // Ajuste conforme necessário
  });

  // Adicione mais testes conforme necessário
});
