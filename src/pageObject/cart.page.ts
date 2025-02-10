import { test, Locator, Page } from "@playwright/test";
import { text } from "stream/consumers";
import { BasePage } from "./basePage";



export class Cartpage{
   private menu: Locator;
   private readonly page: Page;
   
   private readonly Menubar  = '[class=" css-19bb58m"]'
   private readonly selectAria ='[id="react-select-2-option-4"] span'
   private readonly preOrder ='[class*="rounded-04 text-capitalize"]'
   private readonly areDropdown = "[class*='css-8mmkcg']";
 
 constructor(page: Page) {
  
       this.page = page;   
 }
 
 async pressselectAria(){
    await this.page.locator(this.selectAria).click({force:true});
 }
 async pressMenubar(){
    await this.page.locator(this.Menubar).click();
 }
 async pressPreOrderBtn(){
   await this .page.locator(this.preOrder).click();
   
 }
 async areaDropDown(){
   await this.page.locator(this.areDropdown).click({force: true});
 }
 

}