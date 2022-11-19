const success = require("../../middleware/success");
const _service = require("../services/service");

module.exports = {
    userSignup: async function (req, res) {
        try {
            let user = await _service.signup(req.body);

            return success(res, 200, true, "Signup successfully", user)

        } catch (err) {
            return success(res, 400, false, err.message)
        }
    },
    userSignin: async function (req, res) {
        try {
            let user = await _service.signin(req.body);

            return success(res, 200, true, "Signin Successful", user)
        } catch (err) {
            return success(res, 400, false, err.message)
        }
    },

    forgotPassword: async function (req, res) {
        try {
            let message = await _service.forgotPassword(req.body)

            return success(res, 200, true, "Success", message);
        } catch (err) {
            return success(res, 400, false, err.message)
        }
    },


    changePassword: async function (req, res) {
        try {

            let message = await _service.changePassword(req.body);

            return success(res, 200, true, "Success", message)

        } catch (err) {
            return success(res, 400, false, err.message)
        }
    },

    verifyUserEmail: async (req, res) => {
        try {
            let message = await _service.verifyUser(req.body);

            return success(res, 200, true, "success", message)
        } catch (err) {
            return success(res, 400, false, err.message)
        }
    },

    // AddBlogs: async (req, res) => {
    //     try {

    //         let { title, discription, catagory_id } = req.body

    //         let user = JSON.parse(JSON.stringify(req.next));
    //         // let {user_id}= res.user;
    //         let { user_id } = user;

    //         let object = {
    //             title, discription, catagory_id, user_id
    //         }

    //         let reqDTO = AddBlogsConverter.requestTODTO(object);

    //         await FindBlogUser(reqDTO);

    //         let createUser = await createBlog(reqDTO);

    //         let response = AddBlogsConverter.toResponse(createUser);

    //         return success(res, 200, true, "Blog Created", response)
    //     } catch (err) {
    //         return success(res, 400, false, err.message)
    //     }
    // },

    // BlogsList: async (req, res) => {
    //     try {
    //         let user = JSON.parse(JSON.stringify(req.next));

    //         let reqDTO = BlogsListConverter.requestToDTO(user);

    //         await FindBlogUser(reqDTO);

    //         let list = await FindBlogList(req.body);

    //         let response = BlogsListConverter.toResponse(list);

    //         return success(res, 200, true, "Blog List", response)

    //     } catch (err) {
    //         return success(res, 400, false, err.message)
    //     }
    // }
}

