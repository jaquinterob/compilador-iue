<!DOCTYPE html>
<html lang="es" dir="ltr">
<head>
  <meta charset="utf-8">
  <title>Compilador IUE</title>
  <link rel="stylesheet" href="estilo.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
  <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js"></script>
  <meta name="viewport" content="width=device-width, user-scalable=no">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body>
  <div class="row">
    <div class="col s12">
      <div class="card">
        <div class="card-content">
          <span class="card-title center-align">Compilador</span>
          <div class="row">
            <div class="input-field col m12 s12 l5">
              <textarea style="height: 100px;font-family: monospace;" id="caja_codigo" class="materialize-textarea" placeholder="Aquí va tu código"></textarea>
              <label for="textarea1">Código</label>
            </div>
            <div class="input-field col s12 m12 l2">
              <div class="card ">
                <div class="card-content center-align">
                  <a id="boton_traducir" onclick="traducir()" class="waves-effect waves-light btn blue">Compilar</a>
                </div>
              </div>
            </div>
            <div class="input-field col s12 m12 l5">
              <textarea style="height: 100px;font-family: monospace;" id="caja_resultado" class="materialize-textarea" placeholder="Aqui va el código compilado"></textarea>
              <label for="textarea1">Resultrado</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <script src="index.js" charset="utf-8"></script>
</body>
</html>
