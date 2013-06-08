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