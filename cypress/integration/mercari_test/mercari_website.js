/// <reference types="Cypress"/>

describe('Test Mercari Site using Cypress', ()=>{

    beforeEach(() => {
        cy.visit('/')
    })

    it('Confirm Shopping Cart', ()=>{
        cy.get('.components__WrapperButton-sc-18pafoj-0 > .Flex-ych44r-0 > svg').click()
        cy.contains('Your shopping cart is empty')
    })
    it('Search for Shirts', ()=>{
        cy.get('[data-testid=SearchInput]').type('Shirts')
        cy.get('[data-testid=SearchIcon] > svg').click().wait(2000)
        cy.url().should('include', 'Shirts')
        expect('[data-testid=SearchKeyword]').to.exist
        cy.contains('Shirts')

    })
    it('Confirm Login requires correct credentials', ()=>{
        cy.get('[data-testid=LoginButton]').click()
        cy.get('[data-testid=EmailInput]').type('brotherjfaw@gmail.com')
        cy.get('[data-testid=PasswordInput]').type('password00')
        cy.get('[data-testid=LoginSubmitButton] > .Text-uqn6ov-0').click()
        cy.contains('Something went wrong.')
    })
})