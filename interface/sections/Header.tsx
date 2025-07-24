import { WC, WCList } from '../builder/types';
import { StringField, BooleanField, NumberField, ListField, ModelField } from '../builder';
import {  useBuilderContext } from '../builder';
import { BuilderComp } from "../builder/types";

interface Props {
    title:WC<string>,
     links: WCList<{
        title:WC<string>,
        href:WC<string>
     }>;
}

const props = {
    title:StringField({default:"BLEAK"}),
     links: ListField({
          props: {
            title:StringField({ type: 'short',default:"link" }),
            href:StringField({ type: 'short',default:"#" }),
        },
          default: [
        {title:"Home",href:"#"},
        {title:"About",href:"#about"},
        {title:"Resume",href:"#resume"},
        {title:"Portfolio",href:"#portfolio"},
        {title:"Blog",href:"#blog"},
        {title:"Contact",href:"#contact"},
        ]
     })
};



const Header = ({ title,links, ...props } : Props) => {
    const { c } = useBuilderContext();

    return (
        <header {...c(props)} id="home">
            {/* navbar */}
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark">
                {/* navbar brand or logo */}
                <a href="#" className="navbar-brand">
                    <h2 {...c(title)}>{title[0]}</h2>
                </a>
                {/* end navbar brand or logo */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo"
                    aria-controls="navbarTogglerDemo"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div id="navbarTogglerDemo" className="collapse navbar-collapse">
                    <ul {...c(links)} className="navbar-nav ml-auto">
                        {links[0].map((link, index) => (
                        <li key={index} {...c(link)} className="nav-item active">
                        <a  {...c(link.title,link)} href={link.href[0]} className="nav-link">{link.title[0]}</a>
                        </li>
                        ))}
                    </ul>
                </div>
                </nav>
            </div>
            {/* end navbar */}
            {/* home intro */}
            <div className="home-intro segments">
                <div className="container">
                <div className="intro-content box-content">
                    <div className="row justify-content-center">
                    <div className="col-md-8 col-sm-12 col-xs-12">
                        <div className="intro-caption">
                        <span>I am Bleak Peaker</span>
                        <h2>Graphic Designer</h2>
                        <button className="button">Contact Me</button>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 col-xs-12">
                        <div className="intro-image">
                        <img src="images/intro-image.png" alt="" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* end home intro */}
        </header>

    )
};




export const header : BuilderComp = {
     name: 'header',
     comp: Header,
     props
};
