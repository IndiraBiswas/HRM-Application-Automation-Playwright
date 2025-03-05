import { test, expect } from '@playwright/test';

test('Add a New Employee and Verify Login', async ({ page, browser }) => {
    // Step 1: Admin Login
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    // Verify successful login
    await expect(page).toHaveURL(/dashboard/);

    // Step 2: Navigate to "Add Employee" section
    await page.getByRole('link', { name: 'PIM' }).click();;
    await page.getByRole('link', { name: 'Add Employee' }).click();


    // Generate random first name, last name, and username
    const randomNumber = Math.floor(Math.random() * 10000);
    const firstName = `Test${randomNumber}`;
    const lastName = `User${randomNumber}`;
    const username = `testuser${randomNumber}`;
    const password = 'Test@1234';

    // Fill in employee details

    await page.fill('input[name="firstName"]', firstName);
    await page.fill('input[name="lastName"]', lastName);
    
    // Enable login credentials
    await page.locator('form span').click();
    await page.locator('div:nth-child(4) > .oxd-grid-2 > div > .oxd-input-group > div:nth-child(2) > .oxd-input').click();
    await page.locator('div:nth-child(4) > .oxd-grid-2 > div > .oxd-input-group > div:nth-child(2) > .oxd-input').fill(username);
    await page.locator('input[type="password"]').first().click();
    await page.locator('input[type="password"]').first().fill(password);
    await page.locator('div').filter({ hasText: /^Confirm Password$/ }).first().click();
    await page.locator('input[type="password"]').nth(1).fill(password);


    // Submit and save employee details
    await page.getByRole("button", { name: "Save" }).click();

    // Step 3: Verify employee is added successfully
    await expect(page.getByText("Successfully Saved")).toBeVisible();

    // Step 4: Log out Admin
    await page.getByRole('banner').getByRole('img', { name: 'profile picture' }).click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();

    // Step 5: Log in as the new employee
    const employeePage = await browser.newPage();
    await employeePage.goto('https://opensource-demo.orangehrmlive.com/');
    await employeePage.fill('input[name="username"]', username);
    await employeePage.fill('input[name="password"]', password);
    await page.getByRole('button', { name: 'Login' }).click();

    // Verify new employee login success
    //await expect( page.getByRole("heading", { name: "Dashboard" })).toBeVisible();

});
