import {API_URL} from '../../src/utils/TrueBurgerApi'
describe('Test ingModal', () => {
    beforeEach(function () {
        cy.viewport(1700, 1110);
        cy.visit("/");
        cy.intercept("GET", `${API_URL}/ingredients`, { fixture: "ingredients.json" });
  
    })

    it('ingredient modal test', () => {
        cy.get('[class^=burger-ingredients_ingredient__]').first().as('element');

        cy.get('@element').click();
        cy.get('[class^=modal_content__]').should('exist');
        cy.get('[class^=modal_name__]').find('p').as('name');
        cy.get('@name').should('have.text', 'Краторная булка N-200i');
        cy.get('[class^=modal_box__]').as('box');
        cy.get('@box').find('[class^=modal_stat__]').should('exist')
        
      });

})