var regex = /[^a-z0-9\x20]/i;
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
  'const':62,
  '==':63,
  '=>':63,
  '=<':63,
  '!=':63,
  '()':64
}

$(document).ready(function(){
  listeners()
});

function listeners(){
  $("#caja_codigo").keyup(()=>{
    if ($("#caja_codigo").val() != '') {
      $("#caja_codigo").removeClass('invalid');
    }
  });
}

function traducir(){
  $("#caja_resultado").val('');
  var codigo = $("#caja_codigo").val();
  var filas = codigo.split('\n');
  var respuesta = '';
  filas.forEach((fila)=>{
    respuesta = '';
    let codigo = fila.trim();
    if (codigo != '' ) {
      codigo_idividualizado = codigo.split(' ');
      codigo_idividualizado.forEach(function(item_codigo) {
        if (item_codigo != '') {
          if (/^([0-9])*$/.test(item_codigo)) {
            respuesta += ' '+tabla['const'];
          }else{
            if(tabla[item_codigo] != undefined){
              respuesta += ' '+tabla[item_codigo];
            }else{
              if (!regex.test(item_codigo)) {
                respuesta += ' '+tabla['id'];
              }else{
                M.toast({html:'Expresión irregular en -> \''+item_codigo + '\'<br> Ayuda: los caracteres deben ir separados de las variables o constantes <a onclick="M.Toast.dismissAll();" style="margin-left:1%;color:#fff" class="waves-effect btn-flat"><i class="material-icons">close</i></a>',classes:'red',displayLength:20000});
              }
            }
          }
        }
      });
      $("#caja_resultado").val($("#caja_resultado").val()+respuesta+'\n');
      M.textareaAutoResize($('#caja_resultado'));
      verificacion_sintactica($("#caja_resultado").val());
    }else{
      M.toast({html:'Nada para Compilar',classes:'red'});
      $("#caja_codigo").addClass('invalid');
      $("#caja_resultado").val('');
    }
  });
}

function verificacion_sintactica(traduccion){
  traduccion_individualizada = traduccion.split(' ');



  for (var i = 1; i < traduccion_individualizada.length; i++) {
    if (i == 1) {
      if (
        traduccion_individualizada[i] != tabla['id'] &&
        traduccion_individualizada[i] != tabla['var'] &&
        traduccion_individualizada[i] != tabla['if'] &&
        traduccion_individualizada[i] != tabla['for'] &&
        traduccion_individualizada[i] != tabla['while']
      ) {
        M.toast({html:'Error de sintaxis. al inicio de la linea. <br> <a onclick="M.Toast.dismissAll();" style="margin-left:1%;color:#fff" class="waves-effect btn-flat"><i class="material-icons">close</i></a>',classes:'red',displayLength:20000});
      }
    }

    if (traduccion_individualizada[i] == tabla['if']) {
      if (traduccion_individualizada[i+1] != undefined) {
        if (traduccion_individualizada[i+1] != tabla['(']) {
          M.toast({html:'Expresión irregular para la sentencia \'IF\'<br> Ayuda: Se esperaba un \'(\' <a onclick="M.Toast.dismissAll();" style="margin-left:1%;color:#fff" class="waves-effect btn-flat"><i class="material-icons">close</i></a>',classes:'red',displayLength:20000});
        }
      }else{
        M.toast({html:'Expresión irregular para la sentencia \'IF\'<br> Ayuda: No se esperaba el fin de la linea   <a onclick="M.Toast.dismissAll();" style="margin-left:1%;color:#fff" class="waves-effect btn-flat"><i class="material-icons">close</i></a>',classes:'red',displayLength:20000});
      }
    }

    if (traduccion_individualizada[i] == tabla['for']) {
      if (traduccion_individualizada[i+1] != undefined) {
        if (traduccion_individualizada[i+1] != tabla['(']) {
          M.toast({html:'Expresión irregular para la sentencia \'FOR\'<br> Ayuda: Se esperaba un \'(\' <a onclick="M.Toast.dismissAll();" style="margin-left:1%;color:#fff" class="waves-effect btn-flat"><i class="material-icons">close</i></a>',classes:'red',displayLength:20000});
        }
      }else{
        M.toast({html:'Expresión irregular para la sentencia \'FOR\'<br> Ayuda: No se esperaba el fin de la linea   <a onclick="M.Toast.dismissAll();" style="margin-left:1%;color:#fff" class="waves-effect btn-flat"><i class="material-icons">close</i></a>',classes:'red',displayLength:20000});
      }
    }

    if (traduccion_individualizada[i] == tabla['while']) {
      if (traduccion_individualizada[i+1] != undefined) {
        if (traduccion_individualizada[i+1] != tabla['(']) {
          M.toast({html:'Expresión irregular para la sentencia \'WHILE\'<br> Ayuda: Se esperaba un \'(\' <a onclick="M.Toast.dismissAll();" style="margin-left:1%;color:#fff" class="waves-effect btn-flat"><i class="material-icons">close</i></a>',classes:'red',displayLength:20000});
        }
      }else{
        M.toast({html:'Expresión irregular para la sentencia \'WHILE\'<br> Ayuda: No se esperaba el fin de la linea   <a onclick="M.Toast.dismissAll();" style="margin-left:1%;color:#fff" class="waves-effect btn-flat"><i class="material-icons">close</i></a>',classes:'red',displayLength:20000});
      }
    }

    if (traduccion_individualizada[i] == tabla['const']) {
      if (traduccion_individualizada[i+1] != undefined) {
        if (
          traduccion_individualizada[i+1] != tabla[';'] &&
          traduccion_individualizada[i+1] != tabla['+'] &&
          traduccion_individualizada[i+1] != tabla['*'] &&
          traduccion_individualizada[i+1] != tabla['/'] &&
          traduccion_individualizada[i+1] != tabla['=='] &&
          traduccion_individualizada[i+1] != tabla['%'] &&
          traduccion_individualizada[i+1] != tabla['&&'] &&
          traduccion_individualizada[i+1] != tabla[']'] &&
          traduccion_individualizada[i+1] != tabla['}'] &&
          traduccion_individualizada[i+1] != tabla[')'] &&
          traduccion_individualizada[i+1] != tabla['||']
        ) {
          M.toast({html:'Error de sintaxis. Despues de una constante<br> <a onclick="M.Toast.dismissAll();" style="margin-left:1%;color:#fff" class="waves-effect btn-flat"><i class="material-icons">close</i></a>',classes:'red',displayLength:20000});
        }
      }
    }

    if (traduccion_individualizada[i] == tabla['id']) {
      if (traduccion_individualizada[i+1] != undefined) {
        if (
          traduccion_individualizada[i+1] != tabla[';'] &&
          traduccion_individualizada[i+1] != tabla['+'] &&
          traduccion_individualizada[i+1] != tabla['*'] &&
          traduccion_individualizada[i+1] != tabla['/'] &&
          traduccion_individualizada[i+1] != tabla['=='] &&
          traduccion_individualizada[i+1] != tabla['>'] &&
          traduccion_individualizada[i+1] != tabla['<'] &&
          traduccion_individualizada[i+1] != tabla['=<'] &&
          traduccion_individualizada[i+1] != tabla['=>'] &&
          traduccion_individualizada[i+1] != tabla['%'] &&
          traduccion_individualizada[i+1] != tabla['&&'] &&
          traduccion_individualizada[i+1] != tabla['='] &&
          traduccion_individualizada[i+1] != tabla['||']
        ) {
          M.toast({html:'Error de sintaxis. Despues de una variable<br> <a onclick="M.Toast.dismissAll();" style="margin-left:1%;color:#fff" class="waves-effect btn-flat"><i class="material-icons">close</i></a>',classes:'red',displayLength:20000});
        }
      }
    }

    if (traduccion_individualizada[i] == tabla['=']) {
      if (traduccion_individualizada[i+1] != undefined) {
        if (
          traduccion_individualizada[i+1] != tabla['id'] &&
          traduccion_individualizada[i+1] != tabla['const'] &&
          traduccion_individualizada[i+1] != tabla['null']
        ) {
          M.toast({html:'Error de sintaxis. Despues de \'=\'<br> <a onclick="M.Toast.dismissAll();" style="margin-left:1%;color:#fff" class="waves-effect btn-flat"><i class="material-icons">close</i></a>',classes:'red',displayLength:20000});
        }
      }else{
        M.toast({html:'Expresión irregular<br> Ayuda: No se esperaba el fin de la linea   <a onclick="M.Toast.dismissAll();" style="margin-left:1%;color:#fff" class="waves-effect btn-flat"><i class="material-icons">close</i></a>',classes:'red',displayLength:20000});
      }
    }

    if (traduccion_individualizada[i] == tabla['var']) {
      if (traduccion_individualizada[i+1] != undefined) {
        if (
          traduccion_individualizada[i+1] != tabla['id']
        ) {
          M.toast({html:'Error de sintaxis. Despues de \'var\'<br> <a onclick="M.Toast.dismissAll();" style="margin-left:1%;color:#fff" class="waves-effect btn-flat"><i class="material-icons">close</i></a>',classes:'red',displayLength:20000});
        }
      }else{
        M.toast({html:'Expresión irregular<br> Ayuda: No se esperaba el fin de la linea   <a onclick="M.Toast.dismissAll();" style="margin-left:1%;color:#fff" class="waves-effect btn-flat"><i class="material-icons">close</i></a>',classes:'red',displayLength:20000});
      }
    }

    if (
      traduccion_individualizada[i] == tabla['=='] ||
      traduccion_individualizada[i] == tabla['>'] ||
      traduccion_individualizada[i] == tabla['<'] ||
      traduccion_individualizada[i] == tabla['=>'] ||
      traduccion_individualizada[i] == tabla['!='] ||
      traduccion_individualizada[i] == tabla['=<']) {
      if (traduccion_individualizada[i+1] != undefined) {
        if (
          traduccion_individualizada[i+1] != tabla['id'] &&
          traduccion_individualizada[i+1] != tabla['const']
        ) {
          M.toast({html:'Error de sintaxis. Despues de \'operador de comparación\'<br> <a onclick="M.Toast.dismissAll();" style="margin-left:1%;color:#fff" class="waves-effect btn-flat"><i class="material-icons">close</i></a>',classes:'red',displayLength:20000});
        }
      }else{
        M.toast({html:'Expresión irregular<br> Ayuda: No se esperaba el fin de la linea   <a onclick="M.Toast.dismissAll();" style="margin-left:1%;color:#fff" class="waves-effect btn-flat"><i class="material-icons">close</i></a>',classes:'red',displayLength:20000});
      }
    }

  }
}
