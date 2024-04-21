// NOTE TO SELF:
// You can either 
// 1) store a function / give it a name so you can call it later
// 2) store a function in an event so when that firing an event calls the function


// 1 - The .onload is a Global event that happens every time the browser window loads.
// here we are using it to fire a function that will log out a message in the console.
window.onload = () => {
  console.log("Hey student, welcome to your console!")

  // When the window loads, the BUTTON gets an event listener: listens for the CLICK event. 
  // What happens when a user clicks on the button? 
  // 1) Window does not reload
  // 2) Pass the name value to the sayHi function

  // Note: we didn't need to store things in submitButton (still works)....
  // Read the code: When the window loads, the event listener is added. 
  // By definition: When the event occurs, the function we defined in the 2nd argument happens.
  const submitButton = document.getElementById("submit-button").addEventListener("click", event => {
    
    // Prevents the event's default action. Reloading the window is the default action for the onclick event.
    event.preventDefault(),

    // this next line calls the sayHi function & passes it the value of the name input on the form from the target value of the event that's called when the form is submitted.
    sayHi(event.target.form.name.value)
  })
}



// 2 - This function is called when a user clicks on the button in the HTML. 
// Can you make the text "hello" log to the console?
const sayHello = () => {

  // Note that the counter does not include the # of times you pressed the other button due to the unique argument we put inside the count() method
  console.count("This is the # of times you have pressed the sayHello button")

  console.log("hello")

  // You don't need this return statement. Why is it here??
  return "Hello!"
}



// 3 - In the Chrome Console type out the name of each of these variables 
// ... one at a time and see what is returned.
const arr1 = [2, 4, 6, 77, 90, 12, 1]
const num1 = 8039
const name1 = "Chrome Console"
const object1 = {
  name: "Laura",
  phone: "214-888-0000",
  email: "lauracan@email.com",
  username: "fantastic-laura",
  id: 69002,
}

// 3.5 - Can you add statements below to log to the console each of the variables above?
// Note: all these statements printed in the console when the page loaded b/c you ARE calling a function (the log method is a function)
console.log(arr1)
console.log(num1)
console.log(name1)
console.log(object1)

// This variable will hold text values for us
let inputFieldValue = ""

// 4 - This function will change the value assigned to inputFieldValue
// go back to the web page, open the console, and type into the Name field to see what is happening.
const setInputFieldValue = (val) => {
  inputFieldValue = val
  console.log(val)
  console.log("inputFieldValue: " + inputFieldValue)
}


// 5 - This function uses the field input to say hello to a name given by the user.
const sayHi = (data) => {
  greetingString = "Hi, " + data + "!"

  // Note that the counter does not include the # of times you pressed the sayHello button due to the unique argument we put inside the count() method  
  console.count("This is the # of times you have pressed the submit button")

  // Note: it works even without the "return" keyword. Why did we use the return keyword??  
  return console.log(greetingString)
}



