// alert("Hello");
//when you click the finish button, get all of the user data
$("#userInformation button[value='Done']").click(function(e){
  //get data from all the text boxes
  var searchTerms = [];
  var textBoxes = $("#userInformation input[type=text]").each(function(){
    // console.log(this.value);
    if(this.value!=""){
      searchTerms.push(this.value);
    }
  });
  console.log(searchTerms);
});
// console.log($("#userInformation button[value='Done']"));
