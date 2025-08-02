import { ListField, ModelField, StringField, useBuilderContext } from "../builder";
import { BuilderComp, BuilderMedia, WC, WCList } from "../builder/types";
import { Link, MediaComp } from "../comps";


interface Blog {
    title: string;
    date: string;
    categorie: string;
    image: BuilderMedia;
    page:{
        link:string;
    }
}

interface Props {
    title: WC<string>;
    blogs: WCList<Blog>;
}

function formatDate(dateString: string): string {
    const date = new Date(dateString);
  
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
  
    return date.toLocaleDateString('en-US', options);
  }

const props = {
    title: StringField({ default: "My Blog" }),
    blogs: ListField({
        props: ModelField({ model: "blog", query: "{ title image { public_id width height } date categorie page {link}" }),
        default: new Array(2).fill(
            {
                title: "blog title",
                categorie: "categorie",
                date: new Date().toString(),
            }
        ) as Blog[]
    })
}


const Blog = ({ blogs, title, ...props }: Props) => {
    const { c } = useBuilderContext();
    return (
        <>
            {/* blog */}
            <div {...c(props)} id="blog" className="blog segments">
                <div className="container">
                    <div className="section-title">
                        <h3 {...c(title)}>{title[0]}</h3>
                    </div>
                    <div {...c(blogs)} className="row">
                        {blogs[0].map((blog,index) => (
                            <div key={index} {...c(blog)} className="col-md-6">
                                <div className="content">
                                    <div className="image">
                                      {!blog.image && <img src="images/blog1.jpg" alt="" />}
                                      {blog.image && <MediaComp.comp media={blog.image} width={600} />}
                                    </div>
                                    <div className="blog-title">
                                        <h4>
                                      {/* {blog.page && blog.page.url ? blog.page.url : "#"} */}
                                            <Link href={blog.page?.link ?? "#"}>
                                                {blog.title}
                                            </Link>
                                        </h4>
                                        <div className="date">
                                        {formatDate(blog.date)} <i className="fas fa-circle" />{" "}
                                            <a href="">
                                                <span>{blog.categorie}</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
            {/* end blog */}
        </>

    )
}

export const BlogComp:BuilderComp ={
    comp:Blog,
    name:"blog",
    props
}