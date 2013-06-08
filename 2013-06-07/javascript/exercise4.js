	//montagne

	domain = DOMAIN([[0,10],[0,10]])([32,32]);

	var mapping = function(d) {

		var a = d[0];
	  	var b = d[1];
	  	var c =  ( COS(a/16)*SIN(b/2) +  4*( (COS(1.2*a)*SIN(1.2*b)) ) + (COS(a/16)*SIN(b/2)) )/1.5;

	  	if(c<0)
	  	c = 0;

	  return [a,b,c];
	}

	var terrain = COLOR([0.40,0.26,0.13])(MAP(mapping)(domain));


	DRAW(terrain);

//lago

	domainLago = DOMAIN([[0,1],[0,1]])([32,32]);

			var lake1=[[1.62,2.2,0],[1.86,2.54,0],[2.05,3.00,0],[1.40,3.60,0]];
			var lake2=[[1.40,3.60,0],[1.10,3.80,0],[1.13,3.51,0]];
			var lake5=[[1.13,3.51,0],[0.95,3.30,0],[1.09,3.31,0]];
			var lake3=[[1.08,3.31,0],[0.40,3.03,0],[0.67,2.43,0]];
			var lake4=[[0.67,2.43,0],[0.89,2.15,0],[1.10,1.98,0]];
			var lake6=[[1.10,1.98,0],[1.36,1.86,0],[1.62,2.2,0]];

			var lake1Bez = BEZIER(S0)(lake1);
			var lake2Bez = BEZIER(S0)(lake2);
			var lake3Bez = BEZIER(S0)(lake3);
			var lake4Bez = BEZIER(S0)(lake4);
			var lake5Bez = BEZIER(S0)(lake5);
			var lake6Bez = BEZIER(S0)(lake6);


			var lakeSup1 = BEZIER(S1)([lake1Bez,lake3Bez]);
			var lakeSup2 = BEZIER(S1)([lake2Bez,lake4Bez]);
			var lakeSup3 = BEZIER(S1)([lake5Bez,lake6Bez]);

			var lakemap1 = MAP(lakeSup1)(domainLago);
			var lakemap2 = MAP(lakeSup2)(domainLago);
			var lakemap3 = MAP(lakeSup3)(domainLago);

			var lakeTot = COLOR([0.6,0.8,1])(STRUCT([lakemap1,lakemap2,lakemap3]));
			var lakeS = S([0,1])([1.5,1.3])(lakeTot);
			var lakeT = T([0,1,2])([0.6,3.2,0.001])(lakeS);

			DRAW(lakeT);
	

	//alberi

	var troncoColor = EXTRUDE([0.5])(COLOR([0.6,0.3,0])(DISK(0.3)(10)));

	var domainRot = DOMAIN([[0,1],[0,2*PI]])([10,10]);

	curva1 = [[0,0,4],[1,0,0.5]];
	curva2 = [[0,0,1],[1,0,0.5]];

	var ramiUp = BEZIER(S0)(curva1);

	var rotazione1 = ROTATIONAL_SURFACE(ramiUp);
	var surfaceUp = MAP(rotazione1)(domainRot);

	var ramiDown = BEZIER(S0)(curva2);

	var rotazione2 = ROTATIONAL_SURFACE(ramiDown);
	var surfaceDown = MAP(rotazione2)(domainRot);

	var alberoUp = COLOR([0.13,0.545,0.13])(STRUCT([surfaceUp,surfaceDown]));

	var alberoCompleto = STRUCT([alberoUp,troncoColor]); 

	var moreAlberiA = STRUCT(REPLICA(4)([T([0])([2]),alberoCompleto]));
	var moreAlberiB = STRUCT(REPLICA(4)([T([1])([2]),moreAlberiA]));

	var moreAlberic = STRUCT(REPLICA(7)([T([0])([2]),alberoCompleto]));
	var moreAlberid = STRUCT(REPLICA(5)([T([1])([2]),moreAlberic]));

	var allAlberi = S([0,1,2])([0.15,0.15,0.15])(STRUCT([moreAlberiA,moreAlberiB]));
	var allalberib	= S([0,1,2])([0.15,0.15,0.15])(STRUCT([moreAlberic,moreAlberid]));

	var allAlberigruppo1 = T([0,1,2])(mapping([0.3,7.8]))(allAlberi);
	var allAlberigruppo2 = T([0,1,2])(mapping([1.5,0.3]))(allalberib);
	var allAlberigruppo3 = T([0,1,2])(mapping([6.7,0.3]))(allalberib);

	var Albero = S([0,1,2])([0.15,0.15,0.15])(alberoCompleto);
	var Albero1 = T([0,1,2])(mapping([2,3]))(Albero);
	var Albero2 = T([0,1,2])(mapping([7.7,2.6]))(Albero);
	var Albero3 = T([0,1,2])(mapping([5,5.7]))(Albero);


	var alberiAll = STRUCT([allAlberigruppo1,allAlberigruppo2,allAlberigruppo3,Albero1,Albero2,Albero3]);


	//DRAW(alberiAll);

	//CASE


			var casa = function casafun(x,y,z){

						base = COLOR([0.005,0.7,0.225])(CUBOID([x,y,z]));
						tetto = R([1,2])(PI/2)(EXTRUDE([y])(TRIANGLE_FAN([[0,0],[x/2,z/4],[x,0]])));
						tetto = COLOR([0.70,0.13,0.13])(T([1,2])([y,z])(tetto));

						return casaTotale = STRUCT([base,tetto]);

			}

			var casat1 = STRUCT(REPLICA(3)(([casa(1.5,1.5,2),T([0])([1.5*1.5])])));
			casat1 = T([0,1])([6.5,5])(casat1);
			

			var casat2 = STRUCT(REPLICA(2)(([casa(1,1,1),T([0])([1*1.5])])));
			var casat2Destra = T([0])([13.5])(casat2);
			var casette2 = STRUCT([casat2,casat2Destra]);
			


			var casat3 = R([0,1])(PI/2)(T([0,1])([-1,-1.5])(casa(2,3,1)));
			casat3 = T([0,1])([1+1,1.5+1.5])(casat3);
			casat3 = T([1])([3.5])(casat3);
			casat3Ty = T([0])([13.5])(casat3);

			var casette3 = STRUCT([casat3,casat3Ty]);
			

				var casat4 = STRUCT(REPLICA(2)(([casa(2,2,1),T([0])([2*1.5])])));
				casat4 =  T([1])([10.5])(casat4)
				var casat4Destra= T([0])([13.5])(casat4);
				var casat4Indietro = T([0])([-1])(casat4);
				var casette4 = STRUCT([casat4Indietro,casat4Destra]);
				
			var villaggio1 = T([0,1])([7,6])(S([0,1,2])([0.1,0.1,0.1])(STRUCT([casat1,casette2,casette3,casette4])));
			villaggio1 = T([2])([0.001])(villaggio1);

			var villaggio2 = T([0,1])([4.5,3])(S([0,1,2])([0.08,0.08,0.08])(STRUCT([casat1,casette3,casette4])));
			villaggio2 = T([2])([0.01])(villaggio2);

			var villaggiCompleti = STRUCT([villaggio1,villaggio2]);

			DRAW(villaggiCompleti);