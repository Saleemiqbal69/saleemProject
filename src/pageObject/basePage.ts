import { expect, Locator, Page } from "@playwright/test";
import { Timeout } from "../utils";

export class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
      }

  async waitForReadiness(number = Timeout.MINI_WAIT): Promise<void> {
    return await this.page.waitForTimeout(number);
  }
}