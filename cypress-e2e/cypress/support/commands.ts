
require('cypress-downloadfile/lib/downloadFileCommand');

// Custom command to click or get a checkbox element
Cypress.Commands.add('clickCheckBox', (locator: string, check: boolean) => {
  if(check){
    return cy.get(locator).click();
    //get year
    //get month
  }
  return cy.get(locator);
})

// Handle uncaught exceptions to prevent test failures
/*
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
*/

// Custom command to select an option from a dropdown
Cypress.Commands.add('selectOption', (locator: string, value: string) => {
  if(value){
    cy.wait(500)
    cy.get(locator).parent().click();
    cy.contains(value).click();
  }
})

// Custom command to select or deselect a checkbox based on the provided value
Cypress.Commands.add('selectCheckBox', (locator: string, value: string) => {
  if(value){
    cy.get(locator).prev('input').invoke('prop','checked').then(state => {
      let flag = value.toLowerCase().trim() === "true";
      if(flag){
        if(!state){
          cy.get(locator).click();
        }
      } else {
        if (state) {
          cy.get(locator).click();
        }
      }
    })
  }
})

// Custom command to select or deselect the first checkbox in a group based on the provided value
Cypress.Commands.add('selectUniqueCheckBox', (locator: string, value: string) => {
  if (value) {
    cy.get(locator).first().invoke('prop', 'checked').then(state => {
      let flag = value.toLowerCase().trim() === "true";
      if (flag) {
        if (!state) {
          cy.get(locator).next('label').click();
        }
      } else {
        if (state) {
          cy.get(locator).next('label').click();
        }
      }
    })
  }
})

// Custom command to select an option from a combo box
Cypress.Commands.add('selectComboBoxOption', (locator: string, value: string, option_element?: string) => {
  option_element = option_element === undefined ? "li" : option_element;
  if (value) {
    cy.get(locator).first().click();
    cy.contains(option_element, value).first().click();
  }
})

// Custom command to clear the value of an element and type a new value
Cypress.Commands.add('clear_value_and_type', { prevSubject: 'element' }, (subject, value: string) => {
  cy.wrap(subject).invoke('val', value)
})

// Custom command to clear the text of an element and type the provided value
Cypress.Commands.add('sendText', { prevSubject: 'element' }, (subject, value: string) => {
  if (value) {
    cy.wrap(subject).clear().type(value).click()
  }
})

// Custom command to send text to a specified element
Cypress.Commands.add('sendTextToElement', (locator: string, text: string) => {
  if (text) {
    cy.get(locator).first().clear().type(text).click()
  }
})

// Custom command to send a date to an element, with optional modifications
Cypress.Commands.add('sendDateToElement', (locator: string, text: string, datetime?: boolean, start_of_day?: boolean) => {
  if (text) {
    let result = "";
    text = text.toLowerCase();
    if (text.includes('year') || text.includes('month') || text.includes('day') || text.includes('hour') || text.includes('minute') || text.includes('current')) {
      let modifications: string[] = text.split(',')
      let date = new Date()
      modifications.forEach(element => {
        let splitted = element.trim().split(" ");
        let operator;
        let amount;
        let type;
        if (splitted.length === 3) {
          operator = splitted[0].trim();
          amount = splitted[1];
          type = splitted[2];
        } else {
          operator = "+";
          amount = splitted[0];
          type = splitted[1];
        }
        if (operator === "+") {
          switch (type) {
            case 'years':
            case 'year':
              date.setFullYear(date.getFullYear() + parseInt(amount))
              break;
            case 'months':
            case 'month':
              date.setMonth(date.getMonth() + parseInt(amount))
              break;
            case 'days':
            case 'day':
              date.setDate(date.getDate() + parseInt(amount))
              break;
            case 'hours':
            case 'hour':
              date.setHours(date.getHours() + parseInt(amount))
              break;
            case 'minutes':
            case 'minute':
              date.setMinutes(date.getMinutes() + parseInt(amount))
              break;
          }
        } else {
          switch (type) {
            case 'years':
            case 'year':
              date.setFullYear(date.getFullYear() - parseInt(amount))
              break;
            case 'months':
            case 'month':
              date.setMonth(date.getMonth() - parseInt(amount))
              break;
            case 'days':
            case 'day':
              date.setDate(date.getDate() - parseInt(amount))
              break;
            case 'hours':
            case 'hour':
              date.setHours(date.getHours() - parseInt(amount))
              break;
            case 'minutes':
            case 'minute':
              date.setMinutes(date.getMinutes() - parseInt(amount))
              break;
          }
        }
      });
      if (datetime === true) {
        if (start_of_day === true) {
          result = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} 00:00`
        } else {
          result = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
        }
      } else {
        result = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
      }
    } else {
      result = text;
    }

    cy.get(`input${locator}`).sendText(result);
  }
})

// Custom command to check if an element exists in the DOM
Cypress.Commands.add('element_exist', (locator: string): boolean => {
  cy.get('body').find(locator).its('length').then(res => {
    return res > 0;
  })
  return false;
})

// Custom command to upload a file to an input element
Cypress.Commands.add('uploadFile', (locator: string, file_name: string) => {
  if (file_name) {
    cy.get(locator).selectFile(`cypress/fixtures/${file_name}`, { force: true })
  }
})

// Custom command to check if a field is mandatory and validate the field
Cypress.Commands.add('checkMandatoryField', (locator: string, validationMessage?: string) => {
  cy.get(locator).parents('.modal-content').should('exist');

  // Asserting the asterisk in the ::after pseudo-element
  cy.get(locator).find('label').then($el => {
    const label = $el[0];
    const pseudoContent = window.getComputedStyle(label, '::after').getPropertyValue('content');
    expect(pseudoContent).to.eq('"*"'); 
  });
  if (validationMessage) {
    cy.get(locator).should('contain', validationMessage);
  } else {
    cy.get(locator).should('contain', 'This field is required');
  }
});

//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwriteQuery('get', (originalFn, locator, options) => {
//   return originalFn.bind(this)(locator, options).then($elem => {
//     $elem.css('border', '3px solid yellow');
//     return $elem;
//   });
// })

// https://docs.cypress.io/guides/tooling/typescript-support#Types-for-Custom-Commands

/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    clickCheckBox(locator: string, check: boolean): void
    selectOption(locator: string, value: string): void
    selectCheckBox(locator: string, value: string): void
    selectUniqueCheckBox(locator: string, value: string): void
    selectComboBoxOption(locator: string, value: string, option_element?: string): void
    clear_value_and_type(value: string): Chainable<Element>
    sendText(value: string): Chainable<Element>
    sendTextToElement(locator: string, text: string): boolean
    sendDateToElement(locator: string, text: string, datetime?: boolean, start_of_day?: boolean): boolean
    element_exist(locator: string): boolean
    uploadFile(locator: string, file_name: string): void
    checkMandatoryField(locator: string, validationMessage?: string): void
  }
}
