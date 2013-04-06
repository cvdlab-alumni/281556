function point2D(x,y){
this.x=x;
this.y=y;}

function arc(alpha,r,R){
var domain = DOMAIN([[0,alpha],[r,R]])([36,50]);
var mapping=function(v){
var a=v[0];
var r=v[1];
return[r*COS(a),r*SIN(a)]}
var model=MAP(mapping)(domain);
return model;
}

var a=new point2D(80,60)
var b=new point2D(651,60)
var c=new point2D(651,402)
var d=new point2D(80,402)
var h=126;
var r=6.5;

var p1=new point2D(86,65)
var p2=new point2D(226,65)
var p3=new point2D(365,65)
var p4=new point2D(505,65)
var p5=new point2D(644,65)

var p6=new point2D(86,331)
var pq=new point2D(160,331)
var q7=new point2D(86,392)
var q8=new point2D(160,383)

var pil=EXTRUDE([h])(DISK(r)());
var quad=EXTRUDE([h])(T([0,1])([r,r])(SIMPLEX_GRID([[r*2],[r*2]])));



circ1=EXTRUDE([10])(T([0,1])([560,266+66.5])(R([0,1])(-PI/2)((arc(PI,0,66.5)))));
circ2=EXTRUDE([10])(T([0,1])([154+31,178])(R([0,1])(PI)((arc(PI,0,31)))));

var floor0=STRUCT([SIMPLEX_GRID([[-80,560-80],[-325,399-325],[10]]),  SIMPLEX_GRID([[-154,560-154],[-266,325-266],[10]]),  SIMPLEX_GRID([[-154,511-154],[-178,266-178],[10]]),circ1,circ2]);

var floor1=STRUCT([SIMPLEX_GRID([[-80,651-80],[-60,156-60,-242+156,333-242],[-h,10]]),SIMPLEX_GRID([[-80,300-80,-381+300,651-381],[-156,242-156],[-h,10]]),SIMPLEX_GRID([[-22,141-22,-388+141,651-388],[-333,386-333],[-h,10]])]);

var floor2=STRUCT([SIMPLEX_GRID([[-80,651-80],[-60,348-60],[-h*2,10]]),SIMPLEX_GRID([[-80,140-80,-318+140,c.x-318],[-348,d.y-348],[-h*2,10]])]);
var floor3=STRUCT([SIMPLEX_GRID([[-360,651-360],[-60,402-60],[-h*3,10]]),SIMPLEX_GRID([[-80,651-80],[-396,404-396],[-h*3,10]])]);
var floor4=STRUCT([SIMPLEX_GRID([[-80,-360,651-80-360],[-60,402-60],[-h*4,10]]),SIMPLEX_GRID([[-80,651-80],[-335,402-335],[-h*4,10]])]);




var pilla1=T([1])([p1.y])(STRUCT([T([0])([p1.x])(pil),T([0])([p2.x])(pil),T([0])([p3.x])(pil),T([0])([p4.x])(pil),T([0])([p5.x])(pil)]));

var pilla2=T([1])([331])(STRUCT([T([0])([160])(quad),T([0])([p1.x])(pil),T([0])([p2.x])(quad),T([0])([p3.x])(quad),T([0])([p4.x])(quad),T([0])([p5.x-2*r])(quad)]));

var pilla3=T([1])([q7.y])(STRUCT([T([0,1])([160,-q7.y+q8.y])(quad),T([0])([86])(pil)]));

var pillars0=STRUCT([pilla1,pilla2,pilla3]);




var pilla12=T([1,2])([p1.y,h])(STRUCT([T([0])([p1.x])(quad),T([0])([p2.x])(quad),T([0])([p3.x])(quad),T([0])([p4.x])(quad),T([0])([p5.x-2*r])(quad)]));
var pilla22=T([1,2])([331,h])(STRUCT([T([0,1])([p1.x-r,-r])(quad),T([0])([p2.x])(quad),T([0])([p3.x])(quad),T([0])([p4.x])(quad),T([0])([p5.x-2*r])(quad)]));
var pillars1=STRUCT([pilla12,pilla22]);

var pilla13=T([1,2])([p1.y,h*2])(STRUCT([T([0,1])([p1.x,])(quad),T([0])([p2.x])(quad),T([0])([p3.x])(quad),T([0])([p4.x])(quad),T([0])([p5.x-2*r])(quad)]));
var pilla23=T([1,2])([331,h*2])(STRUCT([T([0])([p1.x-r,-r])(quad),T([0])([p2.x])(quad),T([0])([p3.x])(quad),T([0])([p4.x])(quad),T([0])([p5.x-2*r])(quad)]));
var pillars2=STRUCT([pilla13,pilla23]);


var pilla14=T([1,2])([p1.y,h*3])(STRUCT([T([0])([p4.x])(quad),T([0])([p5.x-2*r])(quad)]));
var pilla24=T([1,2])([331,h*3])(STRUCT([T([0,1])([p1.x-r,-r])(quad),T([0])([p2.x])(quad),T([0])([p3.x])(quad),T([0])([p4.x])(quad),T([0])([p5.x-2*r])(quad)]));
var pillars3=STRUCT([pilla14,pilla24]);



var east=T([1])([a.y+12]) (R([1,2])(PI/2) (STRUCT([SIMPLEX_GRID([[-364,b.x-364],[-h,195-h,-243+195,313-243,-362+313,431-362,-483+431,534-483],[12]]),SIMPLEX_GRID([[-a.x,359-a.x],[-h,429-h,-483+429,534-483],[12]]),SIMPLEX_GRID([[-354,366-354,-492+366,b.x-492],[-h,534-h],[12]]) ])));


var north=T([0])([b.x]) ( R([0,2])(-PI/2)(STRUCT([ SIMPLEX_GRID([[-h,534-h],[-a.y,13,-326+a.y+13,371-326,-387+371,402-387],[12]]), SIMPLEX_GRID([[-h,195-h,-243+195,313-243,-362+313,431-362,-483+431,534-483],[-a.y-13,347-a.y-13],[12]]), SIMPLEX_GRID([[-h,141-h,-268+141,283-268,-394+283,410-394,-516+410,534-516],[-371,387-371],[12]])  ]) ));



var south=T([0])([a.x]) (R([0,2])(-PI/2)( STRUCT([SIMPLEX_GRID([[-h,136-h,-243+136,266-243,-362+266,429-362,-483+429,534-483],[-a.y,d.y-a.y],[12]]), SIMPLEX_GRID([[-h,534-h],[-a.y,12,-333+72+6,6,-d.y+333+7,7],[12]]), SIMPLEX_GRID([[-243,429-243],[-333,67],[12]])  ])));

var west=T([1])([d.y]) (R([1,2])(PI/2)(STRUCT([ SIMPLEX_GRID([[-a.x,b.x-a.x-90],[91,-120+91,195-120,-243+195,313-243,-362+313,534-362],[12]]), SIMPLEX_GRID([[-a.x,b.x-119-a.x,-7,28,-7,77],[-313,362-313],[12]]), SIMPLEX_GRID([[-b.x+90,90],[-h,313-h,-362+313,534-362],[12]]) , SIMPLEX_GRID([[-a.x,b.x-255-a.x,-255+128,128],[-195,243-195],[12]]), SIMPLEX_GRID([[-a.x,b.x-205-a.x,-205+178,178-90],[-91,120-91],[12]])  ])));
DRAW(STRUCT([east,north,south,west]))


depth = 14;
raiser = 150.0/(2*9);
step2D = SIMPLICIAL_COMPLEX([[0,0],[0,1.4+raiser],[depth,raiser],[depth,1.4+raiser]])([[0,2,1],[1,2,3]]);
step3D = MAP([S0,S2,S1])(EXTRUDE([52])(step2D));
ramp = STRUCT(REPLICA(16)([step3D,T([0,2])([depth,raiser])]));



stair1 = T([0,1,2])([141,333+r,0])(R([0,1])(2*PI)(ramp));
stair2 = T([0,1,2])([140,333+r,h])(R([0,1])(2*PI)(ramp));
stair3 = T([0,1,2])([359,333+r,2*h])(R([0,1])(2*PI)(ramp));
stair = STRUCT([stair1,stair2,stair3]);


var z1 = [390,520];
var z2 = [450,520];
var z3 = [390,470];
var z4 = [450,470];

var finestra2d = POLYLINE ([z1,z2,z4,z3,z1]);

var z5 = [390,495];
var z6 = [450,495];
var z7 = [420,520];
var z8 = [420,470];

var lineaoriz = POLYLINE ([z5,z6]);
var lineavert = POLYLINE ([z7,z8]);

var vetro = STRUCT([lineavert,lineaoriz,finestra2d]);



var finestra3d = EXTRUDE([12])(vetro);

var fine3 = STRUCT(REPLICA(3)([finestra3d,T([1])([118])]));

var findoppie = STRUCT(REPLICA(2)([fine3,T([0])([60])]));

var colored = T([0,1,2])([-20,a.x-13,-275])(R([1,2])(PI/2)(COLOR([0,0,0])(findoppie)));

circ1=(arc(PI,0,66.5));
circ2=(arc(PI,0,31));


floors=STRUCT([floor1,floor0,floor2,floor3,floor4]);
pillars=STRUCT([pillars0,pillars1,pillars2,pillars3]);

var building=STRUCT([pillars,floors,east,south,west,north,stair,colored]);


DRAW(building);