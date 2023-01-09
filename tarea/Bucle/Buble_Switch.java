package tarea.Bucle;

public class Buble_Switch {
    public static void main(String[] args) {
        String estacion = "otoño";

        switch (estacion) {
            case "primavera":
                System.out.println("Estamos en primavera");
                break;
            case "verano":
                System.out.println("Estamos en verano");
                break;
            case "otoño":
                System.out.println("Estamos en otoño");
                break;
            case "invierno":
                System.out.println("Estamos en invierno");
                break;
            default:
                System.out.println("La estación especificada no es válida");
                break;
        }
        
    }
}
