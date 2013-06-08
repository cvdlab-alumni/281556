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
