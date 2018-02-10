//reference to riot api modul
const request = require('request')
const API = require('lol-riot-api-module');
//api key
const api = new API({
    key: "RGAPI-c8ba7bf3-5140-4fda-a6af-689d8289d364",
    region:"na"
});
/*$("#.find").on("click", function (event) {
    event.preventDefault();
    getInfo($(".user_input").val()); 
});*/
function getInfo(id){
    const options = {name:id};
    var championID = [];
    var champion = [];
    api.getSummoner(options,(err,data) => {
        console.log(data);
        api.getAccountRecentMatchlist(data,(err,data) =>{
            console.log(data);
            data.matches.forEach(function(element){
                //console.log(element.champion);
                const champ = {id:element.champion};
                //console.log(champ);
                championID.push(champ);
                //console.log("this id is "+championID);
            });
            //console.log(championID);
            championID.forEach(function (element) {
                api.getChampionsStaticData(element, (err, data) => {
                    console.log(data);
                });
            });
            //console.log(championID);
        });
        /*var chmp = { summonerId: data.id};
        console.log("sum id is: "+data.id);
        api.getSummonerLeaguePositions(chmp,(err,data)=>{
            console.log(data);
        });*/
    });
}
getInfo('Hi Im LoseMyMind');