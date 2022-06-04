const secondPost = (props) => {
    return (
        <div>
            <h1>{props.hi}</h1>
        </div>
    )
}
export async function getStaticProps() {
    console.log('api data aagya!');
    return {
        props: {
            'hi': '1',
        }
    }
}
export default secondPost;