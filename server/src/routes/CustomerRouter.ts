// import elysia
import {Elysia, t} from "elysia";

// import controllers
import {createCustomer, deleteCustomer, getCustomerById, getCustomers, updateCustomer} from "../controllers/CustomerController";


const CustomerRouter = new Elysia({prefix: '/customers'})
    .get('/', () => getCustomers())
    .post('/', ({body}) => createCustomer(body as {
        name: string;
        email: string;
        phone: string;
        address?: string;
    }), {
        body: t.Object({
            name: t.String({minLength: 3, maxLength: 255, required: true}),
            email: t.String({minLength: 3, maxLength: 255, required: true}),
            phone: t.String({minLength: 3, maxLength: 255, required: true}),
        })
    })
    .get('/:id', ({params: {id}}) => getCustomerById(id), {
        params: t.Object({
            id: t.Number({required: true})
        })
    })
    .patch('/:id', ({params: {id}, body}) => updateCustomer(id, body), {
        params: t.Object({
            id: t.Number({required: true})
        }),
        body: t.Object({
            name: t.String({minLength: 3, maxLength: 255}),
            email: t.String({minLength: 3, maxLength: 255}),
            phone: t.String({minLength: 3, maxLength: 255}),
            address: t.String({maxLength: 255}),
        })
    })
    .delete('/:id', ({params: {id}}) => deleteCustomer(id), {
        params: t.Object({
            id: t.Number({required: true})
        })
    });

export default CustomerRouter