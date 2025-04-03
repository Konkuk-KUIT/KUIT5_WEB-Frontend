import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

// Get all subdirectories in week3 directory

const getPathOf = (dir: string) => path.join(process.cwd(), dir);
const getSubdirectoriesOf = (dir: string) => {
  const week3Path = getPathOf(dir);
  return fs
    .readdirSync(week3Path, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
};

const week3Path = getPathOf("week3");
const subdirectories = getSubdirectoriesOf("week3");

// Test suite for each subdirectory
const createTestSuite = (subdir: string) => {
  const testPath = path.join(week3Path, subdir);

  test.describe(`Week3 Tests - ${subdir}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(`/week3/${subdir}/index.html`);
    });

    test("should load index.html", async ({ page }) => {
      const htmlPath = path.join(testPath, "index.html");
      expect(fs.existsSync(htmlPath)).toBeTruthy();

      await expect(page.locator("html")).toBeVisible();
      await expect(page.locator("body")).toBeVisible();

      const title = await page.title();
      expect(title).toBeTruthy();
    });

    test("should load index.css", async ({ page }) => {
      const cssPath = path.join(testPath, "index.css");
      expect(fs.existsSync(cssPath)).toBeTruthy();

      const styles = await page.evaluate(() => {
        return Array.from(document.styleSheets).map((sheet) => sheet.href);
      });
      expect(styles.some((href) => href?.includes("index.css"))).toBeTruthy();
    });

    test("should load index.js", async ({ page }) => {
      const jsPath = path.join(testPath, "index.js");
      expect(fs.existsSync(jsPath)).toBeTruthy();

      const scripts = await page.evaluate(() => {
        return Array.from(document.scripts).map((script) => script.src);
      });
      expect(scripts.some((src) => src?.includes("index.js"))).toBeTruthy();
    });
  });
};

// Create test suites for all subdirectories
subdirectories.map(createTestSuite);
