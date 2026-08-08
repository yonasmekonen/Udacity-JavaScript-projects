const team =[
 ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"],
  ["George Weasley", "Fred Weasley", "Harry Potter"],
  ["jo"],
  ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter", "Hermione Granger", "Ron Weasley", "Neville Longbottom"]
    
];
function hasEnoughPlayers() {
let index = 0;

while(index <=team.length-1){
     if (team[index].length>= 7){
        console.log(true);
    }else{
 console.log(false);
    };
       
                index++;
             
}
}

hasEnoughPlayers();
