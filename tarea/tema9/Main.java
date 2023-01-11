package tema9;

public class Main {
    public static void main(String[] args) {
        // Crear un objeto de la clase Cliente y asignar valores a sus propiedades
        Cliente cliente1 = new Cliente(40, "Juana", "+23 12321234", 892);
        System.out.println("Edad: " + cliente1.edad);
        System.out.println("Nombre: " + cliente1.nombre);
        System.out.println("Numero de Tel: " + cliente1.telefono);
        System.out.println("Numero de Cliente: " + cliente1.cliente);

        // Crear un objeto de la clase Trabajador y asignar valores a sus propiedades
        Trabajador trabajador1 = new Trabajador(25, "Beto", "+32 1712923",2000);
        System.out.println("Edad: " + trabajador1.edad);
        System.out.println("Nombre: " + trabajador1.nombre);
        System.out.println("Numero de Tel: " + trabajador1.telefono);
        System.out.println("Salario del Trabajador " + trabajador1.salario);
    }
}

class Persona {
    int edad;
    String nombre;
    String telefono;

    public Persona(int edad, String nombre, String telefono){
        this.edad = edad;
        this.nombre = nombre;
        this.telefono = telefono;
    }
}

class Cliente extends Persona {
    int cliente;

    public Cliente(int edad, String nombre, String telefono, int cliente) {
        super(edad, nombre, telefono);
        this.cliente = cliente;
    }
}

class Trabajador extends Persona {
    int salario;

    public Trabajador(int edad, String nombre, String telefono, int salario) {
        super(edad, nombre, telefono);
        this.salario = salario;
    }
}