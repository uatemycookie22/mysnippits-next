import Head from "next/head";
import Header from "./manager-header/manager-header";

export default function manager(){
    return (
        <div>
            <Head>
                <title>Manager</title>
                <meta name="description" content="mysnippits Manager"/>
            </Head>
            <Header></Header>
            <p>Snippet manager</p>
        </div>
    )
}