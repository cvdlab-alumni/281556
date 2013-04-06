function point2D(x,y){
this.x=x;
this.y=y;}

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

var pillarstot = STRUCT([pillars0,pillars1,pillars2,pillars3]);

DRAW(pillarstot);

