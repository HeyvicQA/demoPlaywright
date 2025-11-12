import { test, expect } from '@playwright/test';
import { SauceDemoPOM } from './SauceDemoPOM';

test.describe('Sauce Demo Checkout Automation', () => {
  test('Automate checkout process', async ({ page }) => {
    const sauceDemo = new SauceDemoPOM(page);

    // Navegar e iniciar sesión
    await sauceDemo.navigateToLogin();
    await sauceDemo.login('standard_user', 'secret_sauce');

    // Añadir producto al carrito
    await sauceDemo.addToCart('Sauce Labs Backpack');

    // Proceder al checkout
    await sauceDemo.proceedToCheckout();

    // Completar información de envío
    await sauceDemo.fillShippingDetails('John', 'Doe', '90210');

    // Finalizar el checkout
    await sauceDemo.finishCheckout();

    // Verificar mensaje de éxito
    const success = await sauceDemo.verifySuccessMessage();
    expect(success).toBeTruthy();
  });
});
