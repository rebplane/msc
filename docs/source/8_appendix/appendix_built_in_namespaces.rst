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

================================= =========================================================================
================================= =========================================================================
 Long **currentTimeMillis**\()      Returns the current time in milliseconds. Note that                         
                                                                                                            
                                    while the unit of time of the return value is a millisecond,                
                                                                                                            
                                    the granularity of the value depends on the underlying                      
                                                                                                            
                                    operating system and may be larger. For example, many operating             
                                                                                                           
                                    systems measure time in units of tens of milliseconds.     
Double[] **getTPS()**               Returns a list of size 3, containing the average TPS 
                                    
                                    over the last 1 minute, 5 minutes and 15 minutes.                 
================================= =========================================================================


math
--------------------

The math namespace contains a series of common math operations.

**Variables**

The math namespace contains no variables.


**Functions**

Table 9.2: Supported Functions for the math namespace

==============================================  ==============================================================================  
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
Double **sin**\(Double x)                            Returns the sin of a double  (takes degrees).
Double **cos**\(Double x)                            Returns the cos of a double (takes degrees). 
Double **tan**\(Double x)                            Returns the tan of a double (takes degrees).
Double **arcsin**\(Double x)                         Returns the arcsin of a double (takes degrees).
Double **arccos**\(Double x)                         Returns the arccos of a double (takes degrees).
Double **arctan**\(Double x)                         Returns the arctan of a double (takes degrees).
Double **radsin**\(Double x)                         Returns the sin of a double (takes radians).
Double **radcos**\(Double x)                         Returns the cos of a double (takes radians).
Double **radtan**\(Double x)                         Returns the tan of a double (takes radians).
Double **radarcsin**\(Double x)                      Returns the arcsin of a double (takes radians).
Double **radarccos**\(Double x)                      Returns the arccos of a double (takes radians).
Double **radarctan**\(Double x)                      Returns the arctan of a double (takes radians).
Double **rad**\(Double x)                            Returns the double converted to radians (takes degrees).
Double **deg**\(Double x)                            Returns the double converted to degrees (takes radians).
==============================================  ==============================================================================  


Most of these functions have special cases with special arguments. View https://docs.oracle.com/javase/10/docs/api/java/lang/Math.html for these cases.


util
--------------------

**Variables**

The util namespace contains no variables.


**Functions**

Supported Functions for the util namespace

====================================================  ==============================================================================  
====================================================  ==============================================================================  
Boolean **executeAndQuerySuccess**\(String command)     Run an /execute Minecraft command and get the success value.
Int **executeAndQueryResult**\(String command)          Run an /execute Minecraft command and get the result value.
String **randomUUID**\()                                Randomly generates a UUID.
====================================================  ==============================================================================  

format
--------------------

**Variables**

The format namespace contains no variables.


**Functions**

Supported Functions for the format namespace

=====================================================  ==============================================================================  
=====================================================  ==============================================================================  
**formatDate**\(Long unixDateMillis, String format)     Returns the converted unix date in the format specified by *format*.

=====================================================  ==============================================================================  

timer
--------------------

**Variables**

The timer namespace contains no variables.


**Functions**

Never store a Timer instance in a namespace variable. It will break on you silently. ALWAYS use timer::getCustomTimer().

Supported Functions for the timer namespace

===============================================================  ==============================================================================  
===============================================================  ==============================================================================  
**getMapTimer**\(Player player, String mapcode)                     Get a player's timer for a map.
**getChallengeTimer**\(Player player, String challengecode)         Get a player's timer for a challenge.
**getCustomTimer**\(Player player, String tag)                      Gets a player's custom timer. You can construct custom 

                                                                    timers by instantiating the timer::Timer type.
**getSpecialTimer**\(Player player, String tag)                     
**removeCustomTimer**\(Player player, String tag)                   Removes a custom timer.
String **formatTime**\(Long time).                                  Format a time into a string.
===============================================================  ==============================================================================  