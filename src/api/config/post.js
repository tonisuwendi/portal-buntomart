import axios from 'axios';

const headers = {
    'Content-Type': 'application/json',
}

const Post = async (url = '', data = null) => {
    const res = await axios.post(url, data, headers);
    return res.data;
}

export default Post;
