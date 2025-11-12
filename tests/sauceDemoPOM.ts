import { Page } from '@playwright/test';

export class SauceDemoPOM {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToLogin() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    await this.page.fill('#user-name', username);
    await this.page.fill('#password', password);
    await this.page.click('#login-button');
  }

  async addToCart(productName: string) {
    const productLocator = `text=${productName}`;
    await this.page.click(productLocator);
    await this.page.click('text=Add to cart');
  }

  async proceedToCheckout() {
    await this.page.click('.shopping_cart_link');
    await this.page.click('text=Checkout');
  }

  async fillShippingDetails(firstName: string, lastName: string, postalCode: string) {
    await this.page.fill('#first-name', firstName);
    await this.page.fill('#last-name', lastName);
    await this.page.fill('#postal-code', postalCode);
    await this.page.click('#continue');
  }

  async finishCheckout() {
    await this.page.click('#finish');
  }

  //async verifySuccessMessage() {
   // const successMessage = await this.page.textContent('.complete-header');
   // return successMessage?.trim().toUpperCase() === 'Thank you for your order!';
   async verifySuccessMessage() {
    const successMessage = await this.page.textContent('.complete-header');
    console.log('Mensaje capturado:', successMessage); // Agregar para verificar
    return successMessage?.trim() === 'Thank you for your order!';
  }
  
}
