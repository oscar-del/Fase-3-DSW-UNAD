//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=60; timeIni=60; timeBon=0;
var successes=0; successesMax=6; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=0
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#C0C0C0"; colorButton="#DAAB1F"; colorText="#000000"; colorSele="#000040";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Gill Sans / Gill Sans MT, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Gill Sans / Gill Sans MT, sans-serif";
var timeOnMessage=2; messageOk=":) !Felicitaciones! El orden es correcto."; messageTime="Se agoto el tiempo"; messageError=":( Orden incorrecto"; messageErrorG=":( Orden incorrecto"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="b3JkZW5B"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["QTEuUE5H","QTIuUE5H","QTMuUE5H","QTQuUE5H","QTUuUE5H","YTYuUE5H"];
var actMaxWidth="500"; actMaxHeight="300";indexG=0;profG=0;dirMedia="ordenA_resources/media/";
var wordsG=[];
