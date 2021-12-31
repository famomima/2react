const Boton =({buttonText='Buscar'}) =>{

    console.log('Button');
    return (
        <>
            <button >{buttonText}</button>
            <button className="btn waves-effect waves-light btn-small #f44336 red">{buttonText}</button>
        </>
    )
}
export default Boton