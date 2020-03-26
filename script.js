
const createChatBubble = (anotherClass) => {
    let chatBubble = document.createElement('div');
    chatBubble.classList.add("chat-bubble", anotherClass);

    let paragraph = document.createElement('p');
    paragraph.innerText = "This is a Javascript created Paragraph";

    chatBubble.appendChild(paragraph);

    let wrapper = document.getElementById('chat-bubble-wrapper');
    wrapper.appendChild(chatBubble)
}

// This loop will create 10 chat bubbles, with alternating out and in class added to the bubble
for(let idx = 0; idx < 10; idx++){

    if( idx % 2 === 0 ){

        createChatBubble('out');

    } else {

        createChatBubble('in');

    }
}

/*
 *
 *
 * Start of task here:
 * - you will be creating this block of HTML with the following function createPreviewBox:
 * 
 *      <div class="message-preview-box">
 *          <div class="img-wrap">
 *              <img src="./images/sirBarksAlot.jpeg" alt="A cute puppy icon">
 *          </div>
 *          <div class="message-text-wrap">
 *              <p>Bark Wharlberg</p>
 *              <p>I'm baby pok pok forage kinfolk taxidermy actually cornhole</p>
 *          </div>
 *          <div class="date-wrap">
 *              <p>3/12/20</p>
 *          </div>
 *      </div>
 * 
 *  - Using the comments as a guide, create this chunk of code with JavaScript and add it to the DOM
 */

 function createPreviewBox() {

    //Create a div element and assign it to a variable called previewBox
    let previewBox = document.createElement('div');
    // add a class of "message-preview-box" to the previewBox element you jsut created
    previewBox.classList.add('message-preview-box')

    // Create a div element and assign it to a variable called imageWrap

    // add a class of "img-wrap" to the imageWrap element you just created

    // Create an img element and assign it to a variable called image

    // add a src attribute and alt attribute to the image element you just created (hint: google for reference the JS method 'setAttribute')

    // append the image to the imageWrap

    // append the imageWrap to the previewBox

    // Create a div element and assign it to a variable called textWrap

    // add a class of "message-text-wrap" to the textWrap element you just created

    // Create a paragraph element and assign it to a variable called p1

    // set the innerHTML of p1 equal to the name "Mcgruff the Crime Dog"

    // Create a second paragraph element and assign it to a variable called p2

    // set the innerHTML of p2 equal to the message "Take a Bite Out of Crime"

    // append p1 to the textWrap

    // append p2 to the textWrap

    // append the textWrap to the previewBox

    // Create a div element and assign it to a variable called dateWrap

    // add a class of "date-wrap" to the dateWrap element you just created

    // Create a paragraph element and assign it to a variable called dateP

    // set the innerHTML of dateP equal to the name "3/25/20"

    // append dateP to the dateWrap

    // append the dateWrap to the previewBox

    // Select the div with the id of "message-wrapper" (already on the HTML page) and assign that to a new variable named "messageWrap".

    // append the previewBox element to the messageWrap

 }

 //Invoke the createPreviewBox function to see it work!