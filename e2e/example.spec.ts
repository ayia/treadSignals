import { test, expect } from '@playwright/test'

test.describe('Home Page', () => {
  test('should load the home page', async ({ page }) => {
    await page.goto('/')

    // Check that the page loads
    await expect(page).toHaveTitle(/ChartDepth/i)
  })

  test('should have a main heading', async ({ page }) => {
    await page.goto('/')

    // Look for main heading
    const heading = page.locator('h1')
    await expect(heading).toBeVisible()
  })
})

test.describe('Navigation', () => {
  test('should navigate to login page', async ({ page }) => {
    await page.goto('/')

    // Click login link if exists
    const loginLink = page.locator('a[href*="login"], button:has-text("Login")')
    if (await loginLink.isVisible()) {
      await loginLink.click()
      await expect(page).toHaveURL(/login/)
    }
  })
})

// Authentication flow tests (to be implemented)
test.describe('Authentication', () => {
  test.skip('should allow user to sign up', async ({ page }) => {
    // TODO: Implement when auth is ready
    await page.goto('/signup')
  })

  test.skip('should allow user to login', async ({ page }) => {
    // TODO: Implement when auth is ready
    await page.goto('/login')
  })
})
