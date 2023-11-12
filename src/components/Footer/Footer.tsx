import { Color3 } from "@/utility/color";
import Eighty from "../Eighty/Eighty";
import Page from "../Page/Page";

export default function Footer() {
  return (
    <Page
      color={Color3.fromHex("ffffff")}
      footer
      bg="center/50px 50px repeating-linear-gradient(45deg, #80808010, #80808010 25%, transparent 25%, transparent 50%, #80808010 50%, #80808010 75%, transparent 75%, transparent 100%)"
      id="footer"
    >
      <h1>
        ABTMTR
        <wbr />
        .LINK
      </h1>
      <Eighty img="/88x31/dotart.png" alt="blocked by dotart" />
      <Eighty
        url="https://www.mozilla.org/en-US/firefox/new/"
        img="/88x31/firefox4.gif"
        alt="tested on Firefox"
      />
      <Eighty
        url="https://homestuck.com/"
        img="/88x31/sun_88x31_dual_border.png"
        alt="HOMESTUCK"
      />
      <Eighty
        url="https://dimden.dev/"
        img="https://dimden.dev/services/images/88x31.gif"
        alt="DIMDEN"
      />
      <Eighty
        url="https://park-city.club/~frix/"
        img="/88x31/pjfrix2023.png"
        alt="pjfrix"
      />
      <Eighty
        url="https://invoxiplaygames.uk/"
        img="/88x31/ipg.png"
        alt="Invoxi PlayGames"
      />
      <Eighty
        url="https://ioletsgo.gay/"
        img="/88x31/ivorybutton.gif"
        alt="ioletsgo.gay"
      />
      <Eighty
        url="https://spacy.neocities.org/"
        img="/88x31/spacy_webbutton.png"
        alt="Spacy =)"
      />
      <Eighty
        url="https://sneexy.pages.gay/"
        img="/88x31/sneexy2.gif"
        alt="Sneexy"
      />
      <Eighty
        url="https://disqordia.space/"
        img="/88x31/disqordia-approved-border.png"
        alt="Disqordia Approved"
      />
      <Eighty
        url="https://translunar.academy/"
        img="/88x31/tla.png"
        alt="TRANSLUNAR ACADEMY"
      />
      <Eighty
        url="https://moth.zone/meowcatheorange"
        img="/88x31/kkdiagt.png"
        alt="KARKATDYINGIN AGLUETRAP.COM R.I.P"
      />
      <p>
        This site hosts and serves the font{" "}
        <a href="https://www.dafont.com/renogare.font" target="_blank">
          Renogare
        </a>
        , and uses the Google Font CDN for{" "}
        <a href="https://fonts.google.com/specimen/Lexend+Deca" target="_blank">
          Lexend Deca
        </a>{" "}
        and Material Symbols Outlined.
      </p>
      <p className="hv">© MeowcaTheoRange 2023</p>
    </Page>
  );
}
