// removed

// can be simplified
( y());
( y());
(w(), y());
(w(), y());
/*@__PURE__*/(g() || h())(x(), y());
/*@__PURE__*/new (g() || h())(x(), y());
(/*@__PURE__*/ (a() || b()))(c(), d());
new (/*@__PURE__*/ (a() || b()))(c(), d());
[ /*@__PURE__*/ x(), y() ];
[ /*@__PURE__*/ new x(), y() ];
[ w(), /*@__PURE__*/ x(), y() ];
[ w(), /*@__PURE__*/ new x(), y() ];

// retained
( a)();
( b)(1)(2)(3);
(/*@__PURE__*/ c(1))(2)(3);
(/*@__PURE__*/ d(1)(2))(3);
( e).x(1).y(2).z(3);
( f.x)(1).y(2).z(3);
(/*@__PURE__*/ g.x(1)).y(2).z(3);
( h.x(1).y)(2).z(3);
(/*@__PURE__*/ i.x(1).y(2)).z(3);
( j.x(1).y(2).z)(3);
new ( k)();
new ( l)(1)(2)(3);
(/*@__PURE__*/ new m(1))(2)(3);
(/*@__PURE__*/ new n(1)(2))(3);
new ( o).x(1).y(2).z(3);
/* */ new ( p.x)(1).y(2).z(3);
(/*@__PURE__*/ new q.x(1)).y(2).z(3);
( new r.x(1).y)(2).z(3);
(/*@__PURE__*/ new s.x(1).y(2)).z(3);
( new t.x(1).y(2).z)(3);
