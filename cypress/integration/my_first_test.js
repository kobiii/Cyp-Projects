/// <reference types="cypress" />


it('google test', function() {

    cy.visit('http://google.com/')
    cy.get('.gLFyf').type('Automation Step by Step{enter}')

    cy.contains('Videos').click()

})

it.only('login test', function() {
    
    cy.visit('https://orangehrm-demo-6x.orangehrmlive.com/auth/login')
    cy.get('#btnLogin').click()
    cy.get('#menu_admin_viewAdminModule > :nth-child(1) > .left-menu-title').click()
    cy.get('#menu_admin_UserManagement > .collapsible-header > .left-menu-title').click()
    cy.get('#menu_admin_viewSystemUsers > .left-menu-title').click()
    cy.get('.btn-floating > .material-icons').click()
    cy.get('#modal-save-button').click()


})