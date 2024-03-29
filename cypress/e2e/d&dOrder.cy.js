import {API_URL} from '../../src/utils/TrueBurgerApi'
describe('Test drag & drop', () => {

  beforeEach(function () {
    
    cy.visit("/");
    cy.viewport(1700, 1110);
    cy.intercept("GET", `${API_URL}/ingredients`, { fixture: "ingredients.json" });
    cy.intercept("POST", `${API_URL}/auth/login`, { fixture: "login.json" })
    cy.intercept("POST", `${API_URL}/orders`, { fixture: "order.json" });
  })

  
  it('drag & drop | modal | close modal test', () => {
    const ingredientClass = '[class^=burger-ingredients_ingredient__]' ;
    cy.get(ingredientClass).first().find('a').as('bun');
    cy.get('[class^=burger-constructor_constructorBox__]').as('dropPlace');
    cy.get('@bun').trigger('dragstart', { dataTransfer: new DataTransfer() });
    cy.get('@dropPlace')
      .trigger('dragenter', { dataTransfer: new DataTransfer() })
      .trigger('dragover', { dataTransfer: new DataTransfer() })
      .trigger('drop', { dataTransfer: new DataTransfer() });
    cy.get('@bun').trigger('dragend');

    cy.get(ingredientClass).last().find('a').as('main');

    cy.get('@main').trigger('dragstart', { dataTransfer: new DataTransfer() });
    cy.get('@dropPlace')
      .trigger('dragenter', { dataTransfer: new DataTransfer() })
      .trigger('dragover', { dataTransfer: new DataTransfer() })
      .trigger('drop', { dataTransfer: new DataTransfer() });
    cy.get('@main').trigger('dragend');

    cy.get('[class^=burger-constructor_gapBox__]').find('div').first().find('div').find('[class^=constructor-element]').should('exist');
    cy.get('[class^=burger-constructor_gapBox__]').find('div').eq(2).find('div').find('[class^=constructor-element]').should('exist');
  });
  it('order modal test', () => {
    const ingredientClass = '[class^=burger-ingredients_ingredient__]' ;
    cy.get(ingredientClass).first().find('a').as('bun');
    cy.get('[class^=burger-constructor_constructorBox__]').as('dropPlace');
    cy.get('@bun').trigger('dragstart', { dataTransfer: new DataTransfer() });
    cy.get('@dropPlace')
      .trigger('dragenter', { dataTransfer: new DataTransfer() })
      .trigger('dragover', { dataTransfer: new DataTransfer() })
      .trigger('drop', { dataTransfer: new DataTransfer() });
    cy.get('@bun').trigger('dragend');

    cy.get(ingredientClass).last().find('a').as('main');

    cy.get('@main').trigger('dragstart', { dataTransfer: new DataTransfer() });
    cy.get('@dropPlace')
      .trigger('dragenter', { dataTransfer: new DataTransfer() })
      .trigger('dragover', { dataTransfer: new DataTransfer() })
      .trigger('drop', { dataTransfer: new DataTransfer() });
    cy.get('@main').trigger('dragend');

    cy.get("button").contains("Оформить заказ").click();
    const email = "testtest@test.ru";
    const password = "testtest";
    cy.get('[name^=email]').type(email);
    cy.get('[name^=password]').type(password);
    cy.get("button").contains("Войти").click();
    cy.get("button").contains("Оформить заказ").click();
    cy.get('[class^=modal_backdrop__]').should('exist');
    cy.get('[class^=modal_closeIcon__]').click()
    cy.get('[class^=modal_backdrop__]').should('not.exist');
  });

})