[Iteration 1]

- Involves 5 screens.
- There is no javascript logic needed in this iteration.
- Completed except the background of 2nd screen still need to be amended

[Iteration 2]

- Involves 8 merchant screens and 1 client screen.
- Basic javascript hard-coded logic is needed in this iteration.
- The order of pages are resetted. Developer need to create 1st, 5th and 6th pages.
- The 8 merchant screens are interrelated and allow user to navigate between the pages.
- (Detail)
  a) Page 6 re-use page 2 design. The only difference is it has an extra popup.
  b) client-Login page are independent. It is not related with merchant screens.
  c) Logic :

   (1_login.jpg)
   User keys in remember and abc123 and click signin button, screen redirects to 2_merchant.jpg.
   
   (2_merchant.jpg)
   User clicks purchase button, screen redirects to 3_purchase.jpg.

   (3_purchase.jpg)
   User clicks Gigi button and Gigi word appear on the screen.
   User keys in Pin code = 8055, system redirects to 4_puchase.jpg.
   
   (4_purchase.jpg)
   User clicks credit button and key in RM30.
   User clicks point button and key in 30.
   User presses barcode button.
   System redirects to 5_purchase.jpg.

   (5_purchase.jpg)
   User scans the barcode and system redirects to merchant 2_merchant.jpg.

   (2_merchant.jpg)
   User clicks member button, screen redirects to 7_member.jpg.
   User clicks transcation log button, screen redirects to 8_transcation_log.jpg.