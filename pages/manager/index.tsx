import Head from "next/head";
import Header from "./manager-header/manager-header";
import Body from "./manager-body/manager-body";

export default function manager(){
    return (
        <div>
            <Head>
                <title>Manager</title>
                <meta name="description" content="mysnippits Manager"/>
            </Head>
            <Header></Header>
            <Body></Body>
        </div>
    )
}