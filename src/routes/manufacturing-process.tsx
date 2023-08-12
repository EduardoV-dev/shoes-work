import Process1Img from "../assets/process-1.png";
import Process2Img from "../assets/process-2.png";
import Process3Img from "../assets/process-3.png";
import Process4Img from "../assets/process-4.png";
import Process5Img from "../assets/process-5.png";
import Process6Img from "../assets/process-6.png";
import Process7Img from "../assets/process-7.png";
import Process8Img from "../assets/process-8.png";

export const ManufacturingProcess = (): JSX.Element => (
    <>
        <h1>Proceso de Manufactura</h1>

        <ul className="mt-4">
            <li className="h4">
                <strong>Diseño y patronaje: </strong>
                El proceso comienza con el diseño del calzado. Los diseñadores crean
                bocetos y diseños técnicos que servirán como guía para la producción.
                Luego, se crea un patrón, que es una plantilla en papel o material
                similar que representa cada pieza del calzado.
                <img
                    alt="Proceso 1"
                    className="d-block mt-3 img-fluid w-25 rounded"
                    src={Process1Img}
                />
            </li>

            <li className="h4 mt-5">
                <strong>Selección de materiales: </strong>
                Se eligen los materiales necesarios para fabricar el calzado. Estos
                materiales pueden incluir{" "}
                <strong>
                    {" "}
                    cuero, tela, sintéticos, suelas de goma, entresuelas, forros, hilos{" "}
                </strong>{" "}
                y otros componentes específicos según el tipo de calzado que se esté
                fabricando.
                <img
                    alt="Proceso 2"
                    className="d-block mt-3 img-fluid w-25 rounded"
                    src={Process2Img}
                />
            </li>

            <li className="h4 mt-5">
                <strong>Corte de materiales: </strong>
                Los patrones se utilizan para cortar las diferentes piezas del calzado
                de los materiales seleccionados. En este paso, se pueden utilizar
                máquinas de corte o hacerlo de forma manual.
                <div className="d-flex flex-wrap gap-4">
                    <img
                        alt="Proceso 3"
                        className="d-block mt-3 img-fluid w-25 rounded"
                        src={Process3Img}
                    />
                    <img
                        alt="Proceso 4"
                        className="d-block mt-3 img-fluid w-25 rounded"
                        src={Process4Img}
                    />
                </div>
            </li>

            <li className="h4 mt-5">
                <strong>Preparación de componentes: </strong>
                Antes de ensamblar el calzado, es posible que algunas piezas necesitan
                ser preparadas o procesadas. Por ejemplo, las suelas pueden ser
                moldeadas o las piezas de cuero pueden ser teñidas o tratadas para
                mejorar su calidad.
                <img
                    alt="Proceso 5"
                    className="d-block mt-3 img-fluid w-25 rounded"
                    src={Process5Img}
                />
            </li>

            <li className="h4 mt-5">
                <strong>Ensamblado: </strong>
                En esta etapa, las diferentes piezas del calzado se unen utilizando
                técnicas de costura, pegado, inyección, o una combinación de métodos. El
                montaje puede realizarse manualmente o con la ayuda de máquinas
                especializadas. Ajustes y acabado: Después de ensamblar las piezas, el
                calzado puede pasar por ajustes finales para asegurar que el ajuste y la
                comodidad sean adecuados. También se realiza el acabado del calzado, que
                incluye limpieza, pulido y posibles tratamientos de superficie.
                <img
                    alt="Proceso 6"
                    className="d-block mt-3 img-fluid w-25 rounded"
                    src={Process6Img}
                />
            </li>

            <li className="h4 mt-5">
                <strong>Control de Calidad: </strong>
                En esta etapa, el calzado se somete a una rigurosa inspección para
                garantizar que cumple con los estándares de calidad establecidos. Se
                verifican detalles como costuras, pegado, simetría y acabados.
                <img
                    alt="Proceso 7"
                    className="d-block mt-3 img-fluid w-25 rounded"
                    src={Process7Img}
                />
            </li>

            <li className="h4 mt-5">
                <strong>Empaque y distribución: </strong>
                Una vez que el calzado ha pasado las pruebas de calidad, se procede a
                empaquetarlo para su distribución y comercialización. Dependiendo del
                destino, los calzados se embalan en cajas adecuadas y se envían a
                tiendas minoristas o almacenes para su venta.
                <img
                    alt="Proceso 8"
                    className="d-block mt-3 img-fluid w-25 rounded"
                    src={Process8Img}
                />
            </li>
        </ul>
    </>
);
