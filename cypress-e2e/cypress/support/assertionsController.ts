// ***********************************************
// this contains all custom assertions commands, functions should higlight the passed 
// assertions with green colored border and the failed assertions with red colored border.
// ***********************************************
//


Cypress.Commands.add('assertElementNotExist', (locator:string) => { 
  cy.get('body').then(res =>{
    let len = res.find(locator).length;
    expect(len > 0).to.be.false;
  })
 })

Cypress.Commands.add('asserText', { prevSubject: 'element'}, (subject, value:string) => { 
  if(value){
    let result: boolean = subject.text().replace(/(\r\n|\n|\r)/gm, " ").trim() === value
    if(result){
      subject.css('border','5px solid green')
    }else{
      subject.css('border','5px solid red')
    }
    // cy.wrap(subject).scrollIntoView({ offset: { top: Cypress.config("viewportHeight") / -2, left: 0 } }).should('have.text',value)
    expect(subject.text().replace(/(\r\n|\n|\r)/gm, " ").trim()).to.eql(value.trim())
  }
 })
 
 Cypress.Commands.add('asserTextContains', { prevSubject: 'element'}, (subject, value:string) => { 
  if(value){
    let result: boolean = subject.text().replace(/(\r\n|\n|\r)/gm, " ").includes(value)
    if(result){
      subject.css('border','5px solid green')
    }else{
      subject.css('border','5px solid red')
    }
    cy.wrap(subject).scrollIntoView({ offset: { top: Cypress.config("viewportHeight") / -2, left: 0 } }).should('contain.text',value)
  }
 })
 
 Cypress.Commands.add('assertElementText', (locator: string, value: string, index?:number) => {
  index = index === undefined? 0: index;
  if(value){
    cy.get(locator).eq(index).then((element) => {
      let result: boolean =  element.text().replace(/(\r\n|\n|\r)/gm, "").trim() === value
      if(result){
        element.css('border','5px solid green')
      }else{
        element.css('border','5px solid red')
      }
      cy.wrap(element).scrollIntoView({ offset: { top: Cypress.config("viewportHeight") / -2, left: 0 } })
      expect(element.text().replace(/(\r\n|\n|\r)/gm, "").trim()).to.eql(value.trim())
  })}
})
 
Cypress.Commands.add('assertElementTextContains', (locator: string, value: string, index?:number) => {
  index = index === undefined? 0: index;
  if(value){
    cy.get(locator).eq(index).then((element) => {
      let result: boolean =  element.text().replace(/(\r\n|\n|\r)/gm, "").includes(value)
      if(result){
        element.css('border','5px solid green')
      }else{
        element.css('border','5px solid red')
      }
      cy.wrap(element).scrollIntoView({ offset: { top: Cypress.config("viewportHeight") / -2, left: 0 } })
      expect(element.text().replace(/(\r\n|\n|\r)/gm, "").trim()).to.include(value.trim())
    })
  }
})
// FIX THIS TO VERIFY EACH EXACT COLUMN
Cypress.Commands.add('assertTableRecord', (identifier: string, record, count?:number) => {
  count = count === undefined? 1: count;
  let elements_count:number = 0;
  cy.get(`td:contains('${identifier}')`).each(($element, index, $list) =>{
    let values:string[] = Object.values(record)
    let correct_row = true;
    for(let value of values){
      if(has_value($element, value) === false){
        correct_row = false;
        break;
      }
    }

    if(correct_row){
        elements_count++;
        for(let value of values){
          assert_data($element, value)
        }
    }
  }).then(($el) =>{
      expect(count).eq(elements_count);
  })
})

Cypress.Commands.add('assertDropdownValueNotExists', (dropdownLocator: string, value: string, optionElement?:string) => {
  optionElement = optionElement === undefined? "li" : optionElement;
  cy.get(dropdownLocator).first().click();
  cy.contains(optionElement, value).should('not.exist');
});

function assert_data(element, value:string){
  if(value !== null && value !== undefined){
      cy.wrap(element).parent().contains(value).asserText(value);
  }
}
function has_value(element, value): boolean{
  if(value !== null && value !== undefined){
      return element.parent().find(`td:contains(${value})`).length > 0
  }
  return true;
}
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    asserText(value:string): Chainable<Element>
    asserTextContains(value: string): Chainable<Element>
    assertElementText(locator: string, value:string, index?:number): void
    assertElementTextContains(locator: string, value:string, index?:number): void
    assertTableRecord(identifier: string, record, count?:number): void
    assertElementNotExist(locator:string): void
    assertDropdownValueNotExists(dropdownLocator: string, value: string, optionElement?: string) : void
  }
}

