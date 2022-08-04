import { Switch } from "react-router-dom";
import AppRoutes from "../../routes/AppRoutes";
import { Footer } from "../../views/Footer";
import NavBar from "../../views/NavbarJ";


export default function MainSite(): JSX.Element {

    return(
        <div className="justify alignitems " >
            <div>    
            <NavBar />
            
            <div className="container padding-top-md">
                <Switch>
                    <AppRoutes />
                </Switch>
            </div>

            </div>
          </div>
    )
}