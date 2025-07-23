import { WC, WCList } from '../builder/types';
import { StringField, BooleanField, NumberField, ListField, ModelField } from '../builder';
import {  useBuilderContext } from '../builder';
import { BuilderComp } from "../builder/types";

interface Props {
     title: WC<string>;
     items: WCList<string>;
}

const props = {
     title: StringField({ type: 'short', default: 'Default Title' }),
     items: ListField({
          props: StringField({ type: 'short' }),
          default: ['Item 1', 'Item 2']
     })
};



const MyComponent = ({ title, items, ...props } : Props) => {
    const { c } = useBuilderContext();

    return (
        <div {...c(props)}>
              <h1 {...c(title)}>{title[0]}</h1>
              <ul {...c(items)}>
                   {items[0].map((item, index) => (
                       <li key={index} {...c(item)}>{item[0]}</li>
                   ))}
              </ul>
         </div>
    )
};



export const componentInfo : BuilderComp = {
     name: 'My Component',
     comp: MyComponent,
     props
};
