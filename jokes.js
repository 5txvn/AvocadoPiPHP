function joke() {
    var prefix = "$"
    var fetch = get.id("output");
    var command = document.getElementById("input").value;
var jokes = ["What do you call a dinosaur that is sleeping?<br>A dino-snore!", "What is fast, loud and crunchy?<br>A rocket chip!", "Why did the teddy bear say no to dessert?<br>Because she was stuffed.", "What has ears but cannot hear?<br>A cornfield.", 
"What did the left eye say to the right eye?<br>Between us, something smells!", "What do you get when you cross a vampire and a snowman?<br>Frost bite!", "What did one plate say to the other plate?<br>Dinner is on me!", "Why did the student eat his homework?<br>Because the teacher told him it was a piece of cake!", 
"When you look for something, why is it always in the last place you look?<br>Because when you find it, you stop looking.", "What is brown, hairy and wears sunglasses?<br>A coconut on vacation.", "Two pickles fell out of a jar onto the floor. What did one say to the other?<br>Dill with it.", "What did the Dalmatian say after lunch?<br>That hit the spot!", 
"Why did the kid cross the playground?<br>To get to the other slide.", "How does a vampire start a letter?<br>Tomb it may concern...", "What do you call a droid that takes the long way around?<br>R2 detour.", "How do you stop an astronaut’s baby from crying?<br>You rocket!", 
"Why was 6 afraid of 7?<br>Because 7, 8, 9", "What is a witch’s favorite subject in school?<br>Spelling!", "When does a joke become a “dad” joke?<br>When the punchline is a parent.", "How do you make a lemon drop?<br>Just let it fall.", 
"What did the limestone say to the geologist?<br>Don’t take me for granite!", "What do you call a duck that gets all A’s?<br>A wise quacker.", "Why does a seagull fly over the sea?<br>Because if it flew over the bay, it would be a baygull.", "What kind of water cannot freeze?<br>Hot water.", 
"What kind of tree fits in your hand?<br>A palm tree!", "Why did the cookie go to the hospital?<br>Because he felt crummy.", "Why was the baby strawberry crying?<br>Because her parents were in a jam.", "What did the little corn say to the mama corn?<br>Where is pop corn?", 
"What is worse than raining cats and dogs?<br>Hailing taxis!", "How much does it cost a pirate to get his ears pierced?<br>About a buck an ear.", "Where would you find an elephant?<br>The same place you lost her!", "How do you talk to a giant?<br>Use big words!", 
"What animal is always at a baseball game?<br>A bat.", "What falls in winter but never gets hurt?<br>Snow!", "What do you call a ghost’s true love?<br>His ghoul-friend.", "What building in New York has the most stories?<br>The public library!", 
"What did one volcano say to the other?<br>I lava you!", "How do we know that the ocean is friendly?<br>It waves!", "What is a tornado’s favorite game to play?<br>Twister!", "How does the moon cut his hair?<br>Eclipse it.", 
"How do you get a squirrel to like you?<br>Act like a nut!", "What do you call two birds in love?<br>Tweethearts!", "How does a scientist freshen her breath?<br>With experi-mints!", "How are false teeth like stars?<br>They come out at night!", 
"How can you tell a vampire has a cold?<br>She starts coffin.", "What’s worse than finding a worm in your apple?<br>Finding half a worm.", "What is a computer's favorite snack?<br>Computer chips!", "Why don’t elephants chew gum?<br>They do, just not in public.", 
"What was the first animal in space?<br>The cow that jumped over the moon", "What did the banana say to the dog?<br>Nothing. Bananas can’t talk.", "What time is it when the clock strikes 13?<br>Time to get a new clock.", "How does a cucumber become a pickle?<br>It goes through a jarring experience.", 
"What do you call a boomerang that won’t come back?<br>A stick.", "What do you think of that new diner on the moon?<br>Food was good, but there really wasn’t much atmosphere.", "Why did the dinosaur cross the road?<br>Because the chicken wasn’t born yet.", "Why can’t Elsa have a balloon?<br>Because she will let it go.", 
"How do you make an octopus laugh?<br>With ten-tickles!", "How do you make a tissue dance?<br>You put a little boogie in it.", "What's green and can fly?<br>Super Pickle!", 
"What did the nose say to the finger?<br>Quit picking on me!", "What musical instrument is found in the bathroom?<br>A tuba toothpaste.", "Why did the kid bring a ladder to school?<br>Because she wanted to go to high school.", "Where do vampires keep their money?<br>A blood bank.", 
"What do elves learn in school?<br>The elf-abet.", "What do you call a dog magician?<br>A labracadabrador.", "Where do pencils go on vacation?<br>Pencil-vania.", "Why couldn't the pony sing a lullaby?<br>She was a little horse.", 
"What do you cakes and baseball have in common?<br>They both need a batter!", "What gets wetter the more it dries?<br>A towel.", "What do you call two bananas?<br>Slippers.", "Why did the banana go to the doctor?<br>Because it wasn’t peeling well.", 
"What do you call a fake noodle?<br>An impasta.", "What stays in the corner yet can travel all over the world?<br>A stamp.", "How do you fix a cracked pumpkin?<br>With a pumpkin patch.", "What kind of award did the dentist receive?<br>A little plaque.", 
"What do you call a funny mountain?<br>Hill-arious.", "Why are ghosts bad liars?<br>Because you can see right through them.", "Why do bees have sticky hair?<br>Because they use a honeycomb.", "What did the big flower say to the little flower?<br>Hi, bud!", 
"What part of your body can cause the end of the world?<br>Your apoco-lips!", "What did the astronaut say when he crashed into the moon?<br>I Apollo-gize.", 
"Why didn’t the orange win the race?<br>It ran out of juice.", "What dinosaur had the best vocabulary?<br>The thesaurus.", "Why aren’t dogs good dancers?<br>They have two left feet.", 
"What did the wolf say when it stubbed its toe?<br>Owwwww-ch!", "Why did Johnny throw the clock out of the window?<br>", "What did one toilet say to the other?<br>You look flushed.", 
"Why did the man put his money in the freezer?<br>He wanted cold hard cash!", "Why couldn't the astronaut book a hotel on the moon?<br>Because it was full.", "How do pickles enjoy a day out?<br>They relish it.", "What do you call an old snowman?<br>Water.", 
"What's a pirate's favorite letter?<br>Arrrrrrrrrr", "What do you get when you cross an elephant with a fish?<br>Swimming trunks.", "How do you throw a party in space?<br>You planet.", "What did zero say to eight?<br>Nice belt!", 
"What happened when the skunk was on trial?<br>The judge declared, Odor in the court, odor in the court!", "What do you call a sleeping bull?<br>A bulldozer!", "Why did the tomato blush?<br>It saw the salad dressing.", "What do you call a fish without an eye?<br>A fsh."]
if (command === prefix + "joke"){
    fetch.innerHTML = jokes[Math.floor(Math.random() * 96)];
} else {
    return;
}
}