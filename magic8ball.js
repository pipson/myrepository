
/*
#####Magic Balls

---

1. Create a file called ```magic8ball.js```
2. Make a ```JS``` function that *randomly* returns one of the following strings to the console when called...

  "No",
  "Not today",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",

#####Part Two 

---

1. Make an ```.html``` file to display the output of the ```magic8ball.js``` file
    - add some styling and maybe an image of an eight ball for novelties sake.


*/

var randomString = function(){

	var randString1 = ["No",
  "Not today",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",];

  	count = 0;

  	var magic = Math.random();

  	console.log(magic);


	/*while(count < randString1.length){

		console.log(randString1[count]);

		var magic = Math.random();

	if(indexOf(randString1)!==magic)

		count++;
	}
	*/

	

}
