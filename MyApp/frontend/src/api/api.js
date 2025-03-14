import axios from 'axios';

function apiService(endpoint) {
        let response =  fetch(endpoint)
        const posts =  response.json()
        return posts
    }

export default {

    getListPosts(){
        let endpoint = 'http://127.0.0.1:8000/blog/requests/';
        return apiService(endpoint);
    }

}

/*
const NoListResult = ({title}) => {
        return (
            <strong>{title}</strong>
        )
   }

const BuildPage = () => {
    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getList().then(posts_ => {
            setPosts(posts_)
            setLoading(false)
        }).catch(error => {
            alert('Ошибка запроса')
        })
    }, [])

    if (loading) {
        return <>
            Загрузка...
        </>
    }


    if (posts.length == 0) {
        return <NoListResult title="Нет постов" />
    }
    }
    */