export default [
    {
        url: '/api/getUsers',
        method: 'get',
        response: () => {
            return {
                code: 0,
                message: 'ok',
                data: ['tom','jerry'],
            };
        },
    },
];