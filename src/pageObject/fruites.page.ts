import { test, Locator, Page } from "@playwright/test";


export class FruitsPage {
   private readonly page: Page;
   private readonly addtoCart ='[aria-label="Add To Cart Button"]'
   private readonly AddToCart = "[aria-label='Add To Cart Button']"
   private readonly viewCart = '[class="p-0 qty-text text-center col"]'
   
   constructor(page: Page) {
      this.page = page;
   }
   async openPage() {
      await this.page.goto('https://fruitsabzi.pk/');
   }
   async pressAddtoCart(){
      await this.page.locator(this.AddToCart).nth(3).click();
   }
   async pressAddtoCart1(){
      await this.page.locator(this.AddToCart).nth(1).click();
   }
   async pressviewcard(){
      await this.page.locator(this.viewCart).click();
   }  
   

}