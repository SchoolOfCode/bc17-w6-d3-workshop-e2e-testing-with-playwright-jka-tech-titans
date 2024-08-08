import { test, expect } from "@playwright/test";

test("practice test should pass", () => {
    
})
 test('test', async({page})=>{
await page.goto('http://localhost:3000/');
// await page.getByRole('input', { name: 'Add' }).click();
// await page.getByRole('button', { name: 'Add' }).click();
expect(page.url()).toBe('http://localhost:3000/');
})