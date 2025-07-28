import { WC, WCList } from '../builder/types';
import { StringField, BooleanField, NumberField, ListField, ModelField } from '../builder';
import {  useBuilderContext } from '../builder';
import { BuilderComp } from "../builder/types";
import { MediaProps,mediaProps,Link,MediaComp } from '../comps';
interface Props {
    title:WC<string>;
     links: WCList<{
        title:WC<string>,
        href:WC<string>
     }>;
     small_title:WC<string>;
     huge_title:WC<string>;
     button:{
        title:WC<string>;
        href:WC<string>;
     };
     image:MediaProps;
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
     }),
     small_title :StringField({default:"I am Bleak Peaker"}),
     huge_title:StringField({default:"Graphic Designer"}), 
     button:{
        title:StringField({default:"Contact Me"}),
        href:StringField({default:"#"}),  
     },
     image:mediaProps(null)
};



const Header = ({ title,links,small_title,huge_title,button,image, ...props } : Props) => {
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
                        <span {...c(small_title)}>{small_title[0]}</span>
                        <h2 {...c(huge_title)}>{huge_title[0]}</h2>
                        <button className="button">
                          <Link {...c(button.title,button)} href={button.href[0]}>{button.title[0]}</Link>
                        </button>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 col-xs-12">
                        <div className="intro-image">
                            {!image.media.public_id && <img {...c(image.media)} src="images/intro-image.png" alt="" />}
                            {image.media.public_id && <MediaComp.comp {...image} width={400} />}
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
