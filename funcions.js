/**
 * @author skirep
 */
						function imprimirHora()
						{
							var ahora = new Date();
							if(ahora.getHours() < 10)
							{
							document.getElementById('hora1').src = "img/0.png"; 
							document.getElementById('hora2').src = "img/"+ahora.getHours()+".png"; 
							}
							else
							{
								var primerCaracter = parseInt(ahora.getHours()/10);
								var segonCaracter = parseInt(ahora.getHours()%10);
								document.getElementById('hora1').src = "img/"+primerCaracter+".png"; 
								document.getElementById('hora2').src = "img/"+segonCaracter+".png";
							}
					
							if(ahora.getMinutes() < 10)
							{
							document.getElementById('minut1').src = "img/0.png"; 
							document.getElementById('minut2').src = "img/"+ahora.getMinutes()+".png"; 
							}
							else
							{
								var primerCaracter = parseInt(ahora.getMinutes()/10);
								var segonCaracter = parseInt(ahora.getMinutes()%10);
								document.getElementById('minut1').src = "img/"+primerCaracter+".png"; 
								document.getElementById('minut2').src = "img/"+segonCaracter+".png";
							}
					
							if(ahora.getSeconds() < 10)
							{
							document.getElementById('segon1').src = "img/0.png"; 
							document.getElementById('segon2').src = "img/"+ahora.getSeconds()+".png"; 
							}
							else
							{
								var primerCaracter = parseInt(ahora.getSeconds()/10);
								var segonCaracter = parseInt(ahora.getSeconds()%10);
								document.getElementById('segon1').src = "img/"+primerCaracter+".png"; 
								document.getElementById('segon2').src = "img/"+segonCaracter+".png";
							}
							
							setTimeout("imprimirHora()",1000);
						}
