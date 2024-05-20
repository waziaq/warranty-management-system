// import elysia
import {Elysia, t} from "elysia";

// import controllers
import {createClaim, deleteClaim, getClaimById, getClaims, updateClaim, getClaimByProductBarcode} from "../controllers/ClaimController";

// initiate elysia
const ClaimRouter = new Elysia({prefix: '/claims'})
    .get('/', () => getClaims())
    .post('/', ({body}) => createClaim(body as {
        productBarcode: string;
        customerId: number;
        description?: string;
        status?: string;
    }), {
        body: t.Object({
            productBarcode: t.String({minLength: 3, maxLength: 255, required: true}),
            customerId: t.Number({required: true}),
            description: t.String({maxLength: 255}),
            status: t.String({maxLength: 255})
        })
    })
    .get('/:id', ({params: {id}}) => getClaimById(id), {
        params: t.Object({
            id: t.Number({required: true})
        })
    })
    .patch('/:id', ({params: {id}, body}) => updateClaim(id, body), {
        params: t.Object({
            id: t.Number({required: true})
        }),
        body: t.Object({
            productBarcode: t.String({minLength: 3, maxLength: 255}),
            customerId: t.Number(),
            description: t.String({maxLength: 255}),
            status: t.String({maxLength: 255})
        })
    })
    .delete('/:id', ({params: {id}}) => deleteClaim(id), {
        params: t.Object({
            id: t.Number({required: true})
        })
    })
    .get('/product/:barcode', ({params: {barcode}}) => getClaimByProductBarcode(barcode), {
        params: t.Object({
            barcode: t.String({required: true})
        })
    });

export default ClaimRouter