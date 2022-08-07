import Head from "next/head";
import Header from "./manager-header/manager-header";
import Body from "./manager-body/manager-body";
import {TreeProps} from "utils";

export default function manager(treeProps : TreeProps){
    return (
        <div>
            <Head>
                <title>Manager</title>
                <meta name="description" content="mysnippits Manager"/>
            </Head>
            <Header></Header>
            <Body {...treeProps}></Body>
        </div>
    )
}


export async function getServerSideProps() {
    const req = await fetch('http://localhost:3000/tree-sample.json')
    const data = await req.json()

    return {
        props: { nodeCollection: data },
    }
}