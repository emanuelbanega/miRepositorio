program actividad_numero_uno;
const
valor_alto = '99999999';

type
envio = record
   codigo:String;
   pais_origen:String;
   localidad_origen:String;
   fecha_envio:String;
   pais_destino:String;
   localidad_destino:String;
   fecha_llegada:String;
   peso:integer;
   precio:real;
end;

archivo = File of envio;

Procedure Leer(var maestro:archivo; var E:envio);
begin
if(not EOF(maestro))then
   Read(maestro,E)
else
   E.fecha_envio := valor_alto;
end;

Procedure ImprimirArchivo(nombre:String);
var
maestro:archivo; E:envio; fecha,pais,localidad:String; monto_total,monto_fecha,monto_pais:real; envios_fecha,envios_pais,envios_localidad:integer;
begin
   monto_total := 0;
   Assign(maestro,nombre);
   Reset(maestro);
   Leer(maestro,E);
   while(E.fecha_envio <> valor_alto)do begin
      fecha := E.fecha_envio;
      envios_fecha := 0;
      monto_fecha := 0;
      writeln('Fecha de envio:', fecha);
      while(E.fecha_envio = fecha)do begin
         pais := E.pais_origen;
         envios_pais := 0;
         monto_pais := 0;
         writeln('Pais de origen:', pais);
         while(E.fecha_envio = fecha) and (E.pais_origen = pais)do begin
            localidad := E.localidad_origen;
            envios_localidad := 0;
            writeln('Localidad:', localidad);
            while(E.fecha_envio = fecha) and (E.pais_origen = pais) and (E.localidad_origen = localidad)do begin
               envios_localidad := envios_localidad + 1;
               monto_pais := monto_pais + E.precio;
               writeln(E.codigo, ' - ', E.pais_destino, ' - ', E.localidad_destino, ' - ', E.precio);
               Leer(maestro,E);
            end;
            writeln('Total de envios por localidad o estado:', envios_localidad);
            envios_pais := envios_localidad;
         end;
         writeln('Total de envios por pais:', envios_pais, ' - Total recaudado por pais:', monto_pais);
         envios_fecha := envios_pais;
         monto_fecha := monto_pais;
      end;
      writeln('Total de envios por fecha:', envios_fecha, ' - Total recaudado por fecha:', monto_fecha);
      monto_total := monto_fecha;
   end;
   writeln('Monto total recaudado:', monto_total);
   Close(maestro);
end;

var
nombre:String;
begin
   writeln('Ingrese el nombre del archivo');
   readln(nombre);
   ImprimirArchivo(nombre);
end.
