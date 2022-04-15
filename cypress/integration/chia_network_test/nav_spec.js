/// <reference types="Cypress"/>

describe('Test Chia Network Web Site using Cypress', ()=>{

    beforeEach(() => {
        cy.visit('https://www.chia.net')
    })

    it('Confirm Heading Navigation links work', ()=>{
       cy.confirmHeadings()
  
    })
    it('Verify Media links', ()=>{
        cy.contains('Contact').click()
        cy.contains('Contact Us')

        cy.fixture('media_links').then(function(data){
           // cy.log(data)
            cy.verifyMediaLinks(data.Linkedin)
            cy.verifyMediaLinks(data.Instagram)
            cy.verifyMediaLinks(data.Twitter)
            cy.verifyMediaLinks(data.Facebook)
    
        })  

    })
    
})