import { tif } from "@cloudinary/url-gen/qualifiers/format";
import { ListField, NumberField, StringField, useBuilderContext } from "../builder";
import { BuilderComp, WC, WCList } from "../builder/types";

interface Slide1{
    small_title:WC<string>;
    huge_title:WC<string>;
    items:WCList<{
        title:WC<string>;
        description:WC<string>;
    }>
}

interface Slide2{
    small_title:WC<string>;
    huge_title:WC<string>;
    items:WCList<{
        title:WC<string>;
        skills:WCList<{
            title:WC<string>;
            progress:WC<number>
        }>
    }>
}

interface Props{
    title:WC<string>;
    slide1: Slide1;
    slide2: Slide1;
    slide3: Slide2;
}

const slide1Props={
    
    small_title:StringField({default:"Experience<"}),
    huge_title:StringField({type:"styled",default:"More than 6 years experience as a Designer"}),
    items:ListField({
        props:{
            title:StringField({default:"new item"}),
            description:StringField({default:"new description"})
        },
        default:[
            {title:"Pentagon Design",description:"Graphic Designer (2017 - 2019)"},
            {title:"Pentagon Design",description:"Graphic Designer (2017 - 2019)"},
            {title:"Pentagon Design",description:"Graphic Designer (2017 - 2019)"},
        ]
    })
}

const slide2Props={
    
    small_title:StringField({default:"Skill"}),
    huge_title:StringField({type:"styled",default:"With good Personal and Professional Skills"}),
    items:ListField({
        props:{
            title:StringField({default:"new group"}),
            skills:ListField({
                props:{
                    title:StringField({default:"new skill"}),
                    progress:NumberField({type:"float",default:100})
                },
                default:[
                    {title:"Creativity",progress:85},
                    {title:"Innovation",progress:80},
                    {title:"Communication",progress:90},
                ]
            })
        },
        default:[
            {title:"Personal Skill"},
            {title:"Professional Skill"}
        ]
    })
}
const props = {
    title:StringField({default:"My Resume"}),
    slide1: slide1Props,
    slide2: slide1Props,
    slide3: slide2Props
}

const Resume = ({title,slide1,slide2,slide3, ...props } : Props) => {
    const { c } = useBuilderContext();

    return(
<div id="resume" className="resume segments">
  <div className="container">
    <div className="box-content">
      <div className="section-title">
        <h3 {...c(title)}>{title[0]}</h3>
      </div>
      <div className="owl-carousel owl-theme">
        <div className="content">
          {/* my experience */}
          <div className="row ">
            <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="content-left">
                <div className="title-resume">
                  <h3>Experience</h3>
                  <h2>
                    More than 6 years experience as a <span>Designer</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="content-right">
                <ul className="timeline">
                  <li>
                    <h4>Pentagon Design</h4>
                    <span>Graphic Designer (2017 - 2019)</span>
                  </li>
                  <li>
                    <h4>Animate Studio</h4>
                    <span>Graphic Designer (2015 - 2017)</span>
                  </li>
                  <li>
                    <h4>Cute Studio</h4>
                    <span>Graphic Designer (2014 - 2015)</span>
                  </li>
                  <li>
                    <h4>City Printing</h4>
                    <span>Graphic Designer (2013 - 2014)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* end my experience */}
        </div>
        <div className="content">
          {/* my education */}
          <div className="row ">
            <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="content-left">
                <div className="title-resume">
                  <h3>Education</h3>
                  <h2>
                    Learning experience in a few{" "}
                    <span>Professional Universities</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="content-right">
                <ul className="timeline">
                  <li>
                    <h4>National University</h4>
                    <span>Graphic Design Faculty (2016 - 2019</span>
                  </li>
                  <li>
                    <h4>City University</h4>
                    <span>Science Faculty (2012 - 2015)</span>
                  </li>
                  <li>
                    <h4>International University</h4>
                    <span>Technical Information (2010 - 2012)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* end my education */}
        </div>
        <div className="content">
          {/* my skill */}
          <div className="my-skill">
            <div className="row ">
              <div className="col-md-6 col-sm-12 col-xs-12">
                <div className="content-left">
                  <div className="title-resume">
                    <h3>Skill</h3>
                    <h2>
                      With good <span>Personal</span> and{" "}
                      <span>Professional Skills</span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-xs-12">
                <div className="content-right">
                  <div id="accordionSkill" className="accordion">
                    <div className="card">
                      <div id="personalSkill" className="card-header">
                        <h2>
                          <button
                            className="btn btn-link"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapse1"
                            aria-expanded="true"
                            aria-controls="collapse1"
                          >
                            <i className="fas fa-circle" />
                            Personal Skill
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
                            <li>
                              <div className="skill-title">
                                <span>Creativity</span>
                              </div>
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  aria-valuenow={85}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                  style={{ width: "85%" }}
                                />
                              </div>
                            </li>
                            <li>
                              <div className="skill-title">
                                <span>Innovation</span>
                              </div>
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  aria-valuenow={80}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                  style={{ width: "80%" }}
                                />
                              </div>
                            </li>
                            <li>
                              <div className="skill-title">
                                <span>Communication</span>
                              </div>
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  aria-valuenow={90}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                  style={{ width: "90%" }}
                                />
                              </div>
                            </li>
                            <li>
                              <div className="skill-title">
                                <span>Teamwork</span>
                              </div>
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  aria-valuenow={95}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                  style={{ width: "95%" }}
                                />
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div id="proSkill" className="card-header">
                        <h2>
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapse2"
                            aria-expanded="false"
                            aria-controls="collapse2"
                          >
                            <i className="fas fa-circle" />
                            Professional Skill
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapse2"
                        className="collapse"
                        aria-labelledby="proSkill"
                        data-parent="#accordionSkill"
                      >
                        <div className="card-body">
                          <ul className="pro-skill">
                            <li>
                              <div className="skill-title">
                                <span>Graphic Design</span>
                              </div>
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  aria-valuenow={98}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                  style={{ width: "98%" }}
                                />
                              </div>
                            </li>
                            <li>
                              <div className="skill-title">
                                <span>HTML &amp; CSS</span>
                              </div>
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  aria-valuenow={90}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                  style={{ width: "90%" }}
                                />
                              </div>
                            </li>
                            <li>
                              <div className="skill-title">
                                <span>JavaScript</span>
                              </div>
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  aria-valuenow={80}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                  style={{ width: "80%" }}
                                />
                              </div>
                            </li>
                            <li>
                              <div className="skill-title">
                                <span>PHP</span>
                              </div>
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  aria-valuenow={75}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                  style={{ width: "75%" }}
                                />
                              </div>
                            </li>
                            <li>
                              <div className="skill-title">
                                <span>Photography</span>
                              </div>
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  aria-valuenow={70}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                  style={{ width: "70%" }}
                                />
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
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

    )
}
export const resume : BuilderComp = {
     name: 'resume',
     comp: Resume,
     props
};