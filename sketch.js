let searchUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search='
let userinput;

function setup() {
	noCanvas();
	userinput = select('#userinput');
	userinput.changed(goWiki);
	
	goWiki();
}

function goWiki(){
	let term = userinput.value()
	let url = searchUrl + term;
	loadJSON(url, gotData,'jsonp');
		
}
function gotData(data){

	var link = data[3];
	
	console.log(link.join('\r\n'));
	//alert(link.join('\r\n'));
	//swal();
	swal(link.join('\r\n'), {
  		buttons: ["Search Another", true],
	});

	

}
