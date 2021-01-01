// USING API FOR FETCHING DAATAA

 fetch("https://cricapi.com/api/matches?apikey=8lssfdJhj0YVFmJd0EBZUY01mHA2"
 )
 .then((response) =>{
  return response.json();
})
.then((info) =>{
  const data = info.matches.slice(1,7);
  // var value = 5;
  document.getElementById("try").innerHTML =  data.map((each)=>{
        // value++;
        // if(value>6)
        //  break;
         return (
      `<div>
       ${each["team-1"]} vs ${each["team-2"]} 
        <br/>
        ${each.date}
        <br/>
        <br/>
        <br/>
      <div>`)}
  ).join(' ')
})


 
