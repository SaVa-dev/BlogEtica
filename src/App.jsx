import { useState } from 'react';

// Componente principal del blog
export default function Blog() {
  const [activeSubtema, setActiveSubtema] = useState(1);
  
  // Datos de los subtemas
  const subtemas = [
    {
      id: 1,
      title: "La Carta de la Tierra",
      content: (
        <>
          <p className="mb-4">La Carta de la Tierra es un documento que declara principios éticos fundamentales para la construcción de una sociedad global justa, sostenible y pacífica en el siglo XXI. Fue lanzada en el año 2000, después de un proceso de desarrollo que duró 5 años desde 1995.</p>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Los 4 pilares fundamentales:</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Respeto y cuidado de la comunidad de la vida:</strong> Fomenta el respeto por la vida y su diversidad.</li>
            <li><strong>Integridad ecológica:</strong> Protege el medio ambiente y su ecología.</li>
            <li><strong>Justicia social y económica:</strong> Trabaja para eliminar la pobreza y sus problemas asociados.</li>
            <li><strong>Democracia, no violencia y paz:</strong> Promueve una cultura de mayor paz y armonía.</li>
          </ul>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="overflow-hidden rounded-lg shadow-md">
              <img src="/images/carta-tierra/cartatierra.jpg" alt="Carta de la Tierra" className="w-full h-48 object-cover" />
              <p className="text-sm text-center p-2 bg-gray-100">La Carta de la Tierra, documento firmado en 2000</p>
            </div>
            <div className="overflow-hidden rounded-lg shadow-md">
              <img src="/images/carta-tierra/pilares.png" alt="Los 4 pilares de la Carta de la Tierra" className="w-full h-48 object-cover" />
              <p className="text-sm text-center p-2 bg-gray-100">Los 4 pilares fundamentales</p>
            </div>
            <div className="overflow-hidden rounded-lg shadow-md">
              <img src="/images/carta-tierra/aplicaciones.jpg" alt="Aplicaciones de la Carta de la Tierra" className="w-full h-48 object-cover" />
              <p className="text-sm text-center p-2 bg-gray-100">Educación ambiental basada en la Carta</p>
            </div>
          </div>
          
          <p className="mb-4">Esta carta ha servido como base para educar ambientalmente a las personas, generar empresas sostenibles que sean pro-sociedad y pro-vida, y para perfeccionar las políticas públicas en beneficio de la humanidad y el planeta.</p>
        </>
      )
    },
    {
      id: 2,
      title: "Agencia Ciudadana",
      content: (
        <>
          <p className="mb-4">La agencia ciudadana es un elemento fundamental para fortalecer la democracia. Cuando las personas participan activamente en la vida pública o realizan actividades de trabajo público, pueden resolver problemas colectivos y mejorar sus comunidades.</p>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Ejemplos de participación ciudadana:</h3>
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <ul className="space-y-4">
              <li>
                <strong>Presupuestos participativos en Xàtiva, España:</strong> Los ciudadanos votaron democráticamente para decidir qué tipos de proyectos debían mejorarse, desde instituciones hasta infraestructuras públicas.
              </li>
              <li>
                <strong>Feria de Asociaciones en Linares, España:</strong> Organizaciones locales presentaron propuestas para mejorar la comunidad mediante el trabajo público y asignando acciones concretas a los ciudadanos.
              </li>
              <li>
                <strong>Eventos sobre democracia en Villena, España:</strong> Se organizaron mesas redondas para analizar y fortalecer la democracia, buscando dar más voz y poder de decisión a los ciudadanos.
              </li>
            </ul>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="overflow-hidden rounded-lg shadow-md">
              <img src="/images/agencia-ciudadana/ciudadanos1.jpg" alt="Presupuestos participativos" className="w-full h-48 object-cover" />
              <p className="text-sm text-center p-2 bg-gray-100">Ciudadanos votando en presupuestos participativos</p>
            </div>
            <div className="overflow-hidden rounded-lg shadow-md">
              <img src="/images/agencia-ciudadana/ciudadanos2.jpeg" alt="Feria de asociaciones" className="w-full h-48 object-cover" />
              <p className="text-sm text-center p-2 bg-gray-100">Feria de Asociaciones ciudadanas</p>
            </div>
            <div className="overflow-hidden rounded-lg shadow-md">
              <img src="/images/agencia-ciudadana/ciudadanos3.JPG" alt="Mesa redonda sobre democracia" className="w-full h-48 object-cover" />
              <p className="text-sm text-center p-2 bg-gray-100">Mesa redonda sobre democracia participativa</p>
            </div>
          </div>
          
          <p className="mb-4">La participación ciudadana no solo fortalece la democracia, sino que también crea un sentido de pertenencia y responsabilidad compartida en la construcción de sociedades más justas y equitativas.</p>
        </>
      )
    },
    {
      id: 3,
      title: "Formas de Exclusión Social",
      content: (
        <>
          <p className="mb-4">En muchas sociedades, lamentablemente existen diversas formas de excluir o marginar a ciertos grupos sociales. Esta marginación puede deberse a motivos étnicos, religiosos o culturales, creando divisiones profundas en el tejido social.</p>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Diferentes formas de marginación:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-bold">Eliminación</h4>
              <p>La aniquilación física o cultural de un grupo social.</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-bold">Asimilación</h4>
              <p>Forzar a un grupo a adoptar la cultura dominante, perdiendo su identidad.</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold">Dominación</h4>
              <p>Mantener a un grupo en posición subordinada, limitando sus derechos.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold">Abandono</h4>
              <p>Dejar a un grupo sin recursos o apoyo necesario para su desarrollo.</p>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Ejemplos históricos:</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>El conflicto en Pakistán, donde por motivos teológicos se han desplazado y asesinado a personas.</li>
            <li>Durante la conquista española de México, los nativos fueron forzados a asimilar la lengua y creencias españolas.</li>
            <li>Las sanciones internacionales contra Rusia durante la guerra con Ucrania, limitando recursos esenciales.</li>
            <li>En el Porfiriato en México, comunidades indígenas fueron forzadas a abandonar sus tierras para la construcción del ferrocarril.</li>
          </ul>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="overflow-hidden rounded-lg shadow-md">
              <img src="/images/exclusion-social/pakistan.jpg" alt="Conflicto Pakistán" className="w-full h-48 object-cover" />
              <p className="text-sm text-center p-2 bg-gray-100">Conflicto en Pakistán</p>
            </div>
            <div className="overflow-hidden rounded-lg shadow-md">
              <img src="/images/exclusion-social/conquista.jpg" alt="Conquista española" className="w-full h-48 object-cover" />
              <p className="text-sm text-center p-2 bg-gray-100">Asimilación durante la conquista española</p>
            </div>
            <div className="overflow-hidden rounded-lg shadow-md">
              <img src="/images/exclusion-social/comunidadindigena.jpg" alt="Desplazamiento indígena" className="w-full h-48 object-cover" />
              <p className="text-sm text-center p-2 bg-gray-100">Desplazamiento de comunidades indígenas</p>
            </div>
          </div>
        </>
      )
    },
    {
      id: 4,
      title: "El Valor de la Empatía",
      content: (
        <>
          <p className="mb-4">La empatía va más allá de simplemente comprender intelectualmente a las personas. Implica sentir y compartir las emociones de otra persona para establecer una conexión mutua y sincera. En nuestro mundo globalizado, es vital entender la cultura y costumbres de los demás para evitar malentendidos y desarrollar una empatía más profunda.</p>
          
          <div className="bg-purple-50 p-4 rounded-lg my-6">
            <p className="italic text-lg">"La empatía, contrario a lo que muchas personas piensan, es un valor que se desarrolla y tiene una fuerte influencia de los padres. Debe fomentarse desde una edad temprana para lograr un desarrollo emocional adecuado."</p>
          </div>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Ejemplos de empatía en acción:</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Escucha activa:</strong> Cuando alguien enfrenta un problema, es necesario no solo hablar y aconsejar, sino también validar sus emociones mediante la empatía y comprender su perspectiva.</li>
            <li><strong>Comprensión intercultural:</strong> Al convivir con personas de otras culturas, es importante entender que pueden realizar acciones que para nosotros resultan extrañas, pero que tienen sentido en su contexto social.</li>
            <li><strong>Conexión familiar:</strong> Un padre que comparte emocionalmente con su hijo permite que éste se sienta escuchado y aprenda a hacer lo mismo con otras personas en el futuro.</li>
          </ul>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="overflow-hidden rounded-lg shadow-md">
              <img src="/images/empatia/escuchaactiva.webp" alt="Escucha activa" className="w-full h-48 object-cover" />
              <p className="text-sm text-center p-2 bg-gray-100">Escucha activa y validación emocional</p>
            </div>
            <div className="overflow-hidden rounded-lg shadow-md">
              <img src="/images/empatia/dialogo.jpg" alt="Comprensión intercultural" className="w-full h-48 object-cover" />
              <p className="text-sm text-center p-2 bg-gray-100">Diálogo intercultural y empatía</p>
            </div>
            <div className="overflow-hidden rounded-lg shadow-md">
              <img src="/images/empatia/padreehijo.webp" alt="Conexión familiar" className="w-full h-48 object-cover" />
              <p className="text-sm text-center p-2 bg-gray-100">Conexión emocional entre padres e hijos</p>
            </div>
          </div>
          
          <p className="mb-4">La empatía no solo mejora nuestras relaciones interpersonales, sino que también contribuye a crear sociedades más inclusivas y comprensivas, donde las diferencias son valoradas en lugar de temidas.</p>
        </>
      )
    },
    {
      id: 5,
      title: "Imperativos Éticos: De Kant a Hans Jonas",
      content: (
        <>
          <p className="mb-4">Este tema analiza la evolución de los imperativos éticos desde Kant hasta Hans Jonas, y cómo ambos enfoques destacan la importancia del deber moral, pero en contextos distintos.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">Kant: Imperativo Categórico</h3>
              <p>Propone que debemos actuar según principios universales aplicables a todos, sin considerar beneficios personales. Lo correcto debe hacerse simplemente porque es correcto, no por miedo o conveniencia.</p>
              <p className="italic mt-4">"Obra solo según aquella máxima por la cual puedas querer que al mismo tiempo se convierta en ley universal."</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">Hans Jonas: Imperativo de Responsabilidad</h3>
              <p>Amplía el concepto en un mundo moderno marcado por la crisis ambiental. Propone actuar de tal forma que nuestras decisiones aseguren la permanencia de una vida humana auténtica sobre la Tierra.</p>
              <p className="italic mt-4">"Obra de tal manera que los efectos de tu acción sean compatibles con la permanencia de una vida humana auténtica."</p>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Ejemplos de aplicación:</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Visión de Kant:</strong> Una persona devuelve una cartera con dinero porque sabe que es lo correcto, no porque espera una recompensa o teme ser atrapada.</li>
            <li><strong>Visión de Jonas:</strong> Alguien decide reducir su uso de plásticos y consumir productos locales, pensando en el impacto ecológico y en el mundo que heredarán las futuras generaciones.</li>
            <li><strong>Responsabilidad colectiva:</strong> Una comunidad implementa un programa de reciclaje y educación ambiental en escuelas, promoviendo hábitos sostenibles desde la infancia.</li>
            <li><strong>Responsabilidad individual:</strong> Una persona se informa sobre su huella de carbono y comienza a usar bicicleta para ir al trabajo, como una forma de actuar éticamente hacia el planeta.</li>
          </ul>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="overflow-hidden rounded-lg shadow-md">
              <img src="/images/imperativos-eticos/Imperativo-categorico.jpg" alt="Imperativo categórico de Kant" className="w-full h-48 object-cover" />
              <p className="text-sm text-center p-2 bg-gray-100">Representación del imperativo categórico</p>
            </div>
            <div className="overflow-hidden rounded-lg shadow-md">
              <img src="/images/imperativos-eticos/hans.jpeg" alt="Hans Jonas y la ética de la responsabilidad" className="w-full h-48 object-cover" />
              <p className="text-sm text-center p-2 bg-gray-100">Hans Jonas y la ética de la responsabilidad</p>
            </div>
            <div className="overflow-hidden rounded-lg shadow-md">
              <img src="/images/imperativos-eticos/terceraimagen.webp" alt="Acciones sostenibles" className="w-full h-48 object-cover" />
              <p className="text-sm text-center p-2 bg-gray-100">Acciones sostenibles como aplicación del imperativo ético</p>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg my-6">
            <p>Este enfoque moderno hace un llamado a la conciencia ambiental, señalando la necesidad de reducir el daño ecológico que causamos, como el aumento de la huella de carbono o el calentamiento global, y asumiendo la responsabilidad no solo por nuestro presente sino por el futuro de la humanidad.</p>
          </div>
        </>
      )
    }
  ];
  
  // Componente para la cabecera
  const Header = () => (
    <header className="bg-gradient-to-r from-blue-700 to-green-700 py-12 text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center">Ética, Sostenibilidad y Ciudadanía</h1>
        <p className="text-xl text-center mt-2">Reflexiones para construir un mundo más justo y sostenible</p>
      </div>
    </header>
  );
  
  // Componente para la navegación
  const Navigation = () => (
    <nav className="bg-gray-800 text-white sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap">
          {subtemas.map(subtema => (
            <li key={subtema.id} className="mr-2">
              <button 
                onClick={() => setActiveSubtema(subtema.id)}
                className={`py-3 px-4 transition-colors ${activeSubtema === subtema.id ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
              >
                {subtema.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
  
  // Componente para el contenido principal
  const Content = () => {
    const currentSubtema = subtemas.find(s => s.id === activeSubtema);
    
    return (
      <main className="container mx-auto px-4 py-8">
        <article>
          <h2 className="text-3xl font-bold mb-6">{currentSubtema.title}</h2>
          {currentSubtema.content}
        </article>
      </main>
    );
  };
  
  // Componente para el pie de página
  const Footer = () => (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="mb-2">© 2025 Blog de Ética, Sostenibilidad y Ciudadanía</p>
          <p className="text-sm">Basado en material de "Evidencia3.docx"</p>
        </div>
      </div>
    </footer>
  );
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />
      <Content />
      <Footer />
    </div>
  );
}