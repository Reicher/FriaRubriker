function generateTitle(){
    var result = "<span>";
    for (let i = 0; i < words.length; i++) {
	result += " " + words[i][Math.floor((Math.random() * words[i].length))];
	if(i == 0) result += "</span>";
    }
    titleElement.innerHTML = result;
}
