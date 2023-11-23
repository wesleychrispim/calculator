// cypress/integration/performance.spec.js

describe('Performance Test', () => {
  it('should pass the performance audit', () => {
    cy.visit('http://localhost:3000'); // Substitua pela URL da sua aplicação

    // Execute a auditoria de desempenho usando cypress-audit
    cy.lighthouse({
      performance: 90, // Ajuste conforme necessário
      accessibility: 90, // Ajuste conforme necessário
      seo: 90, // Ajuste conforme necessário
    });
  });
});
