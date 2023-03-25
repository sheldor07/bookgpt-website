import Header from "../components/Header"
import Footer from "../components/Footer"
export default function Templates(){
    return(
        <div>
        <Header/>
        <div className="text-center lg:mt-24 text-5xl font-extrabold text-transparent lg:text-7xl bg-clip-text bg-gradient-to-r from-gradient-blue to-gradient-purple">get your book here</div>
        <div className="grid grid-cols-1 lg:grid-cols-3">
            
        </div>
        <Footer/>
        <style global jsx>
            {`
            body{
                background-color: black;
            }
            `}
        </style>
        </div>
    )
}