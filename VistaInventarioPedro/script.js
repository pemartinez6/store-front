function Inventario(codigo, descripcion, cod_producto, cant_ingreso, fec_ingreso, cant_salida, fec_salida, cod_empleado) {
    this.codigo = codigo;
    this.descripcion = descripcion;
    this.cod_producto = cod_producto;
    this.cant_ingreso = cant_ingreso;
    this.fec_ingreso = fec_ingreso;
    this.cant_salida = cant_salida;
    this.fec_salida = fec_salida;
    this.cod_empleado = cod_empleado;

}
var app = angular.module('lista_de_inventarios', []);
app.controller('control_principal', ['$scope', function($scope) {
    $scope.Inventario = [];
    $scope.agregar_inventario = function(Inventario) {
        $scope.Inventario.push(
            new Inventario(
                Inventario.codigo,
                Inventario.descripcion,
                Inventario.cod_producto,
                Inventario.cant_ingreso,
                Inventario.fec_ingreso,
                Inventario.cant_salida,
                Inventario.fec_salida,
                Inventario.cod_empleado,
            )
        );
        $scope.Inventario = null;
    }
}]);