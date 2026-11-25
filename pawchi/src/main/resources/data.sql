INSERT INTO rol (nombre) VALUES ('ADMIN'), ('CLIENTE');

INSERT INTO region (nombre) VALUES ('Metropolitana');

INSERT INTO comuna (nombre, region_id) VALUES ('Maipu', 1), ('Santiago', 1);

INSERT INTO estado (nombre) VALUES ('PENDIENTE'), ('PAGADA'), ('ENVIADA');

INSERT INTO metodo_pago (nombre) VALUES ('Debito'), ('Credito'), ('Transferencia');

INSERT INTO metodo_envio (nombre) VALUES ('Retiro en tienda'), ('Envio a domicilio');

INSERT INTO coleccion (nombre, descripcion) VALUES ('Pawchi Serie 1', 'Coleccion inicial de blind boxes');

INSERT INTO producto (nombre, descripcion, precio, stock, coleccion_id)
VALUES ('Blind Box Pawchi Clasica', 'Figura sorpresa edicion regular', 12990, 25, 1);

INSERT INTO imagen (url, producto_id)
VALUES ('https://ejemplo.com/pawchi-1.jpg', 1);