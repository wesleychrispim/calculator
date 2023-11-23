

describe('Calculator', () => {
  it('calculates compound interest correctly', () => {
    cy.visit('http://localhost:5173/');

    
    cy.get('#input-valor-inicial').type('6000');
    cy.get('#input-taxa-de-juros').type('0.4');
    cy.get('#input-tempo').type('5');
    

    
    cy.get('button').contains('Calcular').click();

    
  });

 
});
