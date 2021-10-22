describe('first test', () => {
  it('should add an article', () => {
    cy.visit('http://localhost:4200');

    const uuid = () => Cypress._.random(0, 1e6);
    const testname = `Tournevis_${uuid()}`;

    cy.get('main').contains('Voir le stock').click();
    cy.log('should show the stocks');
    cy.get('main')
      .contains('Ajouter', { timeout: 10000 })
      .should('be.visible')
      .click();
    cy.get('main').get('input[ng-reflect-name=name]').clear().type(testname);
    cy.get('main').get('input[ng-reflect-name=price]').clear().type('1.45');
    cy.get('main').get('input[ng-reflect-name=qty]').clear().type('345');

    const getArticleAlias = 'getArticles';
    cy.intercept('GET', '/api/articles').as(getArticleAlias);
    cy.get('main').get('button').contains('Ajouter').click();
    cy.wait('@' + getArticleAlias);

    cy.get('main').contains(testname).click();
    cy.get('main').contains('Supprimer').click();
  });
});
