import dayjs from 'dayjs'
const mockList = [
    { id: 1, name: "tom", age: 18 },
    { id: 2, name: "jerry", age: 18 },
    { id: 3, name: "mike", age: 18 },
    { id: 4, name: "jack", age: 18 },
    { id: 5, name: "larry", age: 18 },
    { id: 6, name: "white", age: 18 },
    { id: 7, name: "peter", age: 18 },
    { id: 8, name: "james", age: 18 },
];
export default [
    {
        url: '/api/getUser',
        method: 'post',
        response: ({ body }) => {
            const { pageNo, pageSize } = body;
            const data = mockList.filter((item, index) => {
                return index < pageSize * pageNo && index >= pageSize * (pageNo - 1)
            })
            return {
                code: 100,
                message: '获取用户列表成功',
                data,
                total: mockList.length
            };
        },
    },
    {
        url: '/api/login',
        method: 'post',
        response: ({ body }) => {
            const { name, password } = body;
            if (name === 'admin' && password === 'admin') {
                return {
                    code: 100,
                    message: 'ok',
                    data: {
                        id: '128379812379',
                        name: 'Bob Dylan',
                        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                        token: 'eaoihdoasihdnoanmd',
                        expireTime: dayjs().add(30, 'm').valueOf()
                    },
                };
            }
            return {
                code: 206,
                message: '用户名或密码错误',
                data: null
            }
        },
    },
];