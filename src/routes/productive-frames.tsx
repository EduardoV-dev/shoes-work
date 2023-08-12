import ProductiveImg from "../assets/productive-frame.png";

export const ProductiveFrames = (): JSX.Element => (
    <>
        <h1>Cadena productiva</h1>;
        <img
            className="mt-2 img-fluid w-100"
            alt="Cadena productive"
            src={ProductiveImg}
        />
    </>
);
