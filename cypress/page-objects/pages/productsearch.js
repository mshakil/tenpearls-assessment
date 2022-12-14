
import BasePage from "../BasePage";
export default class ProductSearch extends BasePage{

    static enterProductNameInSearchBox(productName){
        cy.get("input#global-enhancements-search-query").clear().type(productName);
    }
    
    static clickSearchButton(){
        cy.get("button[aria-label='Search']").click();
    }

    static verifySearchedProductReturnSuccessfull(productIndex){
        cy.get("div.v2-listing-card__img").eq(productIndex).should('be.visible');
    }

    static getProductCardTitle(productIndex){

        cy.fixture('testdata').then(title=>{
            cy.get('h3.v2-listing-card__title').eq(productIndex).then(function($elem){
                cy.log($elem.text());
                title.productTitle = $elem.text().trim().toString();

                cy.log(title.productTitle);

                //  THIS LINE OF CODE WILL SAVE 1 PRODUCT NAME SHOWING IN GRID IN TEXT FILE.
                cy.writeFile('cypress/fixtures/productname.txt',title.productTitle);
            })
        })
    }

    static getProductLinkAndNavigateToProductPage(productIndex){
        cy.get("a.listing-link").eq(productIndex).should('have.attr','href').then((href)=>{
            this.logInfo(href);
            cy.visit(href);
        })
    }
    static verifyThatProductLinkIsOpenSuccessfully(){
        cy.fixture('testdata').then(title=>{
            cy.get('h1.wt-text-body-03').then(function($elem){
                cy.readFile('cypress/fixtures/productname.txt').should('contain',$elem.text().trim());
            })   
        })

    }

}