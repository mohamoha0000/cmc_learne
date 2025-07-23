import { WC, WCList } from '../builder/types';
import { StringField, BooleanField, NumberField, ListField, ModelField } from '../builder';
import {  useBuilderContext } from '../builder';
import { BuilderComp } from "../builder/types";

interface Props {
     links: WCList<{
        title:WC<string>,
        href:WC<string>
     }>;
}

const props = {
     links: ListField({
          props: {
            title:StringField({ type: 'short',default:"link" }),
            href:StringField({ type: 'short',default:"#" }),
        },
          default: [
        {title:"Home",href:"/"},
        {title:"About",href:"#about"},
        {title:"Education",href:"#education"},
        {title:"Experience",href:"#experience"},
        {title:"Projects",href:"#projects"},
        {title:"Contact",href:"#contact"},
        ]
     })
};



const Header = ({ links, ...props } : Props) => {
    const { c } = useBuilderContext();

    return (
        <header {...c(props)}>
            <nav>
                <ul {...c(links)}>
                   {links[0].map((link, index) => (
                       <li key={index} {...c(link)}> <a {...c(link.title,link)} href={link.href[0]}>{link.title[0]}</a></li>
                   ))}
              </ul>
            </nav>
         </header>
    )
};




export const header : BuilderComp = {
     name: 'header',
     comp: Header,
     props
};
