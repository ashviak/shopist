## Table of Contents
* Introduction
* Installation Setup 
* How to Run
* GitHub

********************************* INTRODUCTION *********************************

In this project, we do UI automation testing on 'shopist.io' website. 
In the framework we have 2 scenarios/ test cases,
   [case-1] => Adding item to cart and verifying the item name and price.
   [case-2] => Validate the error message thrown on random discoun code.

***************************** INSTALLATION PROCESS *****************************

1. Install "node.js" and configure the same in environment variables
2. Install VScode
3. Open VScode
4. Select File > Open Folder.
5. Choose the project folder and now the project is ready to use.

*********************************** HOW TO RUN ***********************************

1. To run in headless mode/to generate report: 
        npx cypress run --spec cypress/intergration/VerifyDiscountCodeErrorMessage.js
2. To run in headed mode (to open cypress test runner):
        npx cypress open


