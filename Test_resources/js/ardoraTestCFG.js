//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=200; timeIni=200; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=1;
var score=0; scoreMax=10; scoreInc=2; scoreDec=0
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#C0C0C0"; colorButton="#CABB04"; colorText="#000000"; colorSele="#004080";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="'Times New Roman', Times, serif";
var fResp="'Times New Roman', Times, serif";
var fEnun="'Arial Black', Gadget, sans-serif";
var timeOnMessage=2; messageOk="¡ FELICITACIONES !"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="VGVzdA"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["¿Que significa las siglas HTML?","¿Que es HTML?","¿Con que etiqueta se define el cuerpo de la pagina?","En HTML, la etiqueta P se utiliza para","¿Como insertar una imagen en HTML?"];
var answers1=["MUhZUEVSVEVYVCBNQVJLVVAgTEFOR1VBR0U","MEhZUEVSVEVYVCBUUkFOU0ZFUiBNQVNURVIgTE9ORw","MEhZUEVSICBNQVJLVVAgVEhFQVRFUg","MEhPTUUgTUFSS1VQIFRSQU5TTUlTU0lPTg"];
var answers2=["MUxFTkdVQUpFIERFIE1BUkNBRE8gREUgSElQRVJURVhUTw","MExFTkdVQUpFIERFIENPRElHTyBBQklFUlRP","MExFTkdVQUpFIERFIFBST0dSQU1BQ0lPTg","MExFTkdVQUpFIERFIFNRTA","MExFTkdVQUpFIERFIENTUw"];
var answers3=["MUJPRFk","MFA","MEhFQUQ","MEJS","MERPQ1RZUEU"];
var answers4=["MURFRklOSVIgVU4gUMFSUkFGTw","MElOU0VSVEFSIFVOIFNBTFRPIERFIEzNTkVB","MERFRklOSVIgVU4gUFVOVE8gREUgREVTVElOTyBQQVJBIFVOIEhJUEVSVs1OQ1VMTw","ME5JTkdVTkEgUkVTUFVFU1RBIEVTIENPUlJFQ1RB"];
var answers5=["MUlNRyBTUkM9IiI","ME1HSQ","MEpQRyBTUkMgU1JDPSIi","MFBORyBTUkM9Ig","MFNSQw"];
var ans=[answers1,answers2,answers3,answers4,answers5];
var err=["RESPUESTA INCORRECTA","RESPUESTA INCORRECTA","RESPUESTA INCORRECTA","RESPUESTA INCORRECTA","RESPUESTA INCORRECTA"];
var ima=["","","","",""];
var mp4=["","","","",""];
var ogv=["","","","",""];
var indexTag=0; actualAnswers=[]; dirMedia="Test_resources/media/";
var tiRandOrder=false;
var iT=0;var r_order=[];
