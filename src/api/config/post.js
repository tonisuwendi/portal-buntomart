import axios from 'axios';

const headers = {
    'Content-Type': 'application/json',
};

const Post = async (url = '', data = null) => {
    try {
        const res = await axios.post(url, data, headers);
        return res.data;
    } catch (error) {
        return error.response.data;
    }
};

export default Post;
