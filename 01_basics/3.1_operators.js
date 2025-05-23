Types of JavaScript Operators
There are different types of JavaScript operators:

Arithmetic Operators
Assignment Operators
Comparison Operators
String Operators
Logical Operators
Bitwise Operators
Ternary Operators
Type Operators

1)Arithmetic operators
 Operator	Description
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Division Remainder)
++	Increment
--	Decrement
Note-x ** y produces the same result as Math.pow(x,y):

2)Assignment operators
Operator	Example	Same As
=	        x = y  	x = y
+=	      x += y	x = x + y
-=	      x -= y	x = x - y
*=	      x *= y	 x = x * y
/=	      x /= y	 x = x / y
%=	      x %= y   x = x % y
**=	      x **= y	 x = x ** y

3)Comparison operators
Operator 	Description
==	      equal to
===     	equal value and equal type
!=      	not equal
!==     	not equal value or not equal type
>	        greater than
<	        less than
>=	      greater than or equal to
<=	      less than or equal to
?	        ternary operator

4)Logical operators
 &&	 logical and
||	 logical or
!	   logical not

5)Type operators
Operator	  Description
typeof	    Returns the type of a variable
instanceof	Returns true if an object is an instance of an object type

6)Bitwise Operators
  Bit operators work on 32 bits numbers.

Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a JavaScript number.
Operator	Description	Example	    Same as	      Result	Decimal
&	         AND	      5 & 1   	0101 & 0001     	0001	 1
|	         OR	        5 | 1    	0101 | 0001	      0101	 5
~	         NOT	     ~ 5	       ~0101	          1010	 10
^        	XOR	        5 ^ 1	     0101 ^ 0001	     0100	 4
<<	      left shift	5 << 1	   0101 << 1	       1010	 10
>>	      right shift	5 >> 1	   0101 >> 1	      0010	  2
>>>unsigned right shift5 >>> 1	  0101 >>> 1	    0010	  2

7)String operators
