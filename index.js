$(document).ready(function(){

});

var tabla={
  '+':1,
  '-':2,
  '*':3,
  '/':4,
  '_':5,
  '=':6,
  '>':7,
  '<':8,
  '(':9,
  ')':10,
  '{':11,
  '}':12,
  ';':13,
  '.':14,
  '"':15,
  '?':16,
  '!':17,
  '$':18,
  '#':19,
  '&&':20,
  '||':21,
  '%':22,
  '[':23,
  ']':24,
  'try':25,
  'if':26,
  'else':27,
  'while':28,
  'do':29,
  'case':30,
  'for':31,
  'int':32,
  'string':33,
  'boolean':34,
  'flag':35,
  'true':36,
  'false':37,
  'return':38,
  'null':39,
  'public':40,
  'private':41,
  'switch':42,
  'static':43,
  'void':44,
  'min':45,
  'max':46,
  'double':47,
  'char':48,
  'varchar':49,
  'print':50,
  'date':51,
  'input':52,
  'var':53,
  'matriz':54,
  'pow':55,
  'long':56,
  'len':57,
  'default':58,
  'set':59,
  'get':60,
  'id':61,
  'const':62
}

function traducir(){
  var codigo = $("#caja_codigo").val();
  codigo = codigo.trim();
  codigo_partido = codigo.split(' ');
  $("#caja_resultado").val('');
  codigo_partido.forEach(function(e) {
    if (/^([0-9])*$/.test(e)) {
      $("#caja_resultado").val($("#caja_resultado").val()+' '+tabla['const']);
    }else{
      if(tabla[e] != undefined){
        $("#caja_resultado").val($("#caja_resultado").val()+' '+tabla[e]);
      }else{
        $("#caja_resultado").val($("#caja_resultado").val()+' '+tabla['id']);
      }
    }
  });
}
