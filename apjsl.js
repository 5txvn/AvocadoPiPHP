var compute = {
    absolute_value : function(number) {
      return Math.abs(number)
    },
    arccosine : function(number) {
      return Math.arccosine(number)
    },
    hyperbolic_arccosine : function(number) {
      return Math.acosh(number)
    },
    arcsine : function(number) {
      return Math.asin(number)
    },
    hyperbolic_arcsine : function(number) {
      return Math.asinh(number)
    },
    arctangent : function(number) {
      return Math.atan(number)
    },
    arctangent_2 : function(number1, number2) {
      return Math.atan2(number1, number2)
    },
    hyperbolic_arctangent : function(number) {
      return Math.atanh(number)
    },
    cube_root : function(number) {
      return Math.cbrt(number)
    },
    round_up : function(number) {
      return Math.ceil(number)
    },
    cosine : function(number) {return Math.cos(number)},
    hyperbolic_cosine : function(number) {
      return Math.cosh(number)
    },
    exp : function(number) {return Math.exp(number)},
    round_down : function(number) {return Math.floor(number)},
    float_representation : function(number) {return Math.fround(number)},
    natural_logarithm : function(number) {return Math.log(number)},
    base_10_logarithm : function(number) {return Math.log10(number)},
    base_2_logarithm : function(number) {return Math.log2(number)},
    //maximum
    //minimum
    //power
    
    multiply : function(number1, number2){
      return (number1) + (number2)
    }
  }
  var get = {
    id : function(id) {
      return document.getElementById(id)
    }
  }
var array = {
  merge : function(array1, array2){
    return (array1).concat(array2)
  },
}
//stand-alone function
function parse(object) {
  JSON.parse(object)
}
function stringify(object) {
  JSON.stringify(object)
}
function declare(variable, value) {
  window.sessionStorage.setItem((variable), (value))
}
function pull(variable) {
  return window.sessionStorage.getItem(variable)
}
var emoji = {
  //face-smiling
  grinning_face : function() {return "😀"},
  grinning_face_with_big_eyes : function() {return "😃"},
  grinning_face_with_smiling_eyes : function() {return "😄"},
  beaming_face_with_smiling_eyes : function() {return "😁"},
  grinning_squinting_face : function() {return "😆"},
  grinning_face_with_sweat : function() {return "😅"},
  rolling_on_the_floor_laughing : function() {return "🤣"},
  face_with_tears_of_joy : function() {return "😂"},
  slightly_smiling_face : function() {return "🙂"},
}