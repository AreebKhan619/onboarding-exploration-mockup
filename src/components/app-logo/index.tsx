import { AppLogo as Logo } from "../../assets/images";
import { AppLogoContainer } from "./styled";

const AppLogo = () => {
  return (
    <AppLogoContainer>
      <img className="logo" src={Logo} alt="app logo" />
    </AppLogoContainer>
  );
};


export default AppLogo