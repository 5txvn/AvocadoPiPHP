
function riddle() {
    var prefix = "$"
    var fetch = get.id("output");
    var command = document.getElementById("input").value;
    var riddles = ["What has to be broken before you can use it?<br>An egg", "I’m tall when I’m young, and I’m short when I’m old. What am I?<br>A candle", "What month of the year has 28 days?<br>All of them", "What is full of holes but still holds water?<br>A sponge", 
"What question can you never answer yes to?<br>Are you asleep yet?", "What is always in front of you but can’t be seen?<br>The future", "There’s a one-story house in which everything is yellow. Yellow walls, yellow doors, yellow furniture. What color are the stairs?<br>There aren’t any—it’s a one-story house.", "What can you break, even if you never pick it up or touch it?<br>A promise", 
"What goes up but never comes down?<br>Your age", "A man who was outside in the rain without an umbrella or hat didn’t get a single hair on his head wet. Why?<br>He was bald."];
if (command === prefix + "riddle"){
    fetch.innerHTML = riddles[Math.floor(Math.random() * 12)];
} else {
    return;
}
}