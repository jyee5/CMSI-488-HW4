import ohm from 'ohm-js'

const grammars = {
  canadianPostalCode: `canadianPostalCode {
    canadianPostalCode = ("A".."C"|"E"|"G".."H"|"J".."N"|"P"|"R".."T"|"V"|"X"|"Y") digit
            ("A".."C"|"E"|"G".."H"|"J".."N"|"P"|"R".."T"|"V".."Z") " "
            digit ("A".."C"|"E"|"G".."H"|"J".."N"|"P"|"R".."T"|"V".."Z") digit
  }`,
  visa: `isVisa {
    isVisa = "4" d d d d d d d d d d d d (d d d)?
    d = digit
  }`,
  masterCard: `masterCard {
    masterCard = "5" "1".."5" d d d12  		        --five      
                 | "222" "1".."9" d12       		  --twotwotwo
                 | "22" "3".."9" d d12      		  --twotwo
                 | "2" "3".."6" d d d12     		  --two
                 | "27" "0".."1" d d d12    		  --twoSeven
                 | "2720" d12               			--twoSevenTwo
    d12 = d d d d d d d d d d d d
    d = digit
  }`,
  adaFloat: `adaFloat {
    adaFloat = basedLit | decimalLit
    decimalLit = int ("." int)? exponent?
    basedLit = int "#" extInt ("." extInt)? "#" exponent?
    exponent = (("E"|"e")("+"|"-")? int)
    int = digit ("_"? digit)*
    extInt = hexDigit ("_"? hexDigit)*
  }`,
  notThreeEndingInOO: `notThreeEndingInOO {
    notThreeEndingInOO =  ~(letter ("o"|"O")("o"|"O") ~letter ) letter*
  }`,
  divisibleBy64: `divisibleBy64 {
    divisibleBy64 = ("0")+                                      --zeros
                    | (~"000000" ("0" | "1"))*  "000000"        --notzero  
                    
  }`,
  eightThroughTwentyNine: `eightThroughTwentyNine {
    eightThroughTwentyNine = ("8"|"9")                          --eightNine
                             |(("1"|"2") digit)                 --tenThruRest
  }`,
  mLComment: `mLComment {
    mLComment = "(*"(~"*)"any)*"*)"
  }`,
  notDogDoorDenNoLookAround: `notDogDoorDenNoLookAround {
    notDogDoorDenNoLookAround = keyword letter+    	 								--anyWithKeywords
    							| "doo" ("A".."Z" | "a".."q" | "s".."z") letter* 						--doo
                                | "do" ("A".."Z" | "a".."f" | "h".."n" |"p".."z") letter*   		   --do
                                | "de" ("A".."Z" | "a".."m" | "o".."z") letter*   		   				--de
                                | "d" ("A".."Z" | "a".."d"|"f".."n" | "p".."z") letter* 				--d
                                | ("A".."Z" | "a".."c" | "e".."z") letter*									--any
                                | ""                                   
    keyword = "dog" | "door" | "den"
  }`,
  notDogDoorDenWithLookAround: `notDogDoorDenWithLookAround {
    notDogDoorDenWithLookAround = keyword letter+             --keywordPlusWhatever
                                  | ~keyword letter*          --Rest
    keyword = "dog" | "door" | "den"
  }`,
}

export function matches(name, string) {
  return ohm.grammar(grammars[name]).match(string).succeeded()
}
