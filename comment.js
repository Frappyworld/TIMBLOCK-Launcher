<script src="https://d3js.org/d3.v3.min.js" charset="utf-8"></script>
<div id="comments"></div>
<script>
d3.csv("https://docs.google.com/spreadsheets/d/aoaNEFZ378Xp4q6U9/export?format=csv&range=A3:D", function(error, data){
	var text = "";
	for(var i=0; i<data.length; i++){
		text += i+1 + " 名前: <a href=\"mailto:" + data[i].Mail + "\">" + data[i].Name + "</a> " + data[i].Timestamp + "<pre>" + data[i].Comments + "</pre>";
	}
	d3.select("#comments").html(text);
});
</script>
