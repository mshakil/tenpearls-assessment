// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('isVisible', selector =>{
    cy.get(selector,{ timeout: 10000 }).should('be.visible')
})

Cypress.Commands.add('isHidden', selector =>{
    cy.get(selector,{ timeout: 10000 }).should('not.exist')
})

Cypress.Commands.add('setResolution', size =>{
    if(Cypress._.isArray(size)){
        cy.viewport(size[0],size[1])
    }
    else{
        cy.viewport(size)
    }
})

Cypress.Commands.add('isDisable', selector =>{
    cy.get(selector,{ timeout: 10000 }).should('be.disabled')
})


Cypress.Commands.add('isEnable', selector =>{
    cy.get(selector,{ timeout: 10000 }).should('be.enabled')
})

Cypress.Commands.add('isEmpty',selector => {
    cy.get(selector,{ timeout: 10000 }).should('be.empty');
})

Cypress.Commands.add('isNotEmpty',(selector,text )=> {
    cy.get(selector,{ timeout: 10000 }).should('have.text',text);
})

Cypress.Commands.add('login', (email,password) =>{
    //  Click Sign button
    cy.get("div.header_user_info a.login").click();

    //  Enter email
    cy.get("input[id='email']").clear().type(email);

    //  Enter password
    cy.get("input[id='passwd']").clear().type(password);

    //  Click Submit Button
    cy.get("button[id='SubmitLogin']").click();
})