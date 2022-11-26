Built-in Namespaces
------------------------


.. contents::
    
.. _appendix_system:

system
----------

The system namespace handles all types of miscellaneous behaviour typically found in
the system, such as time.

**Variables**

The system namespace contains no variables.

**Functions**

Table 9.1: Supported Functions for the system namespace

+-------------------------------+-----------------------------------------------------------------------------+
| Long **currentTimeMillis**\() | Returns the current time in milliseconds. Note that                         |
|                               |                                                                             |
|                               | while the unit of time of the return value is a millisecond,                |
|                               |                                                                             |
|                               | the granularity of the value depends on the underlying                      |
|                               |                                                                             |
|                               | operating system and may be larger. For example, many operating             |
|                               |                                                                             |
|                               | systems measure time in units of tens of milliseconds.                      |
+-------------------------------+-----------------------------------------------------------------------------+


math
--------------------

The math namespace contains a series of common math operations.

**Variables**

The math namespace contains no variables.


**Functions**

Table 9.2: Supported Functions for the math namespace

==============================================  ==============================================================================  
Double **sqrt**\(Double value)                      Returns the correctly rounded positive square root 
                                                    
                                                    of a double 
Double **abs**\(Double value)                       Returns the absolute value of a double value. 
                                            
                                                    If the argument is not negative, the argument is returned. 
                                            
                                                    If the argument is negative, the negation of the argument 
                                                    
                                                    is returned.
Double **pow**\(Double value, Double exponent)      Returns the value of the first argument 

                                                    raised to the power of the second argument.
Int **randomInt**\()                                Returns the next pseudorandom, uniformly 
                                                    
                                                    distributed Int value.
Long **randomLong**\()                              Returns the next pseudorandom, uniformly 
        
                                                    distributed Long value.
Float **randomFloat**\()                            Returns the next pseudorandom, uniformly 

                                                    distributed float value between 0.0 and 1.0.

Double **randomDouble**\()                          Returns the next pseudorandom, uniformly 

                                                    distributed double value between 0.0 and 1.0.
Double **random**\(Double min, Double max)          Returns the next pseudorandom, uniformly 

                                                    distributed double value between min and max.
==============================================  ==============================================================================  


Most of these functions have special cases with special arguments. View https://docs.oracle.com/javase/10/docs/api/java/lang/Math.html for these cases.