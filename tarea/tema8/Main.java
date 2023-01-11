package tarea.tema8;

public class Main {
   public static void main(String[] args) {
        Persona persona = new Persona();
        persona.setEdad(30);
        persona.setNombre("Juan");
        persona.setTelefono("+55-55-555555");

        System.out.print(persona.getEdad());
        System.out.print(persona.getNombre());
        System.out.print(persona.getTelefono());

   }
}

class Persona {
    private int edad;
    private String nombre;
    private String telefono;

    // edad
    public void setEdad(int edad) {
        this.edad = edad;
    }

    public int getEdad() {
        return edad;
    }

    // nombre
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getNombre() {
        return nombre;
    }

    // telefono
    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getTelefono() {
        return telefono;
    }
}