import {useRouter} from "next/router";

function Article(){

    const router = useRouter();
    console.log(router.query.slugs);
    const slugs = router.query.slugs || [];
    
    if(slugs.length >1){
        return (<h3>this article is written by {slugs[0]} at {slugs[1]} /{slugs[2]}/{slugs[3]}/{slugs[4]}</h3>);
    }

    return <h1>Article</h1>
}
export default Article;