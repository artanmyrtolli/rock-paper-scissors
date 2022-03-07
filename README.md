# ------------- Rock-Paper-Scissors ---------------

## OVERVIEW

This is a simple web-based game of `rock-paper-scissors` that also includes the variety of a 5-throw game mode `rock-paper-scissors-lizard-alien`.

The game has been given an 80's arcade aesthetic with 8-bit inspired assets/graphics, including interchangeable backgrounds and player avatars.

The spec for this project can be found --[here](https://frontend.turing.edu/projects/module-1/rock-paper-scissors-solo.html)--

## Learning Goals

Solidify and demonstrate your understanding of:
  - DRY JavaScript
  - event delegation to handle similar event listeners
  - Understand the difference between the data model and how the data is displayed on the DOM
  - Step-by-step problem solving

## Contributors

Artan Myrtolli

## USER INSTRUCTIONS

Goals - To beat the computer or `CPU` at a game of rock-paper-scissors by "attacking" with a throw that will beat the computer's randomly generated choice.

The user may first familiarize themselves with the rules by hitting the `Rules` button near the bottom right of the screen. This will bring up an image that describes which choice beats what potential `CPU` choice. Clicking the `Rules` button again will toggle the image on/off.

![rules button](https://user-images.githubusercontent.com/92772785/157121859-0f03861e-eea2-4f83-9cd1-bf0dbe12f461.png) ![Screen Shot 2022-03-06 at 2 43 05 AM](https://user-images.githubusercontent.com/92772785/157121822-02cc7257-4f60-4336-aa53-8c651906cc7e.png)


The user may change their avatar by clicking on the `Pick Fighter` button. This will bring up 3 potential options to select at the bottom of the screen. The user may select one and have their image updated in the bottom left of the screen. The user may update their choice anytime by clicking the `Pick Fighter` button again.

<img width="421" alt="Screen Shot 2022-03-07 at 4 41 28 PM" src="https://user-images.githubusercontent.com/92772785/157123199-0a7cec81-f1f4-48b8-b371-7bad92f59c2e.png">


The user may pick their preferred background by clicking the `Change Background` button. Clicking the button repeatedly will cycle through 7 background choices. This is for visual purposes only and will not alter gameplay. 

<img width="223" alt="Screen Shot 2022-03-07 at 4 49 12 PM" src="https://user-images.githubusercontent.com/92772785/157123553-e1e9ed52-1404-49b2-b466-35058dd0c070.png">

The user may click the `Attack` button to bring up an initial 3 choices of `Rock`, `Paper`, and `Scissors`. The user may commit to their throw choice by clicking on the corresponding button.

The results will be flashed in the bottom of the half of screen, along with a message detailing what choice won and what choice lost (will not show in a tie). The flashing winner message will automatically disappear in a few seconds, the more detailed message will persist until a new round is initialized.

<img width="429" alt="Screen Shot 2022-03-07 at 4 50 39 PM" src="https://user-images.githubusercontent.com/92772785/157124010-58a44623-bf7a-4c82-8797-b3f8f7feb987.png">

The winner will have their win counter tallied along the left and right side of the screen, respectively.

The user may click the `Attack` button again anytime for another round. The user does not need to wait for the flashing message to automatically disappear to begin a new round.

The user may change the game mode to the 5-throw version by clicking the `Game Mode` button in the top right side of the screen. The Title header of the page as well as corresponding message underneath it will update the user that the game mode has changed, and what it is currently.

Upon changing to the 5-throw variation of the game, when the `Attack` button is clicked, 2 additional options of `Lizard` and `Alien` will now also appear.

<img width="454" alt="Screen Shot 2022-03-07 at 4 50 59 PM" src="https://user-images.githubusercontent.com/92772785/157123943-ec466c83-8d39-477c-b5b9-32b0f911a49b.png">


User may update their displayed name in the top left of the screen anytime by clicking the `Change Name` button in the bottom left of the screen. The button will bring up a simple field for the user to type in their desired name to be displayed. Clicking the `Submit` button on this form will confirm the user's choice and hide the window.

<img width="387" alt="Screen Shot 2022-03-07 at 4 51 11 PM" src="https://user-images.githubusercontent.com/92772785/157123905-a7b955ea-5c9d-4ce0-bc53-2fded1352d8a.png">


User may reset the game at anytime by clicking the `Reset Score` button. User selected background, avatar, and name will persist. To fully reset user may reload the page on their browser. 
