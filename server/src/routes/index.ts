// import elysia
import {Elysia, t} from "elysia";
import {createProduct, getProductByBarcode, getProducts} from "../controllers/ProductController";

const Routes = new Elysia({prefix: '/products'})
    .get('/', () => getProducts())
    .post('/', ({body}) => createProduct(body as {
        name: string;
        description?: string;
        price: number;
        priceAfterDiscount?: number;
        purchasePrice?: number;
        warrantyPeriod: number;
        type?: string;
        status?: string;
    }), {
        body: t.Object({
            name: t.String({minLength: 3, maxLength: 255, required: true}),
            price: t.Number({required: true}),
            warrantyPeriod: t.Number({required: true}),
        })
    })
    .get('/:barcode', ({params: {barcode}}) => getProductByBarcode(barcode), {
        params: t.Object({
            barcode: t.String({required: true})
        })
    });

export default Routes;

