// cypress/integration/performance.spec.js

describe('Performance Test', () => {
  it('should pass the performance audit', () => {
    cy.visit('http://localhost:3000'); 

    
    cy.lighthouse({
      performance: 90, 
      accessibility: 90, 
      seo: 90, 
    });
  });
});
