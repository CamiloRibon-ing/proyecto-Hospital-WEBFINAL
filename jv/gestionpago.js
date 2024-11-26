function generarFactura() {
    const monto = parseFloat(document.getElementById('monto').value);
    const metodoPago = document.getElementById('metodoPago').value;
    const estadoPago = document.getElementById('estadoPago').value;
    const concepto = document.getElementById('concepto').value;
    const descuento = parseFloat(document.getElementById('descuento').value) || 0;

    // Validación del monto
    if (!monto || monto <= 0) {
        alert('Por favor, ingrese un monto válido.');
        return;
    }

    // Fechas de emisión y vencimiento de la factura
    const fechaEmision = new Date();
    const fechaVencimiento = new Date();
    fechaVencimiento.setDate(fechaEmision.getDate() + 30);

    // Calcular el monto final con descuento
    const montoFinal = monto - (monto * (descuento / 100));

    // Generar ID de factura único
    const idFactura = 'FAC-' + Date.now();

    // Crear objeto de factura
    const factura = {
        idFactura,
        monto: monto.toFixed(2),
        metodoPago,
        estadoPago,
        concepto,
        descuento: descuento + '%',
        fechaEmision: fechaEmision.toLocaleDateString(),
        fechaVencimiento: fechaVencimiento.toLocaleDateString(),
        montoFinal: montoFinal.toFixed(2)
    };

    // Guardar factura en localStorage
    let facturas = JSON.parse(localStorage.getItem('facturas')) || [];
    facturas.push(factura);
    localStorage.setItem('facturas', JSON.stringify(facturas));

    // Mostrar factura generada en la tabla
    const facturaBody = document.getElementById('facturaBody');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${factura.idFactura}</td>
        <td>${factura.monto}</td>
        <td>${factura.metodoPago}</td>
        <td>${factura.estadoPago}</td>
        <td>${factura.concepto}</td>
        <td>${factura.descuento}</td>
        <td>${factura.fechaEmision}</td>
        <td>${factura.fechaVencimiento}</td>
        <td>${factura.montoFinal}</td>
    `;
    facturaBody.appendChild(row);

    // Actualizar la lista de facturas guardadas
    mostrarFacturas();
}

function mostrarFacturas() {
    const listaFacturas = document.getElementById('listaFacturas');
    listaFacturas.innerHTML = '';

    // Obtener facturas del localStorage
    const facturas = JSON.parse(localStorage.getItem('facturas')) || [];

    // Crear elementos de lista para cada factura
    facturas.forEach(factura => {
        const li = document.createElement('li');
        li.textContent = `${factura.idFactura} - ${factura.concepto} - $${factura.montoFinal} - Estado: ${factura.estadoPago}`;
        listaFacturas.appendChild(li);
    });
}

// Mostrar facturas cuando el contenido del DOM está cargado
document.addEventListener('DOMContentLoaded', () => {
    mostrarFacturas();

    // Mostrar las facturas guardadas en la tabla
    const facturas = JSON.parse(localStorage.getItem('facturas')) || [];
    const facturaBody = document.getElementById('facturaBody');
    facturas.forEach(factura => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${factura.idFactura}</td>
            <td>${factura.monto}</td>
            <td>${factura.metodoPago}</td>
            <td>${factura.estadoPago}</td>
            <td>${factura.concepto}</td>
            <td>${factura.descuento}</td>
            <td>${factura.fechaEmision}</td>
            <td>${factura.fechaVencimiento}</td>
            <td>${factura.montoFinal}</td>
        `;
        facturaBody.appendChild(row);
    });
});