

export default function DataUsage() {
    return (
        <div className="container" style={{ textAlign: "center", padding: "2rem 3rem", fontSize: "1rem" }}>
            <br />
            <br />

            <h2>მომხმარებლის ინფორმაცია</h2>

            <p>მომხმარებლის მაინდენტიფიცირებელი ინფორმაცია არ ინახება.</p>
{/* 
            <h2>გაფრთხილება</h2>

            <p>ნებისმიერი მოთხოვნა წაშლასთან დაკავშირებით არ შეინახება კონფიდენციალურად და გასაჯაროვდება როგორც მომხმარებლებისთვის ინფორმაციის დამალვა, რაც საბოლოოდ ცუდად აისახება კომპანიის იმიჯზე Fairpayის კრიტერიუმების გათვალისწინებით.</p> */}


            <br />
            <br />
            <h2>წაშლის მოთხოვნა კომპანიის მოთხოვნისამებრ</h2>

            <p>კომპანიის ინფორმაციის წაშლის მოსათხოვნად გამოიყენეთ ბოლოსართში (footerში) მოთავსებული ლინკი</p>

            <br />
            <br />
            {/* <h2>რა ხდება როცა ვთვლით რომ მცდარი ინფორმაცია დევს?</h2>

            <p>შეფასების (Reviewების) შემთხვევაში მომხმარებლებს შესაძლებლობა აქვს სხვის შეფასებაზე გამოხატოს დადებითი (Like) ან უარყოფითი (Dislike) რექცია. სორტირება ხდება დადებითი და უარტოფითი რეაქციების სხვაობით, ანუ შეფასება რომელსაც აქვს მეტად უარყოფითი გამოხმაურება აღმოჩნდება ქვემოთ, ხოლო დადებითი გამოხმაურების მქონე ზემოთ. საკმარისი უარყოფითი გამოხმაურების მოგროვების შემთხვევაში შეფასება ავტომატურად წაიშლება.</p>

            <p>ხელფასების შემთხვევაში თუ საკმარისი რეპორტები მოგროვდება და ამავდროულად იქნება საშუალო ანაზღაურებიდან ძალზედ აცდენილი ხელფასი გადაიხედება და განიხილება მისი ამოშლა.</p>
 */}

            <h2>ინფორმაციის სიზუსტე</h2>

            <p>ინფორმაციის ვალიდურობის კონტროლის სირთულეების გამო, Fairpay არ იღებს პასუხისმგებლობას ინფორმაციის 100%-იანი სიზუსტეზე. Fairpay მიიღებს ზომებს რათა აშკარა უზუსტობები აღმოფხვრას, მაგრამ საბოლოოდ ინფორმაციის სიზუსტე დაფუძნებული უნდა იყოს მომხმარებლების გულწრფელობაზე.</p>

            <style jsx>{`
                .container * {
                    padding: 1rem 0
                }
            `}</style>
        </div>
    )
}