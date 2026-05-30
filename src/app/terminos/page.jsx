import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Términos y Condiciones — SAVVY Analítica Comercial",
  description: "Términos y condiciones de uso de SAVVY Analítica Comercial.",
};

export default function Terminos() {
  return (
    <>
      <Header />
      <main className="bg-white pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <h1 className="text-3xl md:text-4xl font-bold text-text-main mb-2">
            Términos y Condiciones
          </h1>
          <p className="text-sm text-text-muted mb-12">Última actualización: 30 de mayo de 2026</p>

          <div className="space-y-8 text-text-main">

            <p className="text-text-muted leading-relaxed">
              Por favor lea estos términos y condiciones cuidadosamente antes de usar nuestro Servicio.
            </p>

            <section>
              <h2 className="text-xl font-bold text-text-main mb-4">Interpretación y Definiciones</h2>
              <h3 className="text-base font-semibold text-text-main mb-2">Interpretación</h3>
              <p className="text-text-muted leading-relaxed mb-4">
                Las palabras cuya letra inicial está en mayúscula tienen significados definidos bajo las siguientes condiciones. Las siguientes definiciones tendrán el mismo significado independientemente de si aparecen en singular o en plural.
              </p>
              <h3 className="text-base font-semibold text-text-main mb-3">Definiciones</h3>
              <ul className="space-y-3 text-text-muted leading-relaxed">
                <li><span className="font-semibold text-text-main">Afiliado</span> — una entidad que controla, es controlada por, o está bajo control común con una parte, donde "control" significa la propiedad del 50% o más de las acciones o valores con derecho a voto.</li>
                <li><span className="font-semibold text-text-main">País</span> — Chile.</li>
                <li><span className="font-semibold text-text-main">Empresa</span> — se refiere a THK Tecnología SpA, Cerro El Plomo 5931 Of. 1213, Las Condes, Santiago.</li>
                <li><span className="font-semibold text-text-main">Dispositivo</span> — cualquier dispositivo que pueda acceder al Servicio, como una computadora, teléfono celular o tableta.</li>
                <li><span className="font-semibold text-text-main">Servicio</span> — se refiere al Sitio Web.</li>
                <li><span className="font-semibold text-text-main">Términos y Condiciones</span> — el presente acuerdo que regula el acceso y uso del Servicio entre usted y la Empresa.</li>
                <li><span className="font-semibold text-text-main">Servicio de Redes Sociales de Terceros</span> — cualquier servicio o contenido proporcionado por un tercero que se muestre, incluya o esté disponible a través del Servicio.</li>
                <li><span className="font-semibold text-text-main">Sitio Web</span> — Savvy Analítica, accesible desde <a href="https://savvy-analitica.cl" className="text-primary hover:underline">https://savvy-analitica.cl</a>.</li>
                <li><span className="font-semibold text-text-main">Usted</span> — el individuo o entidad que accede o usa el Servicio.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-text-main mb-4">Aceptación</h2>
              <p className="text-text-muted leading-relaxed mb-3">
                Estos son los Términos y Condiciones que rigen el uso de este Servicio y el acuerdo entre usted y la Empresa. Al acceder o usar el Servicio, usted acepta estar sujeto a estos Términos y Condiciones. Si no está de acuerdo con alguna parte de estos Términos, no podrá acceder al Servicio.
              </p>
              <p className="text-text-muted leading-relaxed mb-3">
                Usted declara ser mayor de 18 años. La Empresa no permite el uso del Servicio a menores de 18 años.
              </p>
              <p className="text-text-muted leading-relaxed">
                El acceso y uso del Servicio también está sujeto a nuestra{" "}
                <a href="/privacidad" className="text-primary hover:underline">Política de Privacidad</a>,
                que describe cómo recopilamos, usamos y divulgamos información personal.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-text-main mb-4">Enlaces a Otros Sitios Web</h2>
              <p className="text-text-muted leading-relaxed mb-3">
                Nuestro Servicio puede contener enlaces a sitios web o servicios de terceros que no son propiedad ni están controlados por la Empresa. La Empresa no tiene control sobre el contenido, las políticas de privacidad ni las prácticas de ningún sitio web de terceros y no asume ninguna responsabilidad al respecto.
              </p>
              <p className="text-text-muted leading-relaxed">
                Le recomendamos encarecidamente que lea los términos y condiciones y las políticas de privacidad de cualquier sitio web de terceros que visite.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-text-main mb-4">Terminación</h2>
              <p className="text-text-muted leading-relaxed">
                Podemos suspender o cancelar su acceso de forma inmediata, sin previo aviso ni responsabilidad, por cualquier motivo, incluyendo el incumplimiento de estos Términos y Condiciones. Al momento de la terminación, su derecho a usar el Servicio cesará de inmediato.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-text-main mb-4">Limitación de Responsabilidad</h2>
              <p className="text-text-muted leading-relaxed mb-3">
                Sin perjuicio de los daños en que pueda incurrir, la responsabilidad total de la Empresa bajo cualquier disposición de estos Términos se limitará al monto efectivamente pagado por usted a través del Servicio, o a 100 USD si no ha realizado ninguna compra.
              </p>
              <p className="text-text-muted leading-relaxed">
                En la máxima medida permitida por la ley aplicable, en ningún caso la Empresa será responsable por daños especiales, incidentales, indirectos o consecuentes derivados del uso o la imposibilidad de usar el Servicio.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-text-main mb-4">Exención de Garantías</h2>
              <p className="text-text-muted leading-relaxed">
                El Servicio se proporciona "TAL COMO ESTÁ" y "SEGÚN DISPONIBILIDAD", sin garantía de ningún tipo. En la máxima medida permitida por la ley, la Empresa renuncia expresamente a todas las garantías, ya sean expresas, implícitas, legales o de otro tipo, incluidas las garantías implícitas de comerciabilidad, idoneidad para un propósito particular y no infracción.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-text-main mb-4">Ley Aplicable</h2>
              <p className="text-text-muted leading-relaxed">
                Las leyes de Chile, excluyendo sus normas de conflicto de leyes, regirán estos Términos y el uso del Servicio.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-text-main mb-4">Resolución de Disputas</h2>
              <p className="text-text-muted leading-relaxed">
                Si tiene alguna inquietud o disputa sobre el Servicio, usted acepta intentar resolver la disputa de manera informal contactando primero a la Empresa.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-text-main mb-4">Divisibilidad y Renuncia</h2>
              <p className="text-text-muted leading-relaxed mb-3">
                <span className="font-semibold text-text-main">Divisibilidad:</span> Si alguna disposición de estos Términos se considera inaplicable o inválida, dicha disposición se modificará en la medida necesaria para hacerla aplicable, y las disposiciones restantes continuarán en plena vigencia.
              </p>
              <p className="text-text-muted leading-relaxed">
                <span className="font-semibold text-text-main">Renuncia:</span> El hecho de no ejercer un derecho o exigir el cumplimiento de una obligación bajo estos Términos no afectará la capacidad de una parte para ejercer ese derecho en cualquier momento posterior.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-text-main mb-4">Cambios a estos Términos</h2>
              <p className="text-text-muted leading-relaxed">
                Nos reservamos el derecho de modificar o reemplazar estos Términos en cualquier momento. Si la revisión es significativa, haremos esfuerzos razonables para notificarle con al menos 30 días de anticipación. Al continuar usando el Servicio después de que las revisiones entren en vigor, usted acepta estar sujeto a los nuevos términos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-text-main mb-4">Contáctenos</h2>
              <p className="text-text-muted leading-relaxed">
                Si tiene preguntas sobre estos Términos y Condiciones, puede contactarnos visitando:{" "}
                <a href="https://savvy-analitica.cl" className="text-primary hover:underline">
                  https://savvy-analitica.cl
                </a>
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
