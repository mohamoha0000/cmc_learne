import { WC, WCList } from '../builder/types';
import { StringField, ModelField } from '../builder';
import { useBuilderContext } from '../builder';
import { BuilderComp } from "../builder/types";
import { MediaProps,mediaProps,Link,MediaComp } from '../comps';
import { image } from '@cloudinary/url-gen/qualifiers/source';
import { resizeMedia } from '../helpers';
interface Props {
    section_title: WC<string>;
    main_title: WC<string>;
    description: WC<string>;
    image:MediaProps;
}

const props = {
    section_title: StringField({ default: "About Me" }),
    main_title: StringField({ default: "I am a Graphic Designer" }),
    description: StringField({
        type:"styled",
        default: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloremque ratione perferendis possimus voluptatibus distinctio autem expedita qui unde modi impedit officia illum praesentium amet, vero quos natus veritatis totam!"
    }),
    image:mediaProps(null)
};

const About = ({ image,section_title, main_title, description, ...props }: Props) => {
    const { c } = useBuilderContext();

    return (
        <div {...c(props)} id="about" className="about segments">
            <div className="container">
                <div className="box-content">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 col-xs-12">
                            <div className="content-left">
                                <div className="section-title section-title-left">
                                    <h3 {...c(section_title)}>{section_title[0]}</h3>
                                </div>
                                <div className="content">
                                    <h2 {...c(main_title)}>{main_title[0]}</h2>
                                    <p {...c(description)} dangerouslySetInnerHTML={{__html:description[0]}}></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 col-xs-12">
                            <div {...c(image.media)} style={{backgroundImage:image.media.public_id?`url(${resizeMedia(image.media,600)})`:undefined}} className="content-right"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const about: BuilderComp = {
    name: 'about',
    comp: About,
    props
};