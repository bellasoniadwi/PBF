import useSWR from 'swr';
import Layout from "../../components/layout";

const fetcher = (...args) => fetch(...args).then(res => res.json())

function Profile () {
    const { data, error, isLoading } = useSWR('http://localhost:3004/posts', fetcher);
   
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
   
    // render data
    return (
        <div>
            {data.map((dat) => {
                return(
                    <div>
                        <h1> {dat.title} </h1>
                        <h2> {dat.author} </h2>
                    </div>
                );
            })}
        </div>
    )
}

function Form(){
    const handleSubmit = async(event) => {
        event.preventDefault()
        const data = {
            id: event.target.id.value,
            title: event.target.title.value,
            author: event.target.author.value,
        }
        const JSONdata = JSON.stringify(data)
        const endpoint = 'http://localhost:3004/posts'
        const options = {
            method: 'post',
            header: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json',
            },
            body: JSONdata,
        }
        const response = await fetch(endpoint, options)
    }

    return(
        <form onSubmit = {handleSubmit}>
            <label htmlFor='id'>Id  </label>
            <input type='text' id='id' name='id' required/><br></br>

            <label htmlFor='title'>Title  </label>
            <input type='text' id='title' name='title' required/><br></br>

            <label htmlFor='author'>Author  </label>
            <input type='text' id='author' name='author' required/><br></br><br></br>

            <button type='submit'>Submit</button>
        </form>
    );
}

function App(){
    return(
        <Layout>
            <Form/>
            <Profile/>
        </Layout>
    )
}

export default App;