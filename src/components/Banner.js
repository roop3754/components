import Button from './Button';

function Banner(props) {
    return (
        <section className="banner">
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            <div className="banner-buttons">
                <Button isPrimary={true} /> 
                <Button isPrimary={false} />
            </div>
        </section>
    );
}

export default Banner;