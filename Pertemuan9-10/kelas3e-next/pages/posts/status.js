import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstStatus({data}){
    return (
        <Layout>
            <Head>
                <title>Daftar Status</title>
            </Head>

            <Image src="/images/profile.jpg" height={120} width={120} alt="jaemin"/>
            <h1>First Status at Kelas 3E</h1>
            <Link href="/">Kembali ke Halaman Utama</Link>
            {data.map((dat) => {
                return(
                    <p>{dat.nama}</p>
                );
            })}
        </Layout>
    );
}

export async function getServerSideProps(){
    const res = await fetch('https://my-json-server.typicode.com/bellasoniadwi/kelas3e/mahasiswa');
    const data = await res.json()

    return { props: { data } }
}