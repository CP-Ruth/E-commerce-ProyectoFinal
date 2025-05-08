import { TableRowUser } from "../../components/Table/TableRow";
import { TableHeadUser } from "../../components/Table/TableRowHead"
import styles from "./AdminUsers.module.css"
interface Usuario {
  nombre: string;
  apellido: string;
  email: string;
  dni: string;
  direccion: string;
  provincia: string;
}

const AdminUsers = () => {

  const usuarios: Usuario[] = [
    {
      nombre: "Juan",
      apellido: "Pérez",
      email: "juan.perez@email.com",
      dni: "12345678",
      direccion: "Calle Falsa 123",
      provincia: "Buenos Aires",
    },
    {
      nombre: "Ana",
      apellido: "García",
      email: "ana.garcia@email.com",
      dni: "23456789",
      direccion: "Av. Libertador 456",
      provincia: "Córdoba",
    },
    {
      nombre: "Carlos",
      apellido: "Rodríguez",
      email: "carlos.rod@email.com",
      dni: "34567890",
      direccion: "Belgrano 789",
      provincia: "Santa Fe",
    },
    {
      nombre: "Lucía",
      apellido: "Martínez",
      email: "lucia.martinez@email.com",
      dni: "45678901",
      direccion: "Mitre 321",
      provincia: "Mendoza",
    },
    {
      nombre: "María",
      apellido: "Fernández",
      email: "maria.fernandez@email.com",
      dni: "56789012",
      direccion: "San Martín 654",
      provincia: "Tucumán",
    },
    {
      nombre: "Diego",
      apellido: "López",
      email: "diego.lopez@email.com",
      dni: "67890123",
      direccion: "Corrientes 987",
      provincia: "Salta",
    },
    {
      nombre: "Sofía",
      apellido: "Romero",
      email: "sofia.romero@email.com",
      dni: "78901234",
      direccion: "Rivadavia 111",
      provincia: "Chaco",
    },
    {
      nombre: "Julián",
      apellido: "Alvarez",
      email: "julian.alvarez@email.com",
      dni: "89012345",
      direccion: "Independencia 222",
      provincia: "Neuquén",
    },
    {
      nombre: "Camila",
      apellido: "Silva",
      email: "camila.silva@email.com",
      dni: "90123456",
      direccion: "Lavalle 333",
      provincia: "Entre Ríos",
    },
    {
      nombre: "Nicolás",
      apellido: "Torres",
      email: "nicolas.torres@email.com",
      dni: "01234567",
      direccion: "9 de Julio 444",
      provincia: "La Pampa",
    }
  ];

  
  return (
    <section>
      <div></div>

      <table className={styles.tableUser} >
        <thead>
          <TableHeadUser />
        </thead>
        <tbody>
          {usuarios.length > 0 ? (
            usuarios.map((usuario) => (
              <TableRowUser
                nombre={usuario.nombre}
                apellido={usuario.apellido}
                email={usuario.email}
                dni={usuario.dni}
                direccion={usuario.direccion}
                provincia={usuario.provincia}
              />
            ))
          ) : ("No hay usuarios")}
        </tbody>
      </table>
    </section>
  )
}

export default AdminUsers