package tarea.Funciones;

public class Main {
    // Tema 3 Funciones:
    public static void main(String[] args) {
        // sumas Primera parte
        int resultado = suma(1, 2, 3);
        System.out.println("El resutado de la Suma es: " +resultado);

        // coche Segunda parte
           Coche miCoche = new Coche(4);// el coche tiene 4 puertas
           miCoche.addPuertas(); // se añade una puerta, entonces ahora tiene 5 puertas
           System.out.println( "el Coche tiene " +miCoche.getNumPuertas()+ " Puertas.");
    }
    // Suma:
    public static int suma(int a, int b, int c) {
        int resultado = a + b + c;
        return resultado;
    }
} 
//  *** Coche ***
class Coche {
    private int numPuertas;

    public Coche(int numPuertas) {
        this.numPuertas = numPuertas;
    }

    public void addPuertas() {
        this.numPuertas++;
    }

    public int getNumPuertas() {
        return this.numPuertas;
    }
}
  
    