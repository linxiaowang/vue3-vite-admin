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
            const {pageNo, pageSize} = body;
            const data = mockList.filter((item, index)=>{
                return index < pageSize * pageNo && index >= pageSize * (pageNo -1)
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
                        avatar: 'http://i0.hdslb.com/bfs/article/878a6c57bed136d9d176a6eb8289a04787b126bf.jpg'

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