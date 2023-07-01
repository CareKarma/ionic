import { Injectable } from '@angular/core';

export interface Message {
  animeName: string;
  descripcion: string;
  id: number;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Message[] = [
    {
      animeName: 'Jojo Bizarre Adventures',
      descripcion: 'La trama se desarrolla en torno a la historia del linaje Joestar, una poderosa familia de origen británico destinada a combatir fuerzas sobrenaturales malvadas usando poderes adquiridos; la obra abarca varias generaciones de dicho linaje, las cuales son adaptadas en cada parte poniendo un descendiente como protagonista, empezando con Jonathan en el año 1880. Las partes 1 a 6 tienen una historia continua y lineal, mientras que las 7 y 8 ocurren en un universo alterno.',
      id: 0,
      read: false
    },
    {
      animeName: 'One Piece',
      descripcion: 'La serie comienza con la ejecución de Gold Roger, un hombre conocido como “El Rey de los Piratas” (海賊王 Kaizoku-Ō?), quien justo antes de su muerte, hace mención de su gran tesoro legendario, el One Piece (ワンピース Wan Pīsu?), y que puede ser tomado por quien lo encuentre. Esto marca el inicio de una era conocida como la Gran Era Pirata (大海賊時代 Daikaizokujidai?). Como resultado, un sinnúmero de piratas zarparon hacia Grand Line, el mar donde se encuentra dicho tesoro, con el objetivo de encontrarlo. Más de veinte años después de la muerte de Roger, el One Piece sigue sin ser encontrado. Un joven llamado Monkey D. Luffy, quien comió la Fruta Goma Goma, la cual le otorgó elasticidad, inspirado por la admiración que desde su infancia le tiene al poderoso pirata Shanks el Pelirrojo, comienza su aventura desde su hogar en el mar East Blue para encontrar el One Piece y autoproclamarse como el nuevo Rey de los Piratas.',
      id: 1,
      read: false
    },
    {
      animeName: 'Dragon Ball Z',
      descripcion: 'Dragon Ball Z retoma cinco años después del final del anime Dragon Ball, con Goku ahora un adulto joven y padre de su hijo, Gohan.Un extraterrestre humanoide llamado Raditz llega a la Tierra en una nave espacial y rastrea a Goku, revelándole que es su hermano mayor perdido hace mucho tiempo y que son miembros de una raza guerrera alienígena casi extinta llamada Saiyajin (サイヤ人, Saiya-jin) (conocido como "Saiyan" en España). Los Saiyajin enviaron a Goku (originalmente llamado Kakaroto [カカロット, Kakarotto]) a la Tierra cuando era un bebé para conquistar el planeta para ellos, pero sufrió un fuerte golpe en la cabeza poco después de su llegada, y perdió todo recuerdo de su misión, así como su naturaleza Saiyajin sedienta de sangre.',
      id: 2,
      read: false
    },
    {
      animeName: 'Erased',
      descripcion: 'Año 2006. Satoru Fujinuma es un autor de manga frustrado que trabaja como repartidor de pizzas para llegar a final de mes. Lo que no sabe nadie es que posee un don excepcional: cada vez que tiene lugar alguna tragedia cerca de él es proyectado unos minutos hacia atrás en el tiempo para tratar de impedirla. Precisamente, uno de estos episodios hace aflorar los recuerdos reprimidos de su infancia traumática, lo que acaba teniendo consecuencias demoledoras y trágicas en su presente. Una vez más, sufre una de sus regresiones, solo que esta vez lo lleva hasta el año 1988, justo antes de que su compañera de clase Kayo Hinazuki se convirtiera en la primera víctima de un secuestrador en serie. ¿Será el Satoru de 11 años capaz de reparar el pasado para cambiar el presente?',
      id: 3,
      read: false
    },
    {
      animeName: 'Attack on Titan',
      descripcion: 'La historia está ambientada en la isla «Paradis», ubicada al noreste del país de «Marley», en donde Eren Jaeger vive con su familia (entre ellos su hermana adoptiva Mikasa Ackerman) y su mejor amigo Armin Arlert. Su pueblo colinda con la «Muralla María», la más externa del Reino de las «tres murallas». Estos enormes muros fueron construidos cien años atrás, con el fin de protegerse de los «titanes», criaturas de entre tres y sesenta metros de alto que casi aniquilaron a la humanidad. Además de su gran tamaño, los titanes se caracterizan por su estructura corporal parecida a la de los humanos, a quienes devoran de forma instintiva, y la única manera conocida de matarlos es cortándoles la nuca.',
      id: 4,
      read: false
    },
    {
      animeName: 'Naruto Shippuden',
      descripcion: 'La historia principal sigue a Naruto y al crecimiento individual de sus amigos, junto a su desarrollo como ninja. Además, se centra en las interacciones entre estos y la influencia del entorno en sus personalidades. Conforme transcurre la serie, Naruto se relaciona con Sasuke Uchiha y Sakura Haruno, con quienes conforma el «Equipo 7» junto a su sensei Kakashi Hatake.',
      id: 5,
      read: false
    },
    {
      animeName: 'Fate/Stay Night Unlimited Blade Works',
      descripcion: 'La historia gira en torno a Shirou Emiya, un adolescente trabajador y honesto que involuntariamente entra en la quinta iteración de una batalla real a muerte llamada Guerra del Santo Grial, donde los combatientes luchan con magia y héroes a lo largo de la historia para tener la oportunidad de que sus deseos sean concedidos . Huérfano y el único sobreviviente de un incendio masivo en la ciudad de Fuyuki cuando era niño, Shirou fue acogido por un mago retirado llamado Kiritsugu Emiya, quien murió algunos años después. Los sentimientos de responsabilidad de Shirou por aquellos que murieron y su propia salvación a través de su padre formaron un fuerte deseo de justicia y paz en él. Por lo tanto, entrena con seriedad su cuerpo y su minúscula habilidad con la magia con el objetivo de ayudar a los demás, incluso si la gente suele abusar de su generosidad. ',
      id: 6,
      read: false
    },
    {
      animeName: 'Pokemon',
      descripcion: 'Cuando el creador, Satoshi Tajiri, era joven, uno de sus pasatiempos favoritos era la recolección y colección de insectos.​ Tajiri se dirigió a la ciudad de Tokio a estudiar, ya que su padre quería que fuese ingeniero. Sin embargo, a Tajiri no le agradaba la idea de estudiar y se dedicaba más a pasatiempos como los videojuegos. Pasó un tiempo y Tajiri llegó a trabajar como jugador de prueba de algunos juegos para revistas, junto a Ken Sugimori, con quien hizo una gran amistad. En 1989 crearon una revista llamada Game Freak.',
      id: 7,
      read: false
    },
    {
      animeName: 'Zoids',
      descripcion: 'La historia se inicia en el planeta Zi, un planeta habitado por grandes compañeros mecánicos conocidos como "zoids" que han sido modificados por los humanos para ser utilizados como armas de guerra . En este planeta, dos naciones que antiguamente se encontraban enemistadas, la República de Helic y el Imperio de Guylos, se encuentran a comienzos de una nueva guerra, luego de ser descubierta una antigua tecnología que puede favorecer a ambos ejércitos.',
      id: 8,
      read: false
    },
  ];

  constructor() { }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }
}
