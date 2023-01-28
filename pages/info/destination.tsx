

export default function Destionation() {
    return (
        <div className="container" style={{ padding: "3rem 3rem", fontSize: "1rem" }}>
            <h1>რა არის Fairpayის მიზანი?</h1>

            <li>დაეხმაროს დეველოპერებს საუკეთესო სამუშაო გარემოს შერჩევაში</li>
            
            <p>გამოავლინოს საუკეთესო კომპანიები</p>

            <p onClick={() => { throw new Error("custom error for sentry") }}>გამოავლინოს პრობლემური კომპანიები და უბიძგოს გამოსწორებისკენ</p>

            <style jsx>{`
                .container * {
                    padding: 1rem 0;
                    text-align: center;
                }
            `}</style>
        </div>

    )
}