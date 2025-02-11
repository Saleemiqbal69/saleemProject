import { Expect,test,Page } from "playwright/test";

import { FruitsPage } from "../pageObject/fruites.page";
import { CheckOutPage } from "../pageObject/guestCheckOur.page";
import { Cartpage } from "../pageObject/cart.page";


test('add to cart testcases', async ({page})=>{
    const home=new FruitsPage(page);
    const homePage= new FruitsPage(page);
    const cartpage = new Cartpage(page);
    const guestCheckOut = new CheckOutPage(page);



    await homePage.openPage();
    await homePage.pressAddtoCart();
    await homePage.pressAddtoCart1();
    await homePage.pressviewcard();
    await page.waitForTimeout(10000);
    // await cartpage.pressMenubar();
    await cartpage.areaDropDown();
    // await page.waitForTimeout(10000);
    await cartpage.pressselectAria();
    await cartpage.pressPreOrderBtn();
    await guestCheckOut.enterFullName('ahmad ali');
    await guestCheckOut.enterPhoneNo('0309-3748593');
    await guestCheckOut.enterAddress('lahore') ;
    await guestCheckOut.enterlandmark('Bahria town');
    await guestCheckOut.Enterinstruction('Canal Gerden');
    await guestCheckOut.presspamentMethod();
    await guestCheckOut.enterVocher('6895855948322039');
    await guestCheckOut.pressPlaceOrderBtn();
})
