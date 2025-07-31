import { tif } from "@cloudinary/url-gen/qualifiers/format";
import {
  ListField,
  NumberField,
  StringField,
  useBuilderContext,
} from "../builder";
import { BuilderComp, WC, WCList } from "../builder/types";
import { map } from "lodash";
import { useEffect, useRef } from "react";
interface Slide1 {
  small_title: WC<string>;
  huge_title: WC<string>;
  items: WCList<{
    title: WC<string>;
    description: WC<string>;
  }>;
}

interface Slide2 {
  small_title: WC<string>;
  huge_title: WC<string>;
  items: WCList<{
    title: WC<string>;
    skills: WCList<{
      title: WC<string>;
      progress: WC<number>;
    }>;
  }>;
}

interface Props {
  title: WC<string>;
  slide1: Slide1;
  slide2: Slide1;
  slide3: Slide2;
}

const slide1Props = {
  small_title: StringField({ default: "Experience" }),
  huge_title: StringField({
    type: "styled",
    default: "More than 6 years experience as a Designer",
  }),
  items: ListField({
    props: {
      title: StringField({ default: "new item" }),
      description: StringField({ default: "new description" }),
    },
    default: [
      {
        title: "Pentagon Design",
        description: "Graphic Designer (2017 - 2019)",
      },
      {
        title: "Pentagon Design",
        description: "Graphic Designer (2017 - 2019)",
      },
      {
        title: "Pentagon Design",
        description: "Graphic Designer (2017 - 2019)",
      },
    ],
  }),
};

const slide2Props = {
  small_title: StringField({ default: "Skill" }),
  huge_title: StringField({
    type: "styled",
    default: "With good Personal and Professional Skills",
  }),
  items: ListField({
    props: {
      title: StringField({ default: "new group" }),
      skills: ListField({
        props: {
          title: StringField({ default: "new skill" }),
          progress: NumberField({ type: "float", default: 100 }),
        },
        default: [
          { title: "Creativity", progress: 85 },
          { title: "Innovation", progress: 80 },
          { title: "Communication", progress: 90 },
        ],
      }),
    },
    default: [{ title: "Personal Skill" }, { title: "Professional Skill" }],
  }),
};
const props = {
  title: StringField({ default: "My Resume" }),
  slide1: slide1Props,
  slide2: slide1Props,
  slide3: slide2Props,
};

const Resume = ({ title, slide1, slide2, slide3, ...props }: Props) => {
  const { c } = useBuilderContext();
  const ref = useRef<HTMLElement>();
  useEffect(() => {
    if (ref.current instanceof HTMLElement) {
      $(ref.current).owlCarousel({
        items: 1,
        margin: 10,
      });
    }
  }, [ref]);
  return (
    <div id="resume" className="resume segments">
      <div className="container">
        <div className="box-content">
          <div className="section-title">
            <h3 {...c(title)}>{title[0]}</h3>
          </div>
          <div ref={ref as any} className="owl-carousel owl-theme">
            {[slide1, slide2].map((slide, index) => (
              <div key={index} {...c(slide)} className="content">
                {/* my experience */}
                <div className="row ">
                  <div className="col-md-6 col-sm-12 col-xs-12">
                    <div className="content-left">
                      <div className="title-resume">
                        <h3 {...c(slide.small_title)}>
                          {slide.small_title[0]}
                        </h3>
                        <h2
                          {...c(slide.huge_title)}
                          dangerouslySetInnerHTML={{
                            __html: slide.huge_title[0],
                          }}
                        ></h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12 col-xs-12">
                    <div className="content-right">
                      <ul className="timeline">
                        {slide.items[0].map((item, index) => (
                          <li key={index} {...c(item)}>
                            <h4 {...c(item.title)}>{item.title[0]}</h4>
                            <span {...c(item.description)}>
                              {item.description[0]}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* end my experience */}
              </div>
            ))}
            <div {...c(slide3)} className="content">
              {/* my skill */}
              <div className="my-skill">
                <div className="row ">
                  <div className="col-md-6 col-sm-12 col-xs-12">
                    <div className="content-left">
                      <div className="title-resume">
                        <h3 {...c(slide3.small_title)}>
                          {slide3.small_title[0]}
                        </h3>
                        <h2
                          {...c(slide3.huge_title)}
                          dangerouslySetInnerHTML={{
                            __html: slide3.huge_title[0],
                          }}
                        ></h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12 col-xs-12">
                    <div className="content-right">
                      <div
                        {...c(slide3.items)}
                        id="accordionSkill"
                        className="accordion"
                      >
                        {slide3.items[0].map((item, index) => (
                          <div key={index} {...c(item)} className="card">
                            <div id="personalSkill" className="card-header">
                              <h2>
                                <button
                                  {...c(item.title)}
                                  className="btn btn-link"
                                  type="button"
                                  data-toggle="collapse"
                                  data-target="#collapse1"
                                  aria-expanded="true"
                                  aria-controls="collapse1"
                                >
                                  <i className="fas fa-circle" />
                                  {item.title[0]}
                                </button>
                              </h2>
                            </div>
                            <div
                              id="collapse1"
                              className="collapse collapse-show"
                              aria-labelledby="personalSkill"
                              data-parent="#accordionSkill"
                            >
                              <div className="card-body">
                                <ul className="personalSkill">
                                  {item.skills[0].map((skill, index) => (
                                    <li key={index} {...c(skill)}>
                                      <div className="skill-title">
                                        <span {...c(skill.title)}>
                                          {skill.title[0]}
                                        </span>
                                      </div>
                                      <div className="progress">
                                        <div
                                          className="progress-bar"
                                          role="progressbar"
                                          aria-valuenow={skill.progress[0]}
                                          aria-valuemin={0}
                                          aria-valuemax={100}
                                          style={{
                                            width: skill.progress[0] + "%",
                                          }}
                                        />
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end my skill */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const resume: BuilderComp = {
  name: "resume",
  comp: Resume,
  props,
};
