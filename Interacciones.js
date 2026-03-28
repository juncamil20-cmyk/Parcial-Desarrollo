// Base de datos de productos
const productos = {
    perro: [
        { nombre: "Comida Premium Perro", precio: 50000 },
        { nombre: "Juguete Hueso", precio: 20000 },
        { nombre: "Baño", precio: 40000 }
    ],
    gato: [
        { nombre: "Comida Premium Gato", precio: 45000 },
        { nombre: "Juguete Ratón", precio: 15000 },
        { nombre: "Arena Sanitaria", precio: 30000 }
    ],
    otro: [
        { nombre: "Alimento General", precio: 30000 },
        { nombre: "Accesorio Básico", precio: 15000 }
    ]
};

// FUNCIÓN 1: Mostrar recomendaciones
function mostrarRecomendaciones() {
    const tipo = document.getElementById("tipoMascota").value;
    const contenedor = document.getElementById("recomendaciones");
    const form = document.getElementById("formProductos");

    contenedor.innerHTML = "";
    form.innerHTML = "";

    if (!tipo) {
        contenedor.innerHTML = "<p>Por favor selecciona una mascota.</p>";
        return;
    }

    const lista = productos[tipo];

    // Mostrar recomendaciones
    lista.forEach(producto => {
        const item = document.createElement("p");
        item.textContent = `${producto.nombre} - $${producto.precio}`;
        contenedor.appendChild(item);
    });

    // Crear checkboxes dinámicos
    lista.forEach((producto, index) => {
        const label = document.createElement("label");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = producto.precio;

        label.appendChild(checkbox);
        label.append(` ${producto.nombre} - $${producto.precio}`);

        form.appendChild(label);
        form.appendChild(document.createElement("br"));
    });
}

// FUNCIÓN 2: Calcular total
function calcularTotal() {
    const checkboxes = document.querySelectorAll("#formProductos input[type='checkbox']");
    let total = 0;

    checkboxes.forEach(cb => {
        if (cb.checked) {
            total += parseInt(cb.value);
        }
    });

    document.getElementById("total").textContent = "Total a pagar: $" + total;

    // Guardar en localStorage (extra)
    localStorage.setItem("totalCompra", total);
}