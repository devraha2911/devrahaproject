import Navbar from "./Navbar/Navbar"
import Hero from "./Hero/Hero"
import WhyVermicompost from "./Why/Why"
import OurProduct from "./Product/Product"
import Footer from "./Footer/Footer"
import Location from "./Location/Location"
import Reviews from "./Review/Review"

function Home(){
    return(
        <>
         {/* <Navbar/> */}
         <Hero/>
         <WhyVermicompost/>
         <OurProduct/>
         <Reviews/>
         <Location/>
         {/* <Footer/> */}
         
        </>
    )
}

export default Home


// echo "# vermikhaad" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/sharmanishant1612/vermikhaad.git
// git push -u origin main