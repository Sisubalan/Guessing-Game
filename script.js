var inputbox = document.getElementById("inputbox")
var result = document.getElementById("result")
var guesscount = document.getElementById("guesscount")
noofguess = 3

// generated a Random number
var randomnumber = Math.floor(Math.random()*10)+1
if(randomnumber>5)
{
    randomnumber=randomnumber-5
}

// event handler function
function checkthenumber()
{
    if(inputbox.value == randomnumber)
    {
        alert("You Got It Right, Congratulation")
        result.textContent = "You Are Right"
    }
    else{
        noofguess = noofguess-1
        if(noofguess==0)
        {
            alert("Your lost The Generated Randomnumber is :"+randomnumber)
        }

        guesscount.textContent = "Available Guesses : "+noofguess
        result.textContent = "You Are Wrong"
    }
}