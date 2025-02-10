import { test, Locator, Page } from "@playwright/test";


export class CheckOutPage {

   private readonly page: Page;

   public readonly FullName = '[id="full_name"]';
   private readonly PhonNumber = '[id="contact_phone"]';
   private readonly Address = '[placeholder="Enter your complete address]';
   private readonly Landmark = '[placeholder="any famous place nearby"]';
   private readonly Instructions = '[id="delivery_instruction"]';
   private readonly paymentMethod = '[class*="ck-payment-cards-options not"]'
   private readonly Entervocher = '[placeholder="Enter Voucher / Promo code"]';
   private readonly placeOrder = 'button:has-text("Place Order")';


   constructor(page: Page) {
      this.page = page;
  }
   
   
    async enterFullName (FullName: string) {
      await this.page.locator(this.FullName).fill(FullName);
   }
    async enterPhoneNo(phoneNo: any) {
      await this.page.locator(this.PhonNumber).nth(1).fill(phoneNo);
   }

    async enterAddress(Address: string) {
      await this.page.locator(this.Address).fill(Address);
   }
    async enterlandmark(Landmark: string) {
      await this.page.locator(this.Landmark).fill(Landmark);
   }
    async Enterinstruction(Instructions: string) {
      await this.page.locator(this.Instructions).fill(Instructions);
   }
    async enterPayment(paymentMethod: string) {
      await this.page.locator(this.paymentMethod).fill(paymentMethod);
   }
    async enterVocher(Entervocher: string) {
      await this.page.locator(this.Entervocher).fill(Entervocher);
   }

    async pressPlaceOrderBtn(){
      await this.page.locator(this.placeOrder).click();
   }
   async presspamentMethod(){
   await this.page.locator(this.paymentMethod).click();
  }


   }
  