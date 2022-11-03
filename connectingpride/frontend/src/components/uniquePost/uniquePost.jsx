import React from "react"
import "./uniquePost.css"
import { Link } from "react-router-dom";

export default function UniquePost() {

    return (
        <>
            <div className="uniquePost">
                <div className="uniquePostWrapper">
                    <h1 className="uniquePostTitle">
                       Hello
                            <div className="editPost">
                                <i
                                    className="postIcon far fa-edit"
                                ></i>
                                <i
                                    className="postIcon far fa-trash-alt"
                                ></i>
                            </div>
                    </h1>

                        <img src="/images/background.png" alt="post image" className="uniquePostImage" />


                    <div className="uniquePostInfo">
                        <span className="uniquePostAuthor">            Author:
                            <Link to={`/?user=sage`} className="link">
                                <b> sage g</b>
                            </Link> </span>
                        <span className="uniquePostDate"> today
                        </span>

                    </div>

     
                    <p className="uniquePostDescription">resggregresssssssssssssssssssgrerggertsgr egrte rgenijnagreiunnigurteaniugreniauuingreanuigraeinunuigren iargeiniugareniugreiuniurgeiugrieusngeiurgniuersngiusenrgiusneg nsgier irseiuoilsre</p>
                    
                </div>
            </div>
        </>
    )
}