var FV = [[5,6,7,8],
          [0,5,8],
          [0,4,5],
          [1,2,4,5],
          [2,3,5,6],
          [0,8,7], [3,6,7], [1,2,3], [0,1,4]
];

var V = [[0,6],
        [0,0],
        [3,0],
        [6,0],
        [0,3],
        [3,3],
        [6,3],
        [6,6],
        [3,6]];


var lar = function(V,FV){  	 	 
  	
  	var esito = "#Ex6" +'\n';

  	esito = esito + "#vertices" +'\n';
  	
  	for(i=0; i < V.length; i++){ 

  		esito = esito + "V   " + V[i][0] + "  " + V[i][1] + '\n';
  	}
  	
  	esito = esito + "#faces" +'\n';


  	for(a=0; a < FV.length; i++){ 

  		esito = esito + "f ";
  			for(j=0; j< FV[i].length; j++){ 	

  		        esito = esito + FV[i][j] + "   ";
              
  		        if(j === (FV[i].length)-1 ) 
  		        	esito = esito + '\n'
  			}
  	}
  	return esito; 		 	
}

var ex6 = lar(V,FV);
