import {
  ListField,
  ModelField,
  StringField,
  useBuilderContext,
} from "../builder";
import { BuilderComp, BuilderMedia, WC, WCList } from "../builder/types";
import { MediaComp } from "../comps";
import { resizeMedia } from "../helpers";

interface Portfolio {
  title: string;
  key: string;
  categorie: string;
  image: BuilderMedia;
}

interface Props {
  title: WC<string>;
  portfolios: WCList<Portfolio>;
}

const props = {
  title: StringField({ default: "my port folio" }),
  portfolios: ListField({
    props: ModelField({
      model: "portfolio",
      query: "{title image { public_id width height } key categorie}",
    }),
    default: new Array(3).fill({
      title: "My portfolio",
      categorie: "Flowers",
      key: "Graphic design",
    }) as Portfolio[],
  }),
};

const Portfolio = ({ portfolios, title, ...props }: Props) => {
  const { c } = useBuilderContext();

  return (
    <div {...c(props)} id="portfolio" className="portfolio segments">
      <div className="container">
        <div className="box-content">
          <div className="section-title">
            <h3 {...c(title)}>{title[0]}</h3>
          </div>
          <div className="portfolio-filter-menu">
            <ul>
              <li data-filter="all" className="active">
                <span>See All</span>
              </li>
              <li data-filter={1}>
                <span>House Plant</span>
              </li>
              <li data-filter={2}>
                <span>Flowers</span>
              </li>
              <li data-filter={3}>
                <span>Photography</span>
              </li>
            </ul>
          </div>
          <div {...c(portfolios)} className="row no-gutters filtr-container">
            {portfolios[0].map((portfolio, index) => (
              <div {...c(portfolio)} key={index}
                className="col-md-4 col-sm-12 col-xs-12 filtr-item"
                data-category={3}
              >
                <div className="content-image">
                  <a href={portfolio.image ? resizeMedia(portfolio.image,1200):"images/portfolio1.jpg"} className="portfolio-popup">
                    { !portfolio.image && <img src="images/portfolio1.jpg" alt="" />}
                    { portfolio.image && <MediaComp.comp media={portfolio.image} width={500} />}
                    <div className="image-overlay" />
                    <div className="portfolio-caption">
                      <div className="title" style={{display:"block"}}>
                        <h4>{portfolio.title}</h4>
                      </div>
                      <div className="subtitle">
                        <span>{portfolio.key}</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const PortfolioComp : BuilderComp ={
    name:"Portfolio",
    comp: Portfolio,
    props
} 
