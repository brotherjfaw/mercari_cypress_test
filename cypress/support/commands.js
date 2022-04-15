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


Cypress.Commands.add('confirmHeadings', ()=>{

    let testData

    cy.fixture('headings').then(function(data){
        testData = data

        for (let i=1; i<=6; i++ ){
            let rowindex = JSON.stringify(i)
            if (i != 3){
                cy.get(`.site-nav > :nth-child(${rowindex}) > a`).click()
                cy.get('h1').should('have.text', testData[i])
                cy.log(testData[i])
            }
            

        }

    })
})


Cypress.Commands.add('verifyMediaLinks', (weblink)=>{
    cy.request({
        method: 'GET',
        url: weblink,
        form: true,
        body:{
        }
    }).then((response) =>{
        cy.log(response.body);
        expect(response.status).to.eq(200)
    })
})