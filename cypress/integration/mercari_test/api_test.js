/// <reference types="Cypress"/>

describe('Perform some API calls', ()=>{

    let acctoken = '';
    let userId = '';

    before(('Generate Token and userID'), () =>{
        cy.request({
            method: 'POST',
            url: 'http://coop.apps.symfonycasts.com/token',
            form: true,
            body:{
                "client_id": "mercariCypressTestApp",
                "client_secret": "ce6964554354fc082c0d16c759151fcd",
                "grant_type": "client_credentials",
            }
        }).then((response) =>{
            cy.log(response.body.access_token);
            acctoken = response.body.access_token;

            cy.request({
                method: 'GET',
                url: 'http://coop.apps.symfonycasts.com/api/me',
                headers:{

                    'Authorization' : 'Bearer ' + acctoken,
                }

            }).then((res) =>{
                userId = res.body.id;
                cy.log(JSON.stringify(userId)); //with quotes
                cy.log(userId);


            })
        })
    })

    it('Call Barn Unlock API', ()=>{
        cy.request({
            method: 'POST',
            url: `http://coop.apps.symfonycasts.com/api/${userId}/barn-unlock`,
            headers:{
                'Authorization' : 'Bearer ' + acctoken,
            }
        }).then((res)=> {
            expect(res.status).to.equal(200);
            })
     })
    
     it('Call Put the Toilet Set down API', ()=>{
        cy.request({
            method: 'POST',
            url: `http://coop.apps.symfonycasts.com/api/${userId}/toiletseat-down`,
            headers:{
                'Authorization' : 'Bearer ' + acctoken,
            }
        }).then((res)=> {
            cy.log(res)
            expect(res.status).to.equal(200);
            expect(res.body.action).to.equal('toiletseat-down');
            expect(res.body.message).to.equal("You just put the toilet seat down. You're a wonderful roommate!");
            expect(res.body.success).to.equal(true);
            })
     })
     
})