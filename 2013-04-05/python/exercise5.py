from pyplasm import *

GRID = COMP([INSR(PROD),AA(QUOTE)])


def point2D(x,y):
	x=x
	y=y

def arc(alpha,r,R):
	domain = INTERVALS([[0,alpha],[r,R]])([36,50])
	mapping=function(v)
	a=v[0]
	r=v[1]
	return[r*COS(a),r*SIN(a)]
	model=MAP(mapping)(domain)
	return model

a=point2D(80,60)
b=point2D(651,60)
c=point2D(651,402)
d=point2D(80,402)
h=126
r=6.5

p1=point2D(86,65)
p2=point2D(226,65)
p3=point2D(365,65)
p4=point2D(505,65)
p5=point2D(644,65)

p6=point2D(86,331)
pq=point2D(160,331)
q7=point2D(86,392)
q8=point2D(160,383)

def Column(r,h):
	basis = CUBOID([2*r*1.2, 2*r*1.2, h/12.0])
	trunk = CYLINDER([r, (10./12)*h])(12)
	capital = basis
	beam = S(1)(3)(capital)
	return INSR(TOP)([basis,trunk, capital, beam])

pil =Column(r,h)
quad =PROD([ T([0,1])([r,r])(GRID([[r*2],[r*2]])), Q(h) ]);

circ1=T([0,1])([560,266+66.5])(R([0,1])(-PI/2)((arc(PI,0,66.5))))
circ2=T([0,1])([154+31,178])(R([0,1])(PI)((arc(PI,0,31))))

floor0=STRUCT([GRID([[-80,560-80],[-325,399-325],[10]]),GRID([[-154,560-154],[-266,325-266],[10]]),  GRID([[-154,511-154],[-178,266-178],[10]]),circ1,circ2])

floor1=STRUCT([GRID([[-80,651-80],[-60,156-60,-242+156,333-242],[-h,10]]),GRID([[-80,300-80,-381+300,651-381],[-156,242-156],[-h,10]]),GRID([[-22,141-22,-388+141,651-388],[-333,386-333],[-h,10]])])

floor2=STRUCT([GRID([[-80,651-80],[-60,348-60],[-h*2,10]]),GRID([[-80,140-80,-318+140,c.x-318],[-348,d.y-348],[-h*2,10]])])
floor3=STRUCT([GRID([[-360,651-360],[-60,402-60],[-h*3,10]]),GRID([[-80,651-80],[-396,404-396],[-h*3,10]])])
floor4=STRUCT([GRID([[-80,-360,651-80-360],[-60,402-60],[-h*4,10]]),GRID([[-80,651-80],[-335,402-335],[-h*4,10]])])

pilla1=T([1])([p1.y])(STRUCT([T([0])([p1.x])(pil),T([0])([p2.x])(pil),T([0])([p3.x])(pil),T([0])([p4.x])(pil),T([0])([p5.x])(pil)]))

pilla2=T([1])([331])(STRUCT([T([0])([160])(quad),T([0])([p1.x])(pil),T([0])([p2.x])(quad),T([0])([p3.x])(quad),T([0])([p4.x])(quad),T([0])([p5.x-2*r])(quad)]))

pilla3=T([1])([q7.y])(STRUCT([T([0,1])([160,-q7.y+q8.y])(quad),T([0])([86])(pil)]))

pillars0=STRUCT([pilla1,pilla2,pilla3])




pilla12=T([1,2])([p1.y,h])(STRUCT([T([0])([p1.x])(quad),T([0])([p2.x])(quad),T([0])([p3.x])(quad),T([0])([p4.x])(quad),T([0])([p5.x-2*r])(quad)]))
pilla22=T([1,2])([331,h])(STRUCT([T([0,1])([p1.x-r,-r])(quad),T([0])([p2.x])(quad),T([0])([p3.x])(quad),T([0])([p4.x])(quad),T([0])([p5.x-2*r])(quad)]))
pillars1=STRUCT([pilla12,pilla22])

pilla13=T([1,2])([p1.y,h*2])(STRUCT([T([0,1])([p1.x,])(quad),T([0])([p2.x])(quad),T([0])([p3.x])(quad),T([0])([p4.x])(quad),T([0])([p5.x-2*r])(quad)]))
pilla23=T([1,2])([331,h*2])(STRUCT([T([0])([p1.x-r,-r])(quad),T([0])([p2.x])(quad),T([0])([p3.x])(quad),T([0])([p4.x])(quad),T([0])([p5.x-2*r])(quad)]))
pillars2=STRUCT([pilla13,pilla23])


pilla14=T([1,2])([p1.y,h*3])(STRUCT([T([0])([p4.x])(quad),T([0])([p5.x-2*r])(quad)]))
pilla24=T([1,2])([331,h*3])(STRUCT([T([0,1])([p1.x-r,-r])(quad),T([0])([p2.x])(quad),T([0])([p3.x])(quad),T([0])([p4.x])(quad),T([0])([p5.x-2*r])(quad)]))
pillars3=STRUCT([pilla14,pilla24])



east=T([1])([a.y+12]) (R([1,2])(PI/2) (STRUCT([GRID([[-364,b.x-364],[-h,195-h,-243+195,313-243,-362+313,431-362,-483+431,534-483],[12]]),GRID([[-a.x,359-a.x],[-h,429-h,-483+429,534-483],[12]]),GRID([[-354,366-354,-492+366,b.x-492],[-h,534-h],[12]]) ])))


north=T([0])([b.x]) ( R([0,2])(-PI/2)(STRUCT([ GRID([[-h,534-h],[-a.y,13,-326+a.y+13,371-326,-387+371,402-387],[12]]), GRID([[-h,195-h,-243+195,313-243,-362+313,431-362,-483+431,534-483],[-a.y-13,347-a.y-13],[12]]), GRID([[-h,141-h,-268+141,283-268,-394+283,410-394,-516+410,534-516],[-371,387-371],[12]])])))



south=T([0])([a.x]) (R([0,2])(-PI/2)( STRUCT([GRID([[-h,136-h,-243+136,266-243,-362+266,429-362,-483+429,534-483],[-a.y,d.y-a.y],[12]]), GRID([[-h,534-h],[-a.y,12,-333+72+6,6,-d.y+333+7,7],[12]]), GRID([[-243,429-243],[-333,67],[12]])  ])))

west=T([1])([d.y]) (R([1,2])(PI/2)(STRUCT([ GRID([[-a.x,b.x-a.x-90],[91,-120+91,195-120,-243+195,313-243,-362+313,534-362],[12]]), GRID([[-a.x,b.x-119-a.x,-7,28,-7,77],[-313,362-313],[12]]), GRID([[-b.x+90,90],[-h,313-h,-362+313,534-362],[12]]) , GRID([[-a.x,b.x-255-a.x,-255+128,128],[-195,243-195],[12]]), GRID([[-a.x,b.x-205-a.x,-205+178,178-90],[-91,120-91],[12]])])))
VIEW(STRUCT([east,north,south,west]))



depth = 14 # pedata 
raiser = 150/(2*9) # alzata
step2D = MKPOL([[[0,0],[0,1.4+raiser],[depth,raiser],[depth,1.4+raiser]],
    [[1,2,3,4]],None])
step3D = MAP([S1,S3,S2])(PROD([step2D,Q(52)]))
ramp = STRUCT(NN(16)([step3D,T([1,3])([depth,raiser])]))


stair1 = T([0,1,2])([141,333+r,0])(R([0,1])(2*PI)(ramp))
stair2 = T([0,1,2])([140,333+r,h])(R([0,1])(2*PI)(ramp))
stair3 = T([0,1,2])([359,333+r,2*h])(R([0,1])(2*PI)(ramp))
stair = STRUCT([stair1,stair2,stair3])


z1 = [390,520]
z2 = [450,520]
z3 = [390,470]
z4 = [450,470]

finestra2d = POLYLINE ([z1,z2,z4,z3,z1])

z5 = [390,495]
z6 = [450,495]
z7 = [420,520]
z8 = [420,470]

lineaoriz = POLYLINE ([z5,z6])
lineavert = POLYLINE ([z7,z8])

vetro = STRUCT([lineavert,lineaoriz,finestra2d])



finestra3d = PROD([vetro,Q(12)])

fine3 = STRUCT(REPLICA(3)([finestra3d,T([1])([118])]))

findoppie = STRUCT(REPLICA(2)([fine3,T([0])([60])]))

colored = T([0,1,2])([-20,a.x-13,-275])(R([1,2])(PI/2)(COLOR([0,0,0])(findoppie)))

circ1=(arc(PI,0,66.5))
circ2=(arc(PI,0,31))


floors=STRUCT([floor1,floor0,floor2,floor3,floor4])
pillars=STRUCT([pillars0,pillars1,pillars2,pillars3])

building=STRUCT([pillars,floors,east,south,west,north,stair,colored])


VIEW(building)