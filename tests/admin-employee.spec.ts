import { test, expect } from '@playwright/test';

test.describe('HRM Application Automation', () => {

    test.beforeEach(async ({ page }) => {
        // Arrange: Open the OrangeHRM login page
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        // Act: Perform the login operation
        await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
        await page.getByRole('button', { name: 'Login' }).click();

        // Assert: Verify the successful login
        await expect(page).toHaveURL(/dashboard/);
    });
    test('Search for an employee', async ({ page }) => {

        // Act: Search for an employee    
        await page.getByRole('link', { name: 'PIM' }).click();
        await page.getByRole('textbox', { name: 'Type for hints...' }).first().click();
        await page.getByRole('textbox', { name: 'Type for hints...' }).first().fill('Charlotte Smith');
        await page.getByRole('button', { name: 'Search' }).click();

        // Assert: Verify the search results

        await expect(page.locator('body')).toContainText('Record Found');
    });
    
        });