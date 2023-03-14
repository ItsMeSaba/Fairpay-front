import vabako from "public/images/companies/vabako.png"
import scandiweb from "public/images/companies/scandiweb.png"
import neollet from "public/images/companies/neollet.png"
import awarmoesakartveloshi from "public/images/companies/awarmoesakartveloshi.jpg"
import unipay from "public/images/companies/unipay.png"
import gulf from "public/images/companies/gulf.png"
import bits63 from "public/images/companies/bits63.jpg"
import georgiatechtbilisi from "public/images/companies/georgiatechtbilisi.png"
import appidea from "public/images/companies/appidea.png"
import vendoo from "public/images/companies/vendoo.png"
import oodnev from "public/images/companies/oodnev.png"
import lemondo from "public/images/companies/lemondo.png"
import sakartvelosmelioracia from "public/images/companies/sakartvelosmelioracia.png"
import dexfinity from "public/images/companies/dexfinity.png"
import irao from "public/images/companies/irao.jpg"
import nlycdev from "public/images/companies/nlycdev.png"
import linton from "public/images/companies/linton.png"
import dinespace from "public/images/companies/dinespace.png"
import coachnow from "public/images/companies/coachnow.jpg"
import helixnebulacapital from "public/images/companies/helixnebulacapital.jpg"
import exadel from "public/images/companies/exadel.png"
import tazetech from "public/images/companies/tazetech.png"
import exactpro from "public/images/companies/exactpro.png"
import smartweb from "public/images/companies/smartweb.png"
import twino from "public/images/companies/twino.png"
import edutechgeo from "public/images/companies/edutechgeo.png"
import tbcBank from "public/images/companies/tbc.png"
import bog from "public/images/companies/bog.png"
import libertybank from "public/images/companies/liberty.png"
import citypay from "public/images/companies/citypay.jpg"
import crocobet from "public/images/companies/crocobet.png"
import pulsarai from "public/images/companies/pulsarai.png"
import qarva from "public/images/companies/qarva.png"
import altexsoft from "public/images/companies/altexsoft.png"
import space from "public/images/companies/space.png"
import epam from "public/images/companies/epam2.png"
import flatrock from "public/images/companies/flatrock.png"
import optioai from "public/images/companies/optioai.jpeg"
import spinom from "public/images/companies/spinom.png"
import tnet from "public/images/companies/tnet.png"
import credo from "public/images/companies/credo.png"
import sajaroreestri from "public/images/companies/sajaroreestri.jpg"
import azry from "public/images/companies/azry.png"
import omedia from "public/images/companies/omedia.png"
import redberry from "public/images/companies/redberry.png"
import sweeftdigital from "public/images/companies/sweeftdigital.png"
import websense from "public/images/companies/websense.jpg"
import noxtton from "public/images/companies/noxtton.png"
import gegidze from "public/images/companies/gegidze.jpg"
import lavapi from "public/images/companies/lavapi.jpg"
import betlive from "public/images/companies/betlive.png"
import pasha from "public/images/companies/pasha.png"
import payze from "public/images/companies/payze.png"
import theneo from "public/images/companies/theneo.jpg"
import lineate from "public/images/companies/lineate.png"
import cactussoft from "public/images/companies/cactussoft.jpg"
import arttteo from "public/images/companies/arttteo.jpg"
import binance from "public/images/companies/binance.png"
import crosscreators from "public/images/companies/crosscreators.png"
import redmed from "public/images/companies/redmed.png"
import upgaming from "public/images/companies/upgaming.png"
import velistore from "public/images/companies/velistore.png"
import unisoft from "public/images/companies/unisoft.png"

import dataart from "images/companies/dataart.jpg"

import { ValidCompanyNames } from "types"

class CompanyImageData {
    names: string[];
    image: StaticImageData;

    constructor(names: string[], image: StaticImageData) {
        this.names = names;
        this.image = image;
    }
}



export const companyImages2: Record<string, StaticImageData> = {
    ვაბაკო: vabako,
    DataArt: dataart,
    Scandiweb: scandiweb,
    Neollet: neollet,
    "აწარმოე საქართველოში": awarmoesakartveloshi,
    UniPAY: unipay,
    Gulf: gulf,
    Appidea: appidea,
    "63BITS": bits63,
    "Georgia Tech Tbilisi": georgiatechtbilisi,
    Vendoo: vendoo,
    Lemondo: lemondo,
    "საქართველოს მელიორაცია": sakartvelosmelioracia,
    Dexfinity: dexfinity,
    IRAO: irao,
    NLYC: nlycdev,
    "Linton Group": linton,
    Dinespace: dinespace,
    CoachNow: coachnow,
    "Helix Nebula Capital": helixnebulacapital,
    Exadel: exadel,
    "TAZE Technologies": tazetech,
    Exactpro: exactpro,
    "SmartWeb": smartweb,
    Twino: twino,
    "საგანმანათლებლო ტექნოლოგიები საქართველო": edutechgeo,
    "საჯარო რეესტრის ეროვნული სააგენტო": sajaroreestri,
    "TBC Bank": tbcBank,
    "Bank Of Georgia": bog,
    "Liberty Bank": libertybank,
    "CityPay": citypay,
    "Crocobet": crocobet,
    "Pulsar AI": pulsarai,
    "AltexSoft": altexsoft,
    "Qarva": qarva,
    "Space": space,
    "Epam": epam,
    "Flat Rock Technology": flatrock,
    "oodneV": oodnev,
    "Optio.Ai": optioai,
    "Spinom Digital": spinom,
    "TNET": tnet,
    "Credo Bank": credo,
    "AzRy": azry,
    "Omedia": omedia,
    "REDBERRY": redberry,
    "Sweeft Digital": sweeftdigital,
    "Websense": websense,
    "Noxtton": noxtton,
    "Gegidze • გეგიძე": gegidze,
    "LavaPi": lavapi,
    "Betlive": betlive,
    "Pasha Bank": pasha,
    "Payze": payze,
    "Theneo": theneo,
    "Lineate": lineate,
    "CactusSoft": cactussoft,
    "Arttteo": arttteo,
    "Binance": binance,
    "Cross Creators": crosscreators,
    "UpGaming": upgaming,
    "Veli.Store": velistore,
    "Unisoft": unisoft,
}



const companyImageNames = {
    vabako: new CompanyImageData(["ვაბაკო"], vabako),
    scandiweb: new CompanyImageData(["Scandiweb"], scandiweb),
    neollet: new CompanyImageData(["ნეოლეთი"], neollet),
    awarmoesakartveloshi: new CompanyImageData(["აწარმოე საქართველოში"], awarmoesakartveloshi),
    unipay: new CompanyImageData(["unipay", "უნიფეი"], unipay),
    gulf: new CompanyImageData(["Gulf Georgia"], gulf),
    appidea: new CompanyImageData(["Appidea.com", "appidea"], appidea),
    "63bits": new CompanyImageData(["63BITS"], bits63),
    georgiatechtbilisi: new CompanyImageData(["Georgia Tech Tbilisi"], georgiatechtbilisi),
    vendoo: new CompanyImageData(["Vendoo"], vendoo),
    lemondo: new CompanyImageData(["Lemondo"], lemondo),
    sakartvelosmelioracia: new CompanyImageData(["საქართველოს მელიორაცია"], sakartvelosmelioracia),
    dexfinity: new CompanyImageData(["Dexfinity"], dexfinity),
    irao: new CompanyImageData(["IRAO"], irao),
    nlycdev: new CompanyImageData(["nlyc.dev"], nlycdev),
    linton: new CompanyImageData(["Linton Group"], linton),
    dinespace: new CompanyImageData(["Dinespace"], dinespace),
    coachnow: new CompanyImageData(["CoachNow"], coachnow),
    helixnebulacapital: new CompanyImageData(["Helix Nebula Capital"], helixnebulacapital),
    exadel: new CompanyImageData(["Exadel Georgia", "Exadel"], exadel),
    tazetech: new CompanyImageData(["TAZE Technologies"], tazetech),
    exactpro: new CompanyImageData(["Exactpro"], exactpro),
    smartweb: new CompanyImageData(["smartweb"], smartweb),
    twino: new CompanyImageData(["ტვინო"], twino),
    edutechgeo: new CompanyImageData(["საგანმანათლებლო ტექნოლოგიები საქართველო"], edutechgeo),
    tbcbank: new CompanyImageData(["TBC bank"], tbcBank),
};


export default companyImageNames;